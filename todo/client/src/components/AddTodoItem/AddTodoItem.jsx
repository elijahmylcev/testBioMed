import { useState } from 'react';
import MyButton from '../../UIComponents/MyButton/MyButton';
import MyInput from '../../UIComponents/MyInput/MyInput';
import './AddTodoItem.scss';

function AddTodoItem({ AddItemInCollection }) {
  const [title, setTitle] = useState('gdfgdfg');
  const [description, setDescription] = useState('');

  function addNewTask(e) {
    e.preventDefault();
    console.log('hello');
    if (title !== '') {
      const newItem = {
        id: Date.now(),
        title,
        description,
      };
      console.log(newItem);
      AddItemInCollection(newItem);
      setTitle('');
      setDescription('');
    }
  }

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
        onClick={addNewTask}
      >
        Добавить
      </MyButton>
    </form>
  );
}

export default AddTodoItem;
