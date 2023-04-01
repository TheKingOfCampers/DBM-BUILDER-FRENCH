/*
Criado por XinXyla#0001
Todos os direitos reservados
*/

function gerarcorty()
{
    customizered = document.getElementById('customizered').value;
    document.getElementById("txtred").innerHTML = "Rouge "+customizered;

    customizegreen = document.getElementById('customizegreen').value;
    document.getElementById("txtgreen").innerHTML = "Vert "+customizegreen;

    customizeblue = document.getElementById('customizeblue').value;
    document.getElementById("txtblue").innerHTML = "Bleu "+customizeblue;

    customizeopt = document.getElementById('customizeopt').value;
    if(customizeopt < 10)
    {customizeopt = "0"+customizeopt}
    if(customizeopt < 100)
    {customizeopt = "0."+customizeopt}
    else{customizeopt=10;}
    document.getElementById("txtopt").innerHTML = "Opacité "+customizeopt;

    customizecor = "rgba("+customizered+","+customizegreen+","+customizeblue+","+customizeopt+")";
    document.getElementById("customizecor").style.background = customizecor;
    document.getElementById("customizecode").value = customizecor;
    }


   
		function copiar(){
		var customizecopy = Array.prototype.slice.
		  call(document.querySelectorAll('.customize-copy'));
		var copyTextarea = Array.prototype.slice.
		  call(document.querySelectorAll('.customize-ta'));
		customizecopy.forEach(function(btn, idxcustomize) {
		  btn.addEventListener("click", function() {	 
			copyTextarea[idxcustomize].select();
	 
			  var msg = document.execCommand('copy') 
	 
		  });
	 
		});
    
	  }


  

