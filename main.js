button.addEventListener('click',function(e){
    popper.classList.add('active')
    button.addEventListener('click',buttonClose) //one实现的方案
})
component.addEventListener('click',function(e){
    e.stopPropagation()
})
document.addEventListener('click',function(){
    popper.classList.remove('active')
})

function buttonClose(){
    popper.classList.remove('active')
    button.removeEventListener('click',buttonClose)
}