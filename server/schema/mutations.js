const AuthService = require('../services/auth');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const UserType = require('./types/user-type');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.signup({ email, password, req });
            },
        },
        logout: {
            type: UserType,
            resolve(parentValue, _, req) {
                const user = req.user;
                req.logout();
                return user;
            },
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.login({ email, password, req });
            },
        },
    },
});

module.exports = mutation;
