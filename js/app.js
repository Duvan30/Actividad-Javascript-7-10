let selector = document.getElementsByClassName('selector1')


for(let i = 0; i < selector.length; i++){
    selector[i].addEventListener('click', () => {
        if(selector[i].classList.contains('selection')){
            selector[i].classList.remove('selection')
    }else{
         selector[i].classList.add('selection')   
        }
    })
} 

let selector2 = document.getElementsByClassName('selector2')


for(let i = 0; i < selector2.length; i++){
    selector2[i].addEventListener('click', () => {
        if(selector2[i].classList.contains('selection')){
            selector2[i].classList.remove('selection')
    }else{
         selector2[i].classList.add('selection')   
        }
    })
} 