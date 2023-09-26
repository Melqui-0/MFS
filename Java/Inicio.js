class Login{
    constructor() {    
        var usuario = 123456;
        var password = Entrenamiento12power;
    }
    constructor(){    
        function Validar(user,pwd)
        {
            user=document.getElementById(user);
            pwd=document.getElementById(pass);
            if(user.value=="")
			{
                alert("El campo Nombre esta vacio");
                user.focus();
                return false;
			}
		   else
			{
			 if(pwd.value=="")
             {
			   alert("El campo Passwd esta vacio");
			   pwd.focus();
			   return false;
            }
            else
            {
                var usuario = document.formulario.user.value;
                var password = document.formulario.pass.value;
                window.location.href = 'Index.html';
                return true;
            }
            }
        }
}
}