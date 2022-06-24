const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg-img')

let load = 0;



function blurLoading(){
    load++;
    if(load > 99){
        clearInterval(int);
    }

    loadtext.innerText = `${load} %`
    // loadtext.style.opacity = scale(load,1,100,1,0);
    loadtext.style.opacity = scale(load ,0,100 ,1 ,0);
    bg.style.filter =`blur(${scale(load,0,100,20,0)}px)`
    // console.log(load);
}
let int = setInterval(blurLoading,30)

const scale = (num, in_min ,in_max, out_min ,out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}