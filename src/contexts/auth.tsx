import React, { useState, createContext, useEffect } from 'react';
import { User } from '../types';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export function AuthProvider( { children }) {

    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        loadStorage();

    }, []);

    async function loadStorage() {
        
        setLoading(true);
        
        const storageUser = await AsyncStorage.getItem('Auth_user');

        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }

        setLoading(false);
    }

    //Logar usuario
    async function signIn(email, password) {

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then( async (value) => {

                let uid = value.user.uid;

                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {

                        let data = {

                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email

                        };

                        setUser(data);
                        storageUser(data)
                    });
            })
            .catch((error) => {
                alert(error.code);
            });

    }

    //cadastrar usuario
    async function signUp(email, password, nome) {

        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                
                let uid = value.user.uid;

                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome
                })
                .then(() => {

                    let data = {

                        uid: uid,
                        nome: nome,
                        email: value.user.email
                    };

                    setUser(data);
                    storageUser(data);
                })
                .catch((error) => {
                    alert(error.code);
                });
            })
            .catch((error) => {
                alert(error.code);
            });
    }

    //cadastrar usuario
    async function signOut() {

        await firebase.auth().signOut();
        await AsyncStorage.removeItem('Auth_user')
            .then( () => {

                setUser(null);

            });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    return (

        <AuthContext.Provider value = {{ signed: !!user , user, loading, signUp, signIn, signOut }}>

            {children}

        </AuthContext.Provider>

    );

}

