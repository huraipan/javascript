$.getJSON(
  "https://raw.githubusercontent.com/huraipan/javascript/main/store.json",
  function (data) {
    var products = data.products;

    products.forEach((product) => {
      var 템플릿 = `<div class="item">
        <img src="img/${product.photo}" class="w-100">
        <h5>${product.title}</h5>
        <p>${product.brand}</p>
        <p>가격: ${product.price}</p>
        
        <button class="cart-btn">담기</button>
      </div>`;
      $(".items").append(템플릿);
    });
  }
);
