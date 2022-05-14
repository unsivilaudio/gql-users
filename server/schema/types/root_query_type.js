const { GraphQLObjectType } = require('graphql');
const UserType = require('./user-type');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            resolve(parentValue, _, req) {
                return req.user;
            },
        },
    },
});

module.exports = RootQueryType;
