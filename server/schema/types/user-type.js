const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: { type: GraphQLNonNull(GraphQLString) },
    },
});

module.exports = UserType;
