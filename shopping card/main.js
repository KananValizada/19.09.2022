let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "1",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/shirt-1.jpg",
  },
  {
    id: "2",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/shirt-1.jpg",
  },
  {
    id: "3",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/shirt-1.jpg",
  },
  {
    id: "4",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    img: "images/shirt-1.jpg",
  },
];

const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map(({ id, img, name, desc, price }) => {
      return `<div id=product-id-${id} class="item">
    <img width="200" src="${img}" alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
        $ ${price}
        <div class="buttons">
          <i class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(""));
};

generateShop();
