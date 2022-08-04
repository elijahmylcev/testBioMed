function TodoList({ todoCollection }) {
  return (
    <div className="todoList">
      {todoCollection.map((todoItem) => (
        <div className="todoList__item" key={todoItem.id}>
          {todoItem.id}
          {todoItem.title}
        </div>
      )) }
    </div>
  );
}

export default TodoList;
