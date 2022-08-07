const { buildSchema } = require("graphql");

const schema = buildSchema(
  `
    type TodoItem {
      id: Int
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
      title: String!
      description: String
    }

    type Query {
      getAllTodoItems: [TodoItem]
    }

    type Mutation {
      createTodoItem(input: TodoItemInput): TodoItem!
      deleteTodoItem(id: Int!): TodoItem!
      updateTodoItem(id: Int!, title: String!, description: String): TodoItem!
    }
  `
)

module.exports = schema