// //your JS code here. If required.
// const codes = document.querySelectorAll(".code")
// codes[0].focus();


// codes.forEach((code,index)=>{


// code.addEventListener("keydown",(eventDetails) =>{
// if(eventDetails.key>=0 && eventDetails.key<=9){
//     codes[index].value = "";
//     setTimeout(()=>{codes[index+1].focus()},10)
// }
// else if(eventDetails.key == "Backspace"){
//     setTimeout(()=>{codes[index-1].focus()},10)
// }
// })

const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code, i) => {
    code.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[i].value = "";
            if (codes[i + 1]) {
                setTimeout(() => codes[i + 1].focus(), 10);
            }
        } else if (e.key === "Backspace") {
            if (codes[i - 1]) {
                setTimeout(() => codes[i - 1].focus(), 10);
            }
        }
    });
});
// })