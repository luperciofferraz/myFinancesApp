import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import  { useNavigation } from '@react-navigation/native';
import { Container, Nome, NewLink, NewText, Logout, LogoutText } from './styles';

export function Profile() {

    const navigation = useNavigation();
    const { user, signOut } = useContext(AuthContext);
    

    return (

        <Container>
            
            <Nome>
                {user && user.nome}
            </Nome>

            <NewLink
                onPress={ () => navigation.navigate('Registrar') }
            >
                <NewText>Registrar Gastos</NewText>
            </NewLink>

            <Logout
                onPress={ () => signOut() }
            >
                <LogoutText>Sair</LogoutText>
            </Logout>

        </Container>

    );

}