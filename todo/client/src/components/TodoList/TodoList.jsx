import './TodoList.scss';
import deleteIcon from '../../icons/delete.png';
import editIcon from '../../icons/edit.png';

function TodoList({ todoCollection, deleteItem }) {
  return (
    <div className="todoList">
      {todoCollection.map((todoItem) => (
        <div className="todoList__item" key={todoItem.id}>
          <div className="todoList__item_title">
            {todoItem.title}
            <div className="todoList__item_description">{todoItem.description}</div>
          </div>
          <div className="todoList__item_icons">
            <img
              className="todoList__item_delete"
              src={editIcon}
              alt="edit"
            // onClick={() => edit(todoItem.id)}
              aria-hidden="true"
            />
            <img
              className="todoList__item_delete"
              src={deleteIcon}
              alt="delete"
              onClick={() => deleteItem(todoItem.id)}
              aria-hidden="true"
            />

          </div>
        </div>
      )) }
    </div>
  );
}

export default TodoList;
