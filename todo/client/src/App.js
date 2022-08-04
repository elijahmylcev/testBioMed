import { useState } from 'react';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import TodoList from './components/TodoList/TodoList';
import './App.scss';

function App() {
  const [todoCollection, setTodoCollection] = useState([
    { id: 1, title: 'Learn JavaScript', description: 'Description Lorem ' },
    { id: 2, title: 'Complete Tasks', description: 'Description Lorem ' },
  ]);

  function AddItemInCollection(title, description) {
    setTodoCollection((prevState) => {
      const newItem = {
        id: Date.now(),
        title,
        description,
      };
      return [
        ...prevState, newItem,
      ];
    });
  }

  function deleteItem(id) {
    setTodoCollection((prevState) => prevState.filter((element) => element.id !== id));
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
        />
      </header>
    </div>
  );
}

export default App;
