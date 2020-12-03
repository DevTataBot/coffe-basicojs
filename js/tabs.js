(function(){

   /////////////////////propiedades//////////////
   let propTabs ={
        primerEncabezado: document.getElementById('encabezado_menu').firstElementChild,
        primerContenido: document.getElementById('contenido_menu').firstElementChild,
        enlaceEncabezado: document.querySelectorAll('#encabezado_menu li a'),
        liEncabezado: document.querySelectorAll('#encabezado_menu li'),
        divContenido: document.querySelectorAll('#contenido_menu > div'),
        contenidoActivo: null
    }
   //////////7Metodos//////////////////////
   let metTabs ={
        inicio: function(){
            propTabs.primerEncabezado.className = 'active'
            propTabs.primerContenido.className = 'active'
            for(let i = 0;i< propTabs.enlaceEncabezado.length;i++){
                propTabs.enlaceEncabezado[i].addEventListener('click',metTabs.evento)
            }
        },
        evento: function(e){
            e.preventDefault()
            for(let i = 0; i<propTabs.liEncabezado.length;i++){
                propTabs.liEncabezado[i].className = ''
            }
            for(let i = 0; i<propTabs.divContenido.length;i++){
                propTabs.divContenido[i].className = ''
            }
            this.parentElement.className = 'active'
            propTabs.contenidoActivo = this.getAttribute('href')
            document.querySelector(propTabs.contenidoActivo).className = 'active'
            document.querySelector(propTabs.contenidoActivo).style.opacity= '0'
            setTimeout(function(){
                document.querySelector(propTabs.contenidoActivo).style.opacity = '1'
            },100)
        }
   }

   metTabs.inicio()

}())