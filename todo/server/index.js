const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors')
const schema = require('./schema');
const todoItems = [
{ id: 1, title: 'Learn JavaScript', description: 'Description Lorem ' },
{ id: 2, title: 'Complete Tasks', description: 'Description Lorem ' }
]

let id = 2;

const app = express();
app.use(cors());

const root = {
  getAllTodoItems: () => {
    return todoItems 
  },
  createTodoItem: ({input}) => {
    id += 1
    const todoItem = {
      id: id, ...input
    }

    todoItems.push(todoItem)
    return todoItem
  },
  deleteTodoItem: ({id}) => {
    const todoIndex = todoItems.findIndex(item => item.id === id);

      if (todoIndex === -1) throw new Error("Todo not found");

      const [deleted] = todoItems.splice(todoIndex, 1);
      return deleted;
  }
}

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(5000, () => console.log('Server open on: http://localhost:5000/graphql'))