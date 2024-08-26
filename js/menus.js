document.addEventListener('DOMContentLoaded', () => {
    const sideMenuButton = document.getElementById('side-menu');
    const sideBar = document.querySelector('.SideBar');
  
    sideMenuButton.addEventListener('click', () => {
      // Alterna a classe 'active' na Sidebar
      sideBar.classList.toggle('active');
    });
  
    // Adiciona um evento para fechar a Sidebar ao clicar fora dela
    document.addEventListener('click', (event) => {
      if (!sideBar.contains(event.target) && !sideMenuButton.contains(event.target)) {
        sideBar.classList.remove('active');
      }
    });
  });
  