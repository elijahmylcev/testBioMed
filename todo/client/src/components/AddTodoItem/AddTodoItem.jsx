import { useState } from 'react';
import { useMutation } from '@apollo/client';

import MyButton from '../../UIComponents/MyButton/MyButton';
import MyInput from '../../UIComponents/MyInput/MyInput';
import './AddTodoItem.scss';
import CREATE_TODOITEM from '../../mutations/todoitem';

function AddTodoItem({ AddItemInCollection }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newTodoItem] = useMutation(CREATE_TODOITEM);

  const createTodoItem = (e) => {
    if (title !== '') {
      e.preventDefault();
      const newItem = {
        title,
        description,
      };
      newTodoItem({
        variables: {
          input: {
            title, description,
          },
        },
      }).then(({ data }) => {
        // console.log(data.createTodoItem.id);
        newItem.id = data.createTodoItem.id;
        setTitle('');
        setDescription('');
        AddItemInCollection(newItem);
      });
    }
  };

  return (
    <form action="submit">
      <MyInput
        type="text"
        name="title"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <MyInput
        type="text"
        name="description"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <MyButton
        type="submit"
        onClick={(e) => createTodoItem(e)}
      >
        Добавить
      </MyButton>
    </form>
  );
}

export default AddTodoItem;
