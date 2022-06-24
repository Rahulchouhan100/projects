const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triBottom = window.innerHeight / 5*4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}
checkBoxes();