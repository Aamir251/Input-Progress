const span = document.querySelector('#span');
const input = document.querySelector('input');
let marginValue = 0;
input.addEventListener('keydown',(e)=> {
    if (input.value === '') {
        marginValue=0;
        span.style.marginLeft = `${marginValue}px`;
    }
    if (e.key === "Backspace" && marginValue >=0) {
        marginValue-=5;
        span.style.marginLeft = `${marginValue}px`;
    }
    else{
        marginValue+=5;
        span.style.marginLeft = `${marginValue}px`;
    }
})
