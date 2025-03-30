const toggler = document.querySelector('.toggler')
const menu = document.querySelector('.menu')

toggler.addEventListener('click', function(){
    // console.log('clicked')
    toggler.classList.toggle('fa-bars')
    toggler.classList.toggle('fa-xmark')
    menu.classList.toggle('menu-active')
    menu.classList.toggle('lg:-right-full')
    document.body.classList.toggle('scroll-disable')

})


