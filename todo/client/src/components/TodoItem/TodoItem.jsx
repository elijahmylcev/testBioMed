import './TodoItem.scss';
import { useState } from 'react';
import MyInput from '../../UIComponents/MyInput/MyInput';
import MyButton from '../../UIComponents/MyButton/MyButton';
import deleteIcon from '../../icons/delete.png';
import editIcon from '../../icons/edit.png';

function TodoItem({
  id, title, description, deleteItem,
}) {
  const [edit, setEdit] = useState(false);

  return (
    !edit
      ? (
        <div className="todoList__item">
          <div className="todoList__item_title">
            {title}
            <div className="todoList__item_description">{description}</div>
          </div>
          <div className="todoList__item_icons">
            <img
              className="todoList__item_delete"
              src={editIcon}
              alt="edit"
              aria-hidden="true"
              onClick={() => setEdit(true)}
            />
            <img
              className="todoList__item_delete"
              src={deleteIcon}
              alt="delete"
              onClick={() => deleteItem(id)}
              aria-hidden="true"
            />

          </div>
        </div>
      )
      : (
        <div className="todoList__item">
          <MyInput value={title} />
          <MyInput value={description} />
          <MyButton>Изменить</MyButton>
        </div>
      )
  );
}

export default TodoItem;
