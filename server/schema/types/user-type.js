const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: { type: GraphQLID },
        email: { type: GraphQLNonNull(GraphQLString) },
    },
});

module.exports = UserType;
