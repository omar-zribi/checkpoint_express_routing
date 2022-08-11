const navbar=document.querySelector('.NavBar');
fetch('/Navbar.html').then(res=>res.text()).then(data=>{
    navbar.innerHTML=data
})