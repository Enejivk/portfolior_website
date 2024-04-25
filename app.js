const menuBtn = document.getElementById('menu');
const menu = document.getElementById('toggle-menu')
const body = document.querySelector('body')
const close = document.getElementById('close')


menuBtn.addEventListener('click', () => {
    
    if(menu.classList.contains('toggle-menu')){
        menu.classList.remove('toggle-menu')
        menuBtn.style.display = 'none'
    }
})

close.addEventListener('click', () => {
    if(menu.classList.contains('toggle-menu') === false) {
         menu.classList.add('toggle-menu')
         menuBtn.style.display = 'block'
    }
})

con