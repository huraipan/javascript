$.get().done((products) => {
  products.forEach((a, i) => {
    var 템플릿 = `<div class="col-sm-4">
        <img src="${products[i].photo}" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
      </div>`;
    $(".items").append(템플릿);
  });
});
