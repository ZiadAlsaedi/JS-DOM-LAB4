let btn = document.getElementById('rest')

let text = document.getElementById("width")
let text2 = document.getElementById("height")
let text3 = document.getElementById("color")

let box=document.getElementById("box")

text3.addEventListener('change',function() {
  box.style.backgroundColor=text3.value 
  console.log(text3.value);

    })
text.addEventListener("input",function() {
let input =text.value
box.style.width=input +"px"
  })

  text2.addEventListener("input",function() {
    let input2 =text2.value
    box.style.height=input2 +"px"
      })



  btn.addEventListener('click',function() {
   box.style.backgroundColor="blue" 
   box.style.height="30vh"
   box.style.width="20vw"
 })
   
  


