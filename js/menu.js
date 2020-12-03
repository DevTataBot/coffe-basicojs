(function(){
    ///////////Propiedades//////7
    let propMenu ={
        burger: document.getElementById('burger'),
        slideMenu: document.getElementById('slide-menu'),
        menu_active: false,
        element_menu: document.querySelectorAll('slide-menu .menu-principal a')
    }
    ////////metodos/////////
    let metMenu ={
        inicio: function () {
		
            propMenu.burger.addEventListener('click', metMenu.toggleMenu);
    
            for (let i = 0; i < propMenu.element_menu.length; i++) {
                propMenu.element_menu[i].addEventListener('click', metMenu.ocultarMenu);
            }
    
        },
    
        toggleMenu: function () {
            if ( propMenu.menu_active == false ) {
    
                propMenu.menu_active = true;
                propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
    
            } else{
    
                propMenu.menu_active = false;
                propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    
            }
        },
    
        ocultarMenu: function () {
            propMenu.menu_active = false;
            propMenu.slideMenu.className.replace('active','')
        }
    }

    metMenu.inicio()
}())