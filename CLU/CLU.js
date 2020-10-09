'use strict'

/* Функция для работы с консоли разработчика */

const css = 'color:orange; text-shadow: 10px 10px 10px white; font-size:20px'

function clu(string = 'not text', css ) {
    console.log(`%c ${string}`, `${css};`)
}

const second = 'font-size:18px; background:rgba(33,44,88,0.5); color:orange;border-radius:40px 10px 40px'

clu('Welcome to Console DevTools!')
clu('First argument a text. A second argument css ', second)
clu(clu)
