document.querySelectorAll('.accordion__question').forEach(item=>{
item.addEventListener('click', event => {
    console.log('click');
    item.classList.toggle('open');

    //Add "collapsing" class to .accordion__collapse (sibling)

    //Remove "collapsing" class and add "open" class
    item.nextElementSibling.classList.toggle('open'); 
})
})
