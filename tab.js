let button = $(".tab-button");
let content = $(".tab-content");

for (let i = 0; i < 3; i++) {
  button.eq(i).on("click", function () {
    button.removeClass("orange");
    button.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
  });
}

var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

for (let i = 0; i < 3; i++) {
  $(".card-body h5").eq(i).html(products[i].title);
  $(".card-body p")
    .eq(i)
    .html("가격: " + products[i].price);
}

$(".form-select")
  .eq(0)
  .on("input", function () {
    var value = $(".form-select").eq(0).val();
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    }
  });

var pants = [28, 30, 32];
var shirts = [95, 100, 105];
$(".form-select")
  .eq(0)
  .on("input", function () {
    var value = $(".form-select").eq(0).val();
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
    } else if (value == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      pants.forEach(function (a) {
        $(".form-select").eq(1).append(`<option>${a}</option>`);
      });
    }
  });
