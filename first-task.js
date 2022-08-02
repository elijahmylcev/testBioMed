let data = [];

function tasker(arg) {
  if (arg !== '4') {
    data = [...data, arg]
  }
  console.log(data);
}

const func1 = (func) => {
  setTimeout(func, 3000, "1");
  setTimeout(func, 2000, "2");
  setTimeout(func, 1000, "4");
  setTimeout(func, 4000, "3");
}

const func2 = (func) => {
  setTimeout(func, 5000, "c");
  setTimeout(func, 6000, "b");
  setTimeout(func, 7000, "a");
}

func1(tasker);
func2(tasker);