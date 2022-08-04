import './TodoList.scss';
import deleteIcon from './delete.png';

function TodoList({ todoCollection }) {
  return (
    <div className="todoList">
      {todoCollection.map((todoItem) => (
        <div className="todoList__item" key={todoItem.id}>
          <div className="todoList__item_title">
            {todoItem.title}
            <div className="todoList__item_description">{todoItem.description}</div>
          </div>
          <img className="todoList__item_delete" src={deleteIcon} alt="delete" />
        </div>
      )) }
    </div>
  );
}

export default TodoList;
