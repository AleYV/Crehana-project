(function(){

    var propType = {
        wrap : document.getElementById('bts'),
        primerNombre: null
    }
    
    var metType = {
    
        inicio: function(){
            setInterval(metType.move,3000);
        },
    
        move: function(){
            propType.wrap.style.transition = 'all 1s ease';
            propType.wrap.style.marginTop = '-20%';
    
            setTimeout(function(){
                propType.primerNombre = propType.wrap.firstElementChild;
                propType.wrap.appendChild(propType.primerNombre);
                propType.wrap.style.transition = 'unset';
                propType.wrap.style.marginTop = '0';
            },1000);
        }
    }
    
    metType.inicio();
}())