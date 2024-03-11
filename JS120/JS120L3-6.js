// 1)
function createItem(id, name, stock, price) {
  return {
    Id: id,
    Name: name,
    Stock: stock,
    Price: price,
    setPrice(price) {
      if (price >= 0) {
        this.Price = price;
      } else {
        console.log("invalid Price or Item");
      }
    },
    describeItem() {
      console.log(`Name: ${this.Name}`);
      console.log(`ID: ${this.Id}`);
      console.log(`Price: $${this.Price}`);
      console.log(`Stock: ${this.Stock}`);
    },
  };
}
// 2)
function setPrice(item, price) {
  if (item && price >= 0) {
    item.Price = price;
  } else {
    console.log("invalid Price or Item");
  }
}
function describeItem(Item) {
  console.log(`Name: ${Item.Name}`);
  console.log(`ID: ${Item.Id}`);
  console.log(`Price: $${Item.Price}`);
  console.log(`Stock: ${Item.Stock}`);
}
