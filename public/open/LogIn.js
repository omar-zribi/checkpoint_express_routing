    
var Father = document.getElementById('contenedor');
var user = document.getElementById('username');
var pass = document.getElementById('pass');
var boton = document.getElementById('boton');
var back_boton = document.getElementById('back');

var userCorrect="omar";
var passCorrect="OMAR";

boton.addEventListener('click', startSeccion);
back_boton.addEventListener('click', showLogin);

function showLogin()
{
	var main_login_back = document.getElementById('main').style.display = 'block';
	var web_site_principal = document.getElementById('web').style.display = 'none';
}
console.log(userCorrect)
console.log(passCorrect)
function startSeccion()
{
	var Nametaped = user.value;
    // console.log(Nametaped)
	var pswtaped = pass.value;
    // console.log(pswtaped)

	if(userCorrect === Nametaped && passCorrect === pswtaped)
	{	
		var web_site = document.getElementById('web').style.display = 'block'; 
		var main_login = document.getElementById('main').style.display = 'none';
        document.querySelector('#User11').innerHTML=`welcome ${userCorrect}`;
	}
	else 
	{

		var message = document.createElement('p');
		var Notification = document.createTextNode("user name or password is incorrect");
		message.appendChild(Notification);
		document.body.appendChild(message);
		Father.appendChild(message);
  }
		message.style.color = "red";
    message.style.display="block"
    document.getElementById('username').style.backgroundColor = 'red';      
    document.getElementById('pass').style.backgroundColor = 'red';      
    setTimeout(function(){
      message.style.display="none";
      document.getElementById('username').style.backgroundColor = 'white';      
      document.getElementById('pass').style.backgroundColor = 'white';          
    }, 500);
  }