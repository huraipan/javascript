// let button = $(".tab-button");
// let content = $(".tab-content");

// for (let i = 0; i < 3; i++) {
//   button.eq(i).on("click", function () {
//     button.removeClass("orange");
//     button.eq(i).addClass("orange");
//     content.removeClass("show");
//     content.eq(i).addClass("show");
//   });
// }

// var products = [
//   { id: 0, price: 70000, title: "Blossom Dress" },
//   { id: 1, price: 50000, title: "Springfield Shirt" },
//   { id: 2, price: 60000, title: "Black Monastery" },
// ];

// for (let i = 0; i < 3; i++) {
//   $(".card-body h5").eq(i).html(products[i].title);
//   $(".card-body p")
//     .eq(i)
//     .html("가격: " + products[i].price);
// }

// $(".form-select")
//   .eq(0)
//   .on("input", function () {
//     var value = $(".form-select").eq(0).val();
//     if (value == "셔츠") {
//       $(".form-select").eq(1).removeClass("form-hide");
//     }
//   });

// var pants = [28, 30, 32];
// var shirts = [95, 100, 105];
// $(".form-select")
//   .eq(0)
//   .on("input", function () {
//     var value = $(".form-select").eq(0).val();
//     if (value == "셔츠") {
//       $(".form-select").eq(1).removeClass("form-hide");
//     } else if (value == "바지") {
//       $(".form-select").eq(1).removeClass("form-hide");
//       $(".form-select").eq(1).html("");
//       pants.forEach(function (a) {
//         $(".form-select").eq(1).append(`<option>${a}</option>`);
//       });
//     }
//   });

// var 출석부 = ["흥민", "영희", "철수", "재석"];

// function 이름찾기(name) {
//   출석부.forEach(function (a) {
//     if (name == a) {
//       console.log("있어요");
//     }
//   });
// }

// function 구구단() {
//   for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//       console.log(i * j);
//     }
//     console.log("------------");
//   }
// }

// var products = [
//   { id: 0, price: 70000, title: "Blossom Dress" },
//   { id: 1, price: 50000, title: "Springfield Shirt" },
//   { id: 2, price: 60000, title: "Black Monastery" },
// ];

// $.get("https://codingapple1.github.io/price.json").done(function (data) {
//   console.log(data);
// });

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.forEach((a) => {
  let card = `<div class="col-sm-4 product">
              <img src="https://via.placeholder.com/600" class="w-100">
              <h5>${a.title}</h5>
              <p>가격 : ${a.price}</p>
              <button class="buy">구매</button>
              </div>`;

  $(".row").append(card);
});

$(".buy").click(function (e) {
  var title = $(e.target).siblings("h5").text();

  if (localStorage.getItem("cart") !== null) {
    var 꺼낸거 = JSON.parse(localStorage.cart);
    꺼낸거.push(title);
    localStorage.setItem("cart", JSON.stringify(꺼낸거));
  } else {
    localStorage.setItem("cart", JSON.stringify([title]));
  }
});

// var arr = [1, 2, 3];
// var newArr = JSON.stringify(arr);

// localStorage.setItem("num", newArr);
// var 꺼낸거 = localStorage.getItem("num");
// JSON.parse(꺼낸거);
