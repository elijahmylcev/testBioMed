const { gql } = require('@apollo/client');

const GET_ALL_TODOITEMS = gql`
  query {
    getAllTodoItems {
      id, title,description
    }
  }
`;

export default GET_ALL_TODOITEMS;
