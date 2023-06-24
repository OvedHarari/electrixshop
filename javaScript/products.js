// PRODUCTS ARRAY

let products = [
  {
    id: 2536,
    name: "Sony Pro 32GB XQD",
    price: 500,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/sony.jpg",
  },
  {
    id: 2537,
    name: "Lenovo Legion 15.6 Gaming",
    price: 4228,
    category: "Gaming Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/lenovo.jpg",
  },
  {
    id: 2538,
    name: "ASUS ROG GL552VW-DH71",
    price: 5300,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/asus.jpg",
  },

  {
    id: 2539,
    name: "Iphone 13 pro",
    price: 1000,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/p6.png",
  },

  {
    id: 2540,
    name: "Airpods",
    price: 100,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/a1.png",
  },

  {
    id: 2541,
    name: "Laptop",
    price: 200,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/laptop2.png",
  },

  {
    id: 2542,
    name: "Ipad",
    price: 300,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/t1.png",
  },

  {
    id: 2543,
    name: "Smart Watch",
    price: 50.6,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/w1.png",
  },

  {
    id: 2544,
    name: "PC Moniter",
    price: 600,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pcm1.png",
  },

  {
    id: 2545,
    name: "iPhone x",
    price: 500,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/phone1.png",
  },

  {
    id: 2546,
    name: "Headphone",
    price: 60,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/h1.png",
  },

  {
    id: 2547,
    name: "Fan",
    price: 50.6,
    category: "Home Gadgets",
    description: " Lorem ipsum dolor sit amet.",
    image: "./images/pr5.png",
  },
  {
    id: 2548,
    name: "Fridge",
    price: 1500,
    category: "Home Gadgets",
    description: " Lorem ipsum dolor sit amet.",
    image: "./images/pr6.png",
  },
  {
    id: 2549,
    name: "Gaming PC",
    price: 500.6,
    category: "Gaming Gadgets",
    description: " Lorem ipsum dolor sit amet.",
    image: "./images/pr7.png",
  },
  {
    id: 2550,
    name: "Moniter",
    price: 250,
    category: "Electronic Gadget",
    description: " Lorem ipsum dolor sit amet.",
    image: "./images/pr8.png",
  },
  {
    id: 2551,
    name: "Smart Watch",
    price: 30.2,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr9.png",
  },
  {
    id: 2552,
    name: "Power Bank",
    price: 100.5,
    category: "Electronic Gadget",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr10.png",
  },
  {
    id: 2553,
    name: "Gaming Mouse",
    price: 30,
    category: "Gaming Gadgets",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr11.png",
  },
  {
    id: 2554,
    name: "Joysticks",
    price: 150,
    category: "Gaming Gadgets",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr12.png",
  },
  {
    id: 2555,
    name: "Washion Machine",
    price: 100.5,
    category: "Home Gadgets",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr1.png",
  },
  {
    id: 2556,
    name: "AC",
    price: 500,
    category: "Home Gadgets",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr2.png",
  },
  {
    id: 2557,
    name: "Microwave Oven",
    price: 200.3,
    category: "Home Gadgets",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr3.png",
  },
  {
    id: 2558,
    name: "Fridge",
    price: 300,
    category: "Home Gadgets",
    description: "Lorem ipsum dolor sit amet.",
    image: "./images/pr4.png",
  },
];

// SHOW CARDS FUNCTIONALITY

