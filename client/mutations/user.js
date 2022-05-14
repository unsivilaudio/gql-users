import { gql } from '@apollo/client';

export const USER_SIGN_IN = gql`
    mutation UserSignIn($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
        }
    }
`;

export const USER_SIGN_OUT = gql`
    mutation UserSignOut {
        logout {
            id
            email
        }
    }
`;

export const USER_SIGN_UP = gql`
    mutation UserSignUp($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
            id
            email
        }
    }
`;
