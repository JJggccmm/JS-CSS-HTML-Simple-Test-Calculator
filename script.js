
 window.addEventListener("keydown", (e) => {  
  if (  
   e.key === "0" ||  
   e.key === "1" ||  
   e.key === "2" ||  
   e.key === "3" ||  
   e.key === "4" ||  
   e.key === "5" ||  
   e.key === "6" ||  
   e.key === "7" ||  
   e.key === "8" ||  
   e.key === "9" ||  
   e.key === "."  
  ) {  
   clickButtonEl(e.key);  
   // console.log(e.key)  
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {  
   clickOperation(e.key);  
  } else if (e.key === "*") {  
   clickOperation("x");  
   // console.log(e.key)  
  } else if (e.key == "Enter" || e.key === "=") {  
   clickEqual();  
  }  
  // console.log(e.key)  
 });  
 function clickButtonEl(key) {  
  numbersEl.forEach((button) => {  
   if (button.innerText === key) {  
    button.click();  
   }  
  });  
 }  
 function clickOperation(key) {  
  operationEl.forEach((operation) => {  
   if (operation.innerText === key) {  
    operation.click();  
   }  
  });  
 }  
 function clickEqual() {  
  equalEl.click();  
 }
