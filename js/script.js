// Get all Product
function get_all_pdt() {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((json) => myfunction(json));

  function myfunction(json) {
    for (var i = 0; i < json.length; i++) {
      image = document.createElement("img");
      title = document.createElement("p");
      category = document.createElement("p");
      description = document.createElement("p");
      price = document.createElement("p");

      // image.setAttibute.src("img", (json[i].images));
      image.setAttribute("src", json[i].images);
      title.appendChild(document.createTextNode(json[i].title));
      category.appendChild(document.createTextNode(json[i].category.name));
      description.appendChild(document.createTextNode(json[i].description));
      price.appendChild(document.createTextNode(json[i].price));

      // parent.appendChild(image);
      document.getElementById("show_result").appendChild(image);
      document.getElementById("show_result").appendChild(title);
      document.getElementById("show_result").appendChild(category);
      document.getElementById("show_result").appendChild(description);
      document.getElementById("show_result").appendChild(price);
    }
  }
}

//Get a Single Product
function get_single_pdt() {
  fetch("https://api.escuelajs.co/api/v1/products/1")
    .then((res) => res.json())
    .then((json) => myfunction(json));

  function myfunction(json) {
    image = document.createElement("img");
    title = document.createElement("p");
    category = document.createElement("p");
    description = document.createElement("p");
    price = document.createElement("p");

    // image.setAttibute.src("img", (json[i].images));
    image.setAttribute("src", json.images);
    title.appendChild(document.createTextNode(json.title));
    category.appendChild(document.createTextNode(json.category.name));
    description.appendChild(document.createTextNode(json.description));
    price.appendChild(document.createTextNode(json.price));

    // parent.appendChild(image);
    document.getElementById("show_result").appendChild(image);
    document.getElementById("show_result").appendChild(title);
    document.getElementById("show_result").appendChild(category);
    document.getElementById("show_result").appendChild(description);
    document.getElementById("show_result").appendChild(price);
  }
}

//Limit results
function limit_rslt() {
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((json) => myfunction(json));

  function myfunction(json) {
    var x = json;
    var text = "";
    var table = "<tr><th> Limit Result </th></tr>";
    for (var i = 0; i < x.length; i++) {
      table += "<tr><td>" + x[i] + "</td></tr>";
    }
    document.getElementById("msg").innerHTML = table;
  }
}

//Sort the result
function sort_rslt() {
  fetch("https://fakestoreapi.com/products?sort=desc")
    .then((res) => res.json())
    .then((json) => myfunction(json));

  function myfunction(json) {
    var x = json;
    var text = "";
    var table = "<tr><th> Result </th></tr>";
    for (var i = 0; i < x.length; i++) {
      table += "<tr><td>" + x[i] + "</td></tr>";
    }
    document.getElementById("msg").innerHTML = table;
  }
}

//Get all categories
function get_all_cate() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    // .then((json) => (document.getElementById("msg").innerHTML = json));
    .then((json) => myfunction(json));

  function myfunction(json) {
    var x = json;
    var text = "";
    var table = "<tr><th> Categories </th></tr>";
    for (var i = 0; i < x.length; i++) {
      table += "<tr><td>" + x[i] + "</td></tr>";
    }
    document.getElementById("msg").innerHTML = table;
  }
}

//Get in category
function get_in_cate() {
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => res.json())
    .then((json) => myfunction(json));

  function myfunction(json) {
    var x = json;
    var text = "";
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (var i = 0; i < x.length; i++) {
      table += "<tr><td>" + x[i] + "</td><td>" + x[i] + "</td></tr>";
    }
    document.getElementById("msg").innerHTML = table;
  }
}

//Add new product
function add_new_pdt() {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//Update a Product
function update_pdt() {
  fetch("https://fakestoreapi.com/products/7", {
    method: "PUT",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));

  fetch("https://fakestoreapi.com/products/7", {
    method: "PATCH",
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//delete a product
function del_pdt() {
  fetch("https://fakestoreapi.com/products/6", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//Get all cart
function get_all_cart() {
  fetch("https://fakestoreapi.com/carts")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
  // .then((json) => console.log(json));
}

//Get Single Cart
function get_single_cart() {
  fetch("https://fakestoreapi.com/carts/5")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

// Limit Cart result
function limit_rslt_cart() {
  fetch("https://fakestoreapi.com/carts?limit=5")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//sort Cart
function sort_rslt_cart() {
  fetch("https://fakestoreapi.com/carts?sort=desc")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//Date ramge
function get_date_range_cart() {
  fetch(
    "https://fakestoreapi.com/carts/startdate=2019-12-10&enddate=2020-10-10"
  )
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//User Cart
function get_user_cate() {
  fetch("https://fakestoreapi.com/carts/user/2")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

// Add New Cart
function add_new_cart() {
  fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    body: JSON.stringify({
      userId: 5,
      date: 2020 - 02 - 03,
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
      ],
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//Update Cart
function update_cart() {
  fetch("https://fakestoreapi.com/carts/7", {
    method: "PUT",
    body: JSON.stringify({
      userId: 3,
      date: 2019 - 12 - 10,
      products: [{ productId: 1, quantity: 3 }],
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));

  fetch("https://fakestoreapi.com/carts/7", {
    method: "PATCH",
    body: JSON.stringify({
      userId: 3,
      date: 2019 - 12 - 10,
      products: [{ productId: 1, quantity: 3 }],
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

function del_cart() {
  fetch("https://fakestoreapi.com/carts/6", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

// Get all User
function get_all_user() {
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//Get Single User
function get_single_user() {
  fetch("https://fakestoreapi.com/users/1")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//Limit User Result
function limit_rslt_user() {
  fetch("https://fakestoreapi.com/users?limit=5")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//sort Result
function sort_rslt_user() {
  fetch("https://fakestoreapi.com/users?sort=desc")
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

// Add User
function add_new_user() {
  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

// Update User
function update_user() {
  fetch("https://fakestoreapi.com/users/7", {
    method: "PUT",
    body: JSON.stringify({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));

  fetch("https://fakestoreapi.com/users/7", {
    method: "PATCH",
    body: JSON.stringify({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//Delete User
function del_user() {
  fetch("https://fakestoreapi.com/users/6", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}

//User Login
function log_in_user() {
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "mor_2314",
      password: "83r5^_",
    }),
  })
    .then((res) => res.json())
    .then((json) => (document.getElementById("msg").innerHTML = json));
}
