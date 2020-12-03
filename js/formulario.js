(function(){
    /////propiedades
    let propFormulario ={
        formulario: document.formulario_contacto,
        elementos: document.formulario_contacto.elements,
        error:null,
        textError:null,
    }
    ////metodos
    let metFormualario ={
        inicio: function(){
            for(let i = 0; i < propFormulario.elementos.length;i++){
                if(propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'){
                    propFormulario.elementos[i].addEventListener('focus',metFormualario.focusInput)
                    propFormulario.elementos[i].addEventListener('blur',metFormualario.blurInput)
                }
            }
            propFormulario.formulario.addEventListener('submit',metFormualario.validarInput)
        },
        focusInput: function(){
            this.parentElement.children[1].className = 'label active'
        },
        blurInput: function(){
            if(this.value == ''){
                this.parentElement.children[1].className = 'label'
            }
        },
        validarInput: function(e){
            for(let i = 0 ; i<propFormulario.elementos.length;i++){
                if(propFormulario.elementos[i].value == ''){
                    e.preventDefault()
                    if(propFormulario.elementos[i].parentElement.children.length< 3){
                        propFormulario.error = document.createElement('p')
                        propFormulario.textError = document.createTextNode('Por favor llena el campo con tu '+ propFormulario.elementos[i].name)
                        propFormulario.error.appendChild(propFormulario.textError);
                        propFormulario.error.className = 'error'
                        propFormulario.elementos[i].parentElement.appendChild(propFormulario.error)
                    }
                }else{
                    if(propFormulario.elementos[i].parentElement.children.length >= 3){
                        propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0]
                        propFormulario.elementos[i].parentElement.removeChild(propFormulario.error)
                    }
                }
            }
        }
    }

    metFormualario.inicio()
}())