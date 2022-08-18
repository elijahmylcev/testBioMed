import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import GET_ALL_TODOITEMS from './query/todoItem';

import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import TodoList from './components/TodoList/TodoList';
import './App.scss';

function App() {
  const { data, loading } = useQuery(GET_ALL_TODOITEMS);

  const [todoCollection, setTodoCollection] = useState([]);

  useEffect(() => {
    if (!loading) {
      setTodoCollection(data.getAllTodoItems);
    }
  }, [data]);

  function AddItemInCollection(newItem) {
    setTodoCollection((prevState) => ([
      ...prevState, newItem,
    ]));
  }

  function deleteItem(id) {
    setTodoCollection((prevState) => prevState.filter((element) => element.id !== id));
  }

  function changeTodoItem(item) {
    const updatedCollection = todoCollection.map((element) => {
      if (element.id === item.id) {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
        };
      }
      return element;
    });
    setTodoCollection(updatedCollection);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO List</h1>

        {(todoCollection.length === 0)
          ? <h2>У вас нет тасков, но вы можете добавить их в форме ниже</h2>
          : (
            <h2>
              У вас
              {' '}
              {todoCollection.length}
              {' '}
              задач(и)
            </h2>
          )}

        <AddTodoItem AddItemInCollection={AddItemInCollection} />
        <TodoList
          todoCollection={todoCollection}
          deleteItem={deleteItem}
          changeTodoItem={changeTodoItem}
        />
      </header>
    </div>
  );
}

export default App;
