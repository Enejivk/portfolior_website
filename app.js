const menuBtn = document.getElementById('menu');
const menu = document.getElementById('toggle-menu')
const body = document.querySelector('body')
const close = document.getElementById('close')




const displayMenu = () => {
    if(menu.classList.contains('toggle-menu')){
        menu.classList.remove('toggle-menu')
        menuBtn.style.display = 'none'
    } else {
        menu.classList.add('toggle-menu')
         menuBtn.style.display = 'block'
    }
}

const observer = new ResizeObserver((entry)=> {
    widthOfWindow = entry[0].contentRect.width
    if (menu.classList.contains('toggle-menu') && widthOfWindow < 847 )
        menuBtn.style.display = 'block';
    else {
        menuBtn.style.display = 'none';   
    }
})

observer.observe(document.body)
menuBtn.addEventListener('click', displayMenu)
document.addEventListener('scroll', () => {
        menu.classList.add('toggle-menu')
        menuBtn.style.display = 'block'
})
close.addEventListener('click', displayMenu)