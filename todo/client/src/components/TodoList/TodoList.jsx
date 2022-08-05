import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

// {edit ?
//   <div className="todoList__item_title">
//   <MyInput value={todoItem.title} />
//   <MyInput value={todoItem.description} />
//   <MyButton>Изменить</MyButton>
//   </div>
//   :
// }

function TodoList({ todoCollection, deleteItem }) {
  return (
    <div className="todoList">
      {todoCollection.map((todoItem) => (
        <TodoItem
          id={todoItem.id}
          title={todoItem.title}
          description={todoItem.description}
          deleteItem={deleteItem}
          key={todoItem.id}
        />
      )) }
    </div>
  );
}

export default TodoList;
