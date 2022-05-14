import { gql } from '@apollo/client';

export const CURRENT_USER = gql`
    query FetchCurrentUser {
        user {
            id
            email
        }
    }
`;
