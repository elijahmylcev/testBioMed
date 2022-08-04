import { useState } from 'react';

function AddTodoItem({ AddItemInCollection }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function Add(e, inputTitle, inputDescription) {
    e.preventDefault();
    console.log(inputTitle, inputDescription);
    AddItemInCollection(inputTitle, inputDescription);
    setTitle('');
    setDescription('');
  }

  return (
    <form action="submit">
      <input
        type="text"
        name="title"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}

      />
      <button
        type="submit"
        onClick={(e) => Add(e, title, description)}
      >
        Добавить
      </button>
    </form>
  );
}

export default AddTodoItem;
