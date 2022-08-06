const { buildSchema } = require("graphql");

const schema = buildSchema(
  `
    type TodoItem {
      id: ID
      title: String
      description: String
    }

    type TodoItems {
      items: [TodoItem]
    }

    input TodoItemsInput {
      items: [TodoItemInput]
    }

    input TodoItemInput {
      id: ID
      title: String!
      description: String!
    }

    type Query {
      getAllTodoItems: [TodoItem]
    }
  `
)

module.exports = schema