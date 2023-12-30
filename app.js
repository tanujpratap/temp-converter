const input=document.querySelector("form input");
const btn=document.querySelector("button");
const dropdowns=document.querySelector("select");
const msg=document.querySelector(".msg");



dropdowns.addEventListener("change",(evt)=>{
    // selectedvalue(evt.target);
    let targetedvalue=evt.target.value;
    if(targetedvalue==="Kelvin"){
        //   input.value+273.15;
          console.log(input.value+273.15);
           tempval=input.value+273.15;
           
     
     }
    else if(targetedvalue==="farenhite"){
//   return input.value*(9/5)+32;
  console.log(input.value*(9/5)+32);
         tempval=input.value*(9/5)+32;
       }
       else {
    //  return input.value;
     console.log(input.value);
     tempval=input.value;
       }

})
btn.addEventListener("click",()=>{
msg.innerText=tempval;
})


