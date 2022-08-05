import './TodoItem.scss';
import { useState } from 'react';
import MyInput from '../../UIComponents/MyInput/MyInput';
import MyButton from '../../UIComponents/MyButton/MyButton';
import deleteIcon from '../../icons/delete.png';
import editIcon from '../../icons/edit.png';

function TodoItem({
  id, title, description, deleteItem, changeTodoItem,
}) {
  const [edit, setEdit] = useState(false);
  const [stateTitle, setStateTitle] = useState(title);
  const [stateDescription, setStateDescription] = useState(description);

  function changeItem() {
    const changedItem = {
      id,
      title: stateTitle,
      description: stateDescription,
    };
    changeTodoItem(changedItem);
    setEdit((prevState) => !prevState);
  }
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
          <MyInput
            value={stateTitle}
            name="title"
            type="text"
            onChange={(e) => setStateTitle(e.target.value)}
          />
          <MyInput
            value={stateDescription}
            name="description"
            type="text"
            onChange={(e) => setStateDescription(e.target.value)}

          />
          <MyButton
            type="button"
            onClick={changeItem}
          >
            Изменить
          </MyButton>
        </div>
      )
  );
}

export default TodoItem;
