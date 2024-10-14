let pass = document.getElementById("password");
let msgg = document.getElementById("msg");
let str = document.getElementById("strenght");

pass.addEventListener("input", () => {
  if(pass.value.length > 0){
    msgg.style.display = "block";
  } else {
      msgg.style.display = "none";
  }
  if(pass.value.length < 4){
    str.innerHTML = "weak"
    pass.style.borderColor = "#ff5925"
    msgg.style.color = "#ff5925"
  }
  else if(pass.value.length >= 4 && pass.value.length < 8){
    str.innerHTML = "medium"
    pass.style.borderColor = "yellow"
    msgg.style.color = "Yellow"
  }
  else if (pass.value.length >= 8){
    str.innerHTML = "strong"
    pass.style.borderColor = "#26d730"
    msgg.style.color = "#26d730"
  }
           
           
  
})