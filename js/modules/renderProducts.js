const catalog = document.querySelector('.catalog_list');

let products = []; // Локальный массив для хранения товаров

const addBtn = document.querySelector('.baza_add-btn');

const renderProducts = (products) => {
  document.querySelectorAll('.catalog_item').forEach(e => e.remove());
  for (let value of products) {
    let obj = value;
    console.log(obj);
    const newElem = document.createElement('div');
    newElem.innerHTML = `
            <div class="catalog_item-title">${obj['title']}</div>
            <img class="catalog_item-img" src="${obj['image']}" alt="card" width="250px", height="300px">
            <div class="catalog_item-category">${obj['category']}</div>
            <div class="catalog_item-price">${obj['price']}$</div>
          `;

    const btn = document.createElement('button');
    btn.classList.add('catalog_item-btn');
    btn.textContent = 'Удалить товар';
    newElem.append(btn);
    btn.addEventListener('click', () => deleteProductOnClick(obj.id));

    
    newElem.classList.add('catalog_item');
    catalog.append(newElem);
  }
};

const deleteProductOnClick = (id) => {
  products = products.filter((product) => product.id !== id);
      renderProducts(products);
};

let currentLimit = 5;

async function getSomeElements() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${currentLimit}`)
    products = await response.json()
    renderProducts(products);
    currentLimit += 5;
  } catch (error) {
    console.log(`Ошибка загрузки товаров: ${error.message}`);
  }
}

export const initProducts = () => {
  getSomeElements();
  addBtn.addEventListener('click', getSomeElements);
  deleteProductOnClick(products);
};
