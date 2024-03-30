console.log(foo(), "1");

function foo() {
  console.log("Waiting for bar!");
}

function foo() {
  console.log(foo, "8");
  function bar() {
    console.log("bar again");
  }

  bar();

  function bar() {
    console.log("bar again and again", "16");
  }
}
