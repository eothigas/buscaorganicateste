// Biblioteca NivoSlider
$(window).on('load', function() {
    $('#slider').nivoSlider({
      effect: 'slideInRight',
      slices: 15,                
      boxCols: 8,               
      boxRows: 4,                
      animSpeed: 900,            
      pauseTime: 5500,           
      directionNav: true,        
      controlNav: false             
    });
});

// Função para ativar Blur, quando abrir Navbar responsiva
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.line-btn');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    navbarToggler.addEventListener('click', () => {
        main.classList.toggle('blur-active');
        footer.classList.toggle('blur-active');
    });
});