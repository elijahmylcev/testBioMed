const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors')
const schema = require('./schema');
const todoItems = [{id:1, title: 'JS', description: 'hello'}]

const app = express();
app.use(cors());

const root = {
  getAllTodoItems: () => {
    return todoItems 
  }
}

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(5000, () => console.log('start'))