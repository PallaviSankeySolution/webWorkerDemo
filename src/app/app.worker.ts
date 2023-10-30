

addEventListener('message', async ({ data }) => {
  var productData;
var userData;
var mergedData=[];
  // Fetch product data
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    productData = await response.json();
    console.log("** Product data **:", productData.products);
  } catch (error) {
    console.error("Fetch error for product data:", error);
  }

  // Fetch user data
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();
    userData = users;
    console.log("** User data **:", userData);
  } catch (error) {
    console.error("Fetch error for user data:", error);
  }

  // Merge product data and user data one by one
  if (productData.products.length === userData.users.length) {
    console.log("Entering if condition");
    for (let i = 0; i < productData.products.length; i++) {
      mergedData.push({
        user: userData.users[i],
        product: productData.products[i]
      });
    }
  } else {
    console.error("Product data and user data have different lengths.");
  }
  console.log("*** Merged data **:", mergedData);

  postMessage(mergedData);
});
