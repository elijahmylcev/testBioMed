function TodoList({ todoCollection }) {
  return (
    <div className="todoList">
      {todoCollection.map((todoItem) => (
        <div className="todoList__item">
          {todoItem.id}
          {todoItem.title}
        </div>
      )) }
    </div>
  );
}

export default TodoList;
