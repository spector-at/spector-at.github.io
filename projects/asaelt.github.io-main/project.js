document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menuIcon');
    var menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function () {
      // Toggle the visibility of the menu
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
  
    // Close the menu if a menu item is clicked
    menu.addEventListener('click', function () {
      menu.style.display = 'none';
    });
  });
  