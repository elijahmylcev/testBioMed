let data = [];
let result = '';

function sorter(arg) {
  if (arg !== '4') {
    data = [...data, arg]
  }

  data.sort()

  if (data.length == 6) {
    while (data.length) {
      let searchNumber = data.find(element => !isNaN(element))
      let searchLetter = data.find(element => isNaN(element))
      data.splice(data.indexOf(searchNumber), 1);
      data.splice(data.indexOf(searchLetter), 1);
      result += ' ' + searchNumber + ' '  + searchLetter;
    }
  }

  if (!data.length) {
    console.log(result);
  }
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

func1(sorter);
func2(sorter);