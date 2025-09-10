// callback hell

fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((products) => {
    console.log("All Products : ", products);

    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((product1) => {
        console.log("Product-1", product1);

        fetch("https://dummyjson.com/products/2")
          .then((res) => res.json())
          .then((product2) => {
            console.log("Product-2", product2);
          });
      });
  });


  // we can prevent this using async/ await 

  async function getProducts() {
  const res1 = await fetch("https://dummyjson.com/products");
  const products = await res1.json();
  console.log("All Products:", products);

  const res2 = await fetch("https://dummyjson.com/products/1");
  const product1 = await res2.json();
  console.log("Product 1:", product1);

  const res3 = await fetch("https://dummyjson.com/products/2");
  const product2 = await res3.json();
  console.log("Product 2:", product2);
}

getProducts();