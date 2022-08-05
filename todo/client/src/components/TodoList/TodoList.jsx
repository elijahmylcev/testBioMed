import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

function TodoList({ todoCollection, deleteItem, changeTodoItem }) {
  return (
    <div className="todoList">
      {todoCollection.map((todoItem) => (
        <TodoItem
          id={todoItem.id}
          title={todoItem.title}
          description={todoItem.description}
          deleteItem={deleteItem}
          key={todoItem.id}
          changeTodoItem={changeTodoItem}
        />
      )) }
    </div>
  );
}

export default TodoList;
