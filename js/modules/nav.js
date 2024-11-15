const initNav = () => {
  const navLinks = document.querySelector('.menu_link');
  navLinks.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = link.id;
      window.location.href = '../../newproducts.html';
    });
  });
};

export { initNav };
