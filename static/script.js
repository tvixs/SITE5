document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');

  menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuIcon.classList.toggle("active");
  });

  document.querySelectorAll('.add-favorite').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = button.dataset.price;

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!favorites.find(item => item.id === id)) {
        favorites.push({ id, name, price });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Товар добавлен в избранное!');
      } else {
        alert('Товар уже в избранном!');
      }
    });
  });
});

