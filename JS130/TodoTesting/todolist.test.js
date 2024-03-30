const Todo = require("./todo");
const TodoList = require("./todolist");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the gym");

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here
  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });
  test("calling toArray returns the list in array form", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  test("check first", () => {
    expect(list.first()).toBe(todo1);
  });
  test("check last", () => {
    expect(list.last()).toBe(todo3);
  });
  test("check shift return and returning list", () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  test("check pop return and returning list", () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });
  test("test isDone", () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    console.log(list);
    expect(list.isDone()).toBe(true);
  });
});
