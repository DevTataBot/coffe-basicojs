//////////Proteger el codigo//////777
(function(){
    ///////Propiedades////////////
    let propLightbox = {
        imgContainer: document.getElementsByClassName('lightbox'),
        imagen: null,
        imagenSrc: null,
        cuerpoDom: document.getElementsByTagName('body')[0],
        lightbox_container:null,
        modal:null,
        cerrarModal: null,
        animacion:'fade'
    }
    /////////////Metodos//////////
    let metLightbox = {
        inicio: function(){
            
            for(let i=0;i<propLightbox.imgContainer.length; i++){
                propLightbox.imgContainer[i].addEventListener('click',metLightbox.capturaImagen);
            }
        },
        capturaImagen: function(){
            propLightbox.imagen = this
            metLightbox.lightbox(propLightbox.imagen);
        },
        lightbox: function(imagen){
            propLightbox.imagenSrc = window.getComputedStyle(imagen,null).backgroundImage.slice(5,-2)
            propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id','lightbox_container');
            propLightbox.lightbox_container = document.getElementById('lightbox_container')
            propLightbox.lightbox_container.style.width = '100%'
            propLightbox.lightbox_container.style.height = '100%'
            propLightbox.lightbox_container.style.position = 'fixed'
            propLightbox.lightbox_container.style.zIndex = '1000'
            propLightbox.lightbox_container.style.backgroundColor = 'rgba(0,0,0,0.8)'
            propLightbox.lightbox_container.style.top = '0'
            propLightbox.lightbox_container.style.left = '0'
            
            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id','modal')
            propLightbox.modal = document.getElementById('modal');
            propLightbox.modal.style.height = '100%'
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src',propLightbox.imagenSrc)
            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class','img-modal')
            
            if(propLightbox.animacion == 'fade'){
                document.getElementsByClassName('img-modal')[0].style.opacity = 0
                setTimeout(function(){
                    document.getElementsByClassName('img-modal')[0].style.opacity = 1
    
                },100)
            }
    
            propLightbox.modal.innerHTML += '<i id="cerrar-modal" class="far fa-times-circle"></i>'
            propLightbox.cerrarModal = document.getElementById('cerrar-modal')
            propLightbox.cerrarModal.addEventListener('click',metLightbox.cerrarModal)
        },
        cerrarModal: function(){
            propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);
        }
    }
    metLightbox.inicio()
}())//