function showCards() {
  for (let i = 0; i < products.length; i++) {
    let category = products[i].category;
    switch (category) {
      case "Electronic Gadget":
        document.getElementById("electronicProducts").innerHTML += `
  <div class="col-md-3 py-3 py-md-0">
            <div class="card">
            <div class="container">
              <img src="${products[i].image}" alt="${products[i].name}" style="width:240px; height:240px">
              </div>
              <div class="card-body">
                <h3 class="text-center">${products[i].name}</h3>
                <p class="text-center">${products[i].description}</p>
                <div class="star text-center">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                </div>
                <h2>$${products[i].price} <span><a  class="add-to-cart text-dark">
                <li class="fa-solid fa-cart-shopping"  data-name="${products[i].name}" data-price="${products[i].price}"></li></a></span></h2>
              <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 ms-0"
              onclick="setModal(${i})">See more</a>
              </div>
            </div>
          </div>`;
        break;
      case "Gaming Gadgets":
        document.getElementById("gamingProducts").innerHTML += `
  <div class="col-md-3 py-3 py-md-0">
            <div class="card">
            <div class="container">
              <img src="${products[i].image}" alt="${products[i].name}" style="width:240px; height:240px">
              </div>
              <div class="card-body">
                <h3 class="text-center">${products[i].name}</h3>
                <p class="text-center">${products[i].description}</p>
                <div class="star text-center">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                </div>
                <h2>$${products[i].price}<span><a  class="add-to-cart text-dark">
                <li class="fa-solid fa-cart-shopping"  data-name="${products[i].name}" data-price="${products[i].price}"></li></a></span></h2>
              <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 ms-0"
               onclick="setModal(${i})">See more</a>
              </div>
            </div>
          </div>`;
        break;
      case "Home Gadgets":
        document.getElementById("homeProducts").innerHTML += `
  <div class="col-md-3 py-3 py-md-0">
            <div class="card">
            <div class="container">
              <img src="${products[i].image}" alt="${products[i].name}" style="width:240px; height:240px">
              </div>
              <div class="card-body">
                <h3 class="text-center">${products[i].name}</h3>
                <p class="text-center">${products[i].description}</p>
                <div class="star text-center">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                </div>
                <h2>$${products[i].price}<span><a  class="add-to-cart text-dark">
                <li class="fa-solid fa-cart-shopping"  data-name="${products[i].name}" data-price="${products[i].price}"></li></a></span></h2>
              <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100 ms-0" 
              onclick="setModal(${i})">See more</a>
              </div>
            </div>
          </div>`;
        break;
    }
  }
}
showCards();

// OPEN MODAL

function setModal(i) {
  document.getElementById("infoModalLabel").innerText = products[i].name;
  document.getElementById(
    "modalImage"
  ).innerHTML = `<img src="${products[i].image}" alt="products[i].name" style="width:240px">`;
  document.getElementById("modalBody").innerHTML = `
  <p><b>Serial Number:</b> ${products[i].id}</p> 
  <p><b>Category</b>: ${products[i].category}</p>
  <p><b>Description:</b> ${products[i].description}</p>
  <hr class="mt-1 mb-1 "/>
  <h2>$${products[i].price}<span>
  <a  class="add-to-cart text-dark">
                <li class="fa-solid fa-cart-shopping"  data-name="${products[i].name}" data-price="${products[i].price}"></li></a>
  </span></h2>


  `;
}

//   <a
//     data-bs-toggle="modal"
//     data-name="${products[i].name}"
//     data-price="${products[i].price}"
//     data-bs-target="#infoModal"
//     class="add-to-cart text-dark"
//     onclick="setModal(${i})"
//   >
//     <li class="fa-solid fa-cart-shopping "></li>
//   </a>;

// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];

  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  };

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Count cart
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item
$(".add-to-cart").click(function (event) {
  event.preventDefault();
  var addToCartElement = $(".add-to-cart");
  console.log(addToCartElement);
  var name = $(this).data("name");
  var price = Number($(this).data("price"));
  console.log(name);
  console.log(price);
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});

// Clear items
// $(".clear-cart").click(function () {
//   shoppingCart.clearCart();
//   displayCart();
// });

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output +=
      "<tr>" +
      "<td>" +
      cartArray[i].name +
      "</td>" +
      "<td>(" +
      cartArray[i].price +
      ")</td>" +
      "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" +
      cartArray[i].name +
      ">-</button>" +
      "<input type='number' class='item-count form-control' data-name='" +
      cartArray[i].name +
      "' value='" +
      cartArray[i].count +
      "'>" +
      "<button class='plus-item btn btn-primary input-group-addon' data-name=" +
      cartArray[i].name +
      ">+</button></div></td>" +
      "<td><button class='delete-item btn btn-danger' data-name=" +
      cartArray[i].name +
      ">X</button></td>" +
      " = " +
      "<td>" +
      cartArray[i].total +
      "</td>" +
      "</tr>";
  }
  $(".show-cart").html(output);
  $(".total-cart").html(shoppingCart.totalCart());
  $(".total-count").html(shoppingCart.totalCount());
}

// Delete item button

$(".show-cart").on("click", ".delete-item", function (event) {
  var name = $(this).data("name");
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
});

// -1
$(".show-cart").on("click", ".minus-item", function (event) {
  var name = $(this).data("name");
  shoppingCart.removeItemFromCart(name);
  displayCart();
});
// +1
$(".show-cart").on("click", ".plus-item", function (event) {
  var name = $(this).data("name");
  shoppingCart.addItemToCart(name);
  displayCart();
});

// Item count input
$(".show-cart").on("change", ".item-count", function (event) {
  var name = $(this).data("name");
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();
