const catalog = document.querySelector(".catalog0");

const  renderProducts = () => {
    document.querySelectorAll(".catalog_item").forEach(e => e.remove());
    for (let value of products) {
      let obj = value
      console.log(obj)
        const newElem = document.createElement("div");
          newElem.innerHTML = `
            <div class="catalog_item-title">${obj["title"]}</div>
            <img class="catalog_item-img" src="${obj["image"]}" alt="card" width="250px", height="300px">
            <div class="catalog_item-category">${obj["category"]}</div>
            <div class="catalog_item-price">${obj["price"]}$</div>
            <button class="catalog_item-btn">Удалить товар</button>
          `;
      newElem.classList.add("catalog_item");
      catalog.after(newElem);
    };
  }

  export { renderProducts };