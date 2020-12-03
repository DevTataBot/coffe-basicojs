(function(){
////////77Propiedades/////////7
    let propScroll ={
        posicion: window.pageYOffset,
        scroll_suave : document.getElementsByClassName('scroll-suave'),
        volver_arriba: document.getElementsByClassName('volver-arriba'),
        destino:null,
        seccion_dist:null,
        intervalo:null
    }
    ////////////////Metodos/////////77
    let metScroll ={
        inicio: function(){
            for(let i = 0; i<propScroll.scroll_suave.length;i++){
                propScroll.scroll_suave[i].addEventListener('click',metScroll.moverse)
            }for(let i = 0; i<propScroll.volver_arriba.length;i++){
                propScroll.volver_arriba[i].addEventListener('click',metScroll.subir)
            }

        },
        moverse: function(e){
            e.preventDefault()
            clearInterval(propScroll.intervalo);
            propScroll.destino = this.getAttribute('href')
            propScroll.seccion_dist = document.querySelector(propScroll.destino).offsetTop - 85
            propScroll.posicion = window.pageYOffset
            propScroll.intervalo = setInterval(function(){
                if(propScroll.posicion<propScroll.seccion_dist){
                    propScroll.posicion += 30
                    if(propScroll.posicion>=propScroll.seccion_dist){
                        clearInterval(propScroll.intervalo)
                    }
                }
                else{
                    propScroll.posicion -=30
                    if(propScroll.posicion<=propScroll.seccion_dist){
                        clearInterval(propScroll.intervalo)
                    }
                }
                window.scrollTo(0,propScroll.posicion)
            },15);
        },
        subir: function(e){
            e.preventDefault()
            clearInterval(propScroll.intervalo);
            propScroll.posicion = window.pageYOffset
            propScroll.intervalo = setInterval(function(){
                if(propScroll.posicion > 0){
                    propScroll.posicion -=30
                    if(propScroll.posicion<=0){
                        clearInterval(propScroll.intervalo)
                    }
                }
                window.scrollTo(0,propScroll.posicion)
            }, 15);
        }
    }

    metScroll.inicio()
}())