import { useState } from 'react';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import TodoList from './components/TodoList/TodoList';
import './App.scss';

function App() {
  const [todoCollection, setTodoCollection] = useState([
    { id: 1, title: 'Learn JavaScript', description: 'Description Lorem ' },
    { id: 2, title: 'Complete Tasks', description: 'Description Lorem ' },
  ]);

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
