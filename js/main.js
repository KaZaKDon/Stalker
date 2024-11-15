import {initNav} from './modules/nav.js';
import {renderProducts} from './modules/renderProducts.js';


let products = []; // Локальный массив для хранения товаров

const addBtn = document.querySelector(".baza_add-btn");


document.addEventListener('DOMContentLoaded', () => {
  initNav();
});

let currentLimit = 5
/*async function getSomeElements() {
    try {/*
        fetch(`https://fakestoreapi.com/products?limit=${currentLimit}`)
        .then(response => response.json())
        .then(data => {
          document.querySelectorAll('.catalog_item').forEach(e => e.remove()) 
            console.log(products)
          products = data;
          renderProducts(products);
          currentLimit += 5;
        })
    } catch (error) {
      showMessage(`Ошибка загрузки товаров: ${error.message}`, "error");
    }
  }*/
    function getSomeElements() {
      console.log(products)
            products = data;
            renderProducts(products);
            currentLimit += 5;
          
      }

  getSomeElements()
  addBtn.addEventListener('click', getSomeElements)