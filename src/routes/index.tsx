import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/auth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {

    const { signed, loading } = useContext(AuthContext);

    return (

        loading 
            
        ?

            <View 
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            >

                <ActivityIndicator size='large' color='#131313'/>

            </View>

        : 

            signed ? <AppRoutes /> : <AuthRoutes />

    )

};