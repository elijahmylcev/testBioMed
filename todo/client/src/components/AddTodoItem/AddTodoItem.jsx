import { useState } from 'react';

function AddTodoItem({ props }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function Add(e, tit, descr) {
    e.preventDefault();

    console.log(tit, descr);
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
