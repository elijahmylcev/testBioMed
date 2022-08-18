const { gql } = require('@apollo/client');

const CREATE_TODOITEM = gql`
  mutation createTodoItem($input: TodoItemInput) {
    createTodoItem(input: $input) {
      id, title, description
    }
  }
`;

export const DELETE_TODOITEM = gql`
  mutation deleteTodoItem($id: Int!) {
    deleteTodoItem(id: $id) {
      id
    }
  }
`;

export default CREATE_TODOITEM;
