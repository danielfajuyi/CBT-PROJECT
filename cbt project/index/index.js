let body =document.getElementById('body');
let cancel = document.getElementById('cancel');
let sidenav =  document.getElementById("sidenav");
let register = document.getElementById('reg');
const nav = document.querySelector('.nav_header');
register.addEventListener("click",() =>{
   sidenav.style.width="400px"
  register.style.right = "373px"
  nav.classList.add('animate');
  //alert('he')
  nav.addEventListener('animationend',()=>{
    nav.classList.remove('animate');
  
  })
    

 
 })
 

body.onload= () =>{
  alert("WE RECOMMEND USING THE ONLINE COMPEDIUM ON DESKTOP COMPUTERS OR LAPTOPS ")
 sidenav.style.width="400px"
 register.style.right = "373px"
 
}
cancel.onclick = ()=> {
sidenav.style.width = '0px'
register.style.right = '0px'

}



//register.onmouseenter = () =>{
  //register.style.background= "gray"
//}
//register.onmouseout = () =>{
  //register.style.background= "white"
//}