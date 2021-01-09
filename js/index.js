// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span");
  console.log(priceElement);
  const price = priceElement.innerText;
  const quantity = product.querySelector(".quantity input").valueAsNumber;
  let subTotal = price * quantity;
  const subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerText = subTotal;
  return subTotal;
  //alert(`${price}, ${quantity}, ${subTotal}`);
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  let total = 0;
  for (let index = 0; index < allProducts.length; index++) {
    total += updateSubtotal(allProducts[index]);
  }
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  const parentNode = target.parentNode.parentNode;
  const parent = document.getElementsByTagName("tbody")[0];
  parent.removeChild(parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const cartElement = document.getElementsByClassName("cart")[0];
  const newProduct = document.getElementsByClassName("create-product")[0];
  const newProductName = newProduct.querySelector(".name input").value;
  const newPrice = newProduct.querySelector(".price input").valueAsNumber;
  console.dir(newProductName, newPrice);

  // Create Product Row
  let productTr = document.createElement("tr");
  productTr.setAttribute("class", "product");

  productTr.innerHTML = `
          <td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;

  console.log(productTr);
  cartElement.appendChild(productTr);
  const newProductInput = newProduct.querySelector(".name input");
  newProductInput.value = "Product Name";
  const newPriceInput = newProduct.querySelector(".price input");
  newPriceInput.valueAsNumber = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const allRemoveButtons = document.getElementsByClassName("btn-remove");
  for (i = 0; i < allRemoveButtons.length; i++) {
    allRemoveButtons[i].addEventListener("click", (event) =>
      removeProduct(event)
    );
  }
  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);

  //... your code goes here
});
