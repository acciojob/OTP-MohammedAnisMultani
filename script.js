//your JS code here. If required.
const codes = document.querySelectorAll(".code")
codes[0].focus();


codes.forEach((code,index)=>{


code.addEventListener("keydown",(eventDetails) =>{
if(eventDetails.key>=0 && eventDetails.key<=9){
    codes[index].value = "";
    setTimeout(()=>{codes[index+1].focus()},10)
}
else if(eventDetails.key == "Backspace"){
    setTimeout(()=>{codes[index-1].focus()},10)
}
})
})