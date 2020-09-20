"use strict"

//Скрипт начнет работать когда загрузится все узлы 
window.addEventListener('DOMContentLoaded', () =>{
   const btnCall = document.querySelector('.btn')
   let btnRename = () => btnCall.textContent = '+7 (930) 840-40-04'
   const btnUp = document.querySelector('#upbutton')

    btnCall.addEventListener('mouseover', (e) =>{
        e.preventDefault()
        btnRename()
    })

    //Кнопка навверх
    let smoothJumpUp = () => {
        if(document.body.scrollTop > 0 || document.documentElement.scrollTop>0){
            window.scrollBy(0, -200)
            setTimeout(smoothJumpUp, 15)
        }
    }
    window.onscroll = () =>{
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 100){
            document.querySelector('#upbutton').style.display = 'block'
        }else {
            document.querySelector('#upbutton').style.display = 'none'
        }
    }
    btnUp.addEventListener('click', () =>{
        smoothJumpUp()
    })

})