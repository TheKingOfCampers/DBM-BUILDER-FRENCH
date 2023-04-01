document.title = 'My new title here';/* Criado por XinXyla#0001 - Favor não apagar!
Editado por: 
*/
const configFile2 = "./config_notas.json",


nota1 = document.getElementById('n1'),
nota2 = document.getElementById('n2'),
nota3 = document.getElementById('n3'),
nota4 = document.getElementById('n4'),
nota5 = document.getElementById('n5'),
nota6 = document.getElementById('n6'),
nota7 = document.getElementById('n7'),
nota8 = document.getElementById('n8'),
nota9 = document.getElementById('n9'),
nota10 = document.getElementById('n10');

function setnotas() {
const fs = require("fs");
fs.writeFile(configFile2,JSON.stringify({"nota1": nota1.value,"nota2": nota2.value,"nota3": nota3.value,"nota4": nota4.value,"nota5": nota5.value,"nota6": nota6.value,"nota7": nota7.value,"nota8": nota8.value,"nota9": nota9.value,"nota10": nota10.value,}), (err) => { if(err) throw err; });
}


window.addEventListener("load", function() {
	const fs = require("fs");
	if(fs.existsSync(configFile2)) {
		fs.readFile(configFile2, function read(err, data) {
			if (err) throw err;
			var config = JSON.parse(data);
	
			nota1.value = config.nota1;
			nota2.value = config.nota2;
			nota3.value = config.nota3;
			nota4.value = config.nota4;
			nota5.value = config.nota5;
			nota6.value = config.nota6;
			nota7.value = config.nota7;
			nota8.value = config.nota8;
			nota9.value = config.nota9;
			nota10.value = config.nota10;
			
			});
	} else
	{	nota1.value = "1";
		nota2.value = "2";
		nota3.value = "3";
		nota4.value = "4";
		nota5.value = "5";
		nota6.value = "6";
		nota7.value = "7";
		nota8.value = "8";
		nota9.value = "9";
		nota10.value = "10";
	}
	
	});


	function abrir1() {
		document.getElementById('divn1').style.display = 'block';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}

	function abrir2() {
		document.getElementById('divn2').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	
	function abrir3() {
		document.getElementById('divn3').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}

	function abrir4() {
		document.getElementById('divn4').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir5() {
		document.getElementById('divn5').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir6() {
		document.getElementById('divn6').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir7() {
		document.getElementById('divn7').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir8() {
		document.getElementById('divn8').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir9() {
		document.getElementById('divn9').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn10').style.display = 'none';
	}
	function abrir10() {
		document.getElementById('divn10').style.display = 'block';
		document.getElementById('divn1').style.display = 'none';
		document.getElementById('divn2').style.display = 'none';
		document.getElementById('divn3').style.display = 'none';
		document.getElementById('divn4').style.display = 'none';
		document.getElementById('divn5').style.display = 'none';
		document.getElementById('divn6').style.display = 'none';
		document.getElementById('divn7').style.display = 'none';
		document.getElementById('divn8').style.display = 'none';
		document.getElementById('divn9').style.display = 'none';
	}

	function ocultarcmd() {
		document.getElementById('cmdinfos').style.display = 'none';
		document.getElementById('cmdinfos2').style.display = 'block';
		document.getElementById('cmdinfos4').style.display = 'none';
		document.getElementById('actions').style.height = 'calc(100vh - 160px)';
	}

	function exibircmd() {
		document.getElementById('cmdinfos').style.display = 'block';
		document.getElementById('cmdinfos2').style.display = 'none';
		document.getElementById('cmdinfos4').style.display = 'block';
		document.getElementById('actions').style.height = 'calc(100vh - 390px)';
	}

	function ocultarevt() {
		document.getElementById('2cmdinfos').style.display = 'none';
		document.getElementById('2cmdinfos2').style.display = 'block';
		document.getElementById('2cmdinfos4').style.display = 'none';
		document.getElementById('event-actions').style.height = 'calc(100vh - 162px)';
	}

	function exibirevt() {
		document.getElementById('2cmdinfos').style.display = 'block';
		document.getElementById('2cmdinfos2').style.display = 'none';
		document.getElementById('2cmdinfos4').style.display = 'block';
		document.getElementById('event-actions').style.height = 'calc(100vh - 315px)';
	}


	function ocultarautosave() {
		document.getElementById('autoconfig1').style.display = 'none';
		document.getElementById('autoconfig2').style.display = 'block';
	}

	function exibirautosave() {
		document.getElementById('autoconfig1').style.display = 'block';
		document.getElementById('autoconfig2').style.display = 'none';
	}


	function fecharatu() {
document.getElementById('versao21').style.display = 'none';
document.querySelector("[name='txtstart']").value = "none";
document.querySelector("[name='notastxtqr']").value = "#dddddd";
document.querySelector("[name='notasbordaqr']").value = "1px solid rgb(60,60,60)";
}

function restaurar1() {

document.querySelector("[name='imagemdofundoqr']").value = "url(./bg/01.jpg) center";
}

function restaurar2() {

	document.querySelector("[name='cordofundoqr']").value = "rgba(0,0,0,0.4)";
	}

function restaurar3() {

		document.querySelector("[name='cordofundo3qr']").value = "rgba(30,30,30,0.7)";
		}

function restaurar4() {

		document.querySelector("[name='corbordacaixaxqr']").value = "1px solid rgba(60,60,60,0.7)";
		}

		function restaurar5() {

			document.querySelector("[name='savetextocaixa']").value = "#ffffff";
			}

			function restaurar6() {

				document.querySelector("[name='tamanhotxt']").value = "14px";
				}
			
function restaurar7() {

	document.querySelector("[name='savebaqr']").value = "rgba(30,30,30,0.80)";
	}

	function restaurar8() {

		document.querySelector("[name='saveactionqr']").value = "rgba(0,0,0,0.5)";
		}

				

	function setversao21(){
		document.querySelector("[name='tamanhotxt']").value = "14px";
		document.querySelector("[name='showCircle2']").value = CheckBoxElement2.checked = true
		if(CheckBoxElement2.checked) LiveCircle2.style.display = "none"
		else if (!CheckBoxElement2.checked) LiveCircle2.style.display = "";

		document.querySelector("[name='botaoespacopr']").value = "20px";
	}


	function trocar1(){document.querySelector("[name='trocar1']").type = "text";document.querySelector("[name='trocar1']").style = "width: 100%;border-radius: 4px;";}
	function trocar1h(){document.querySelector("[name='trocar1']").type = "color";document.querySelector("[name='trocar1']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar2(){document.querySelector("[name='trocar2']").type = "text";document.querySelector("[name='trocar2']").style = "width: 100%;border-radius: 4px;";}
	function trocar2h(){document.querySelector("[name='trocar2']").type = "color";document.querySelector("[name='trocar2']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar3(){document.querySelector("[name='trocar3']").type = "text";document.querySelector("[name='trocar3']").style = "width: 100%;border-radius: 4px;";}
	function trocar3h(){document.querySelector("[name='trocar3']").type = "color";document.querySelector("[name='trocar3']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar4(){document.querySelector("[name='trocar4']").type = "text";document.querySelector("[name='trocar4']").style = "width: 100%;border-radius: 4px;";}
	function trocar4h(){document.querySelector("[name='trocar4']").type = "color";document.querySelector("[name='trocar4']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar5(){document.querySelector("[name='trocar5']").type = "text";document.querySelector("[name='trocar5']").style = "width: 100%;border-radius: 4px;";}
	function trocar5h(){document.querySelector("[name='trocar5']").type = "color";document.querySelector("[name='trocar5']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar6(){document.querySelector("[name='trocar6']").type = "text";document.querySelector("[name='trocar6']").style = "width: 100%;border-radius: 4px;";}
	function trocar6h(){document.querySelector("[name='trocar6']").type = "color";document.querySelector("[name='trocar6']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar7(){document.querySelector("[name='trocar7']").type = "text";document.querySelector("[name='trocar7']").style = "width: 100%;border-radius: 4px;";}
	function trocar7h(){document.querySelector("[name='trocar7']").type = "color";document.querySelector("[name='trocar7']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar8(){document.querySelector("[name='trocar8']").type = "text";document.querySelector("[name='trocar8']").style = "width: 100%;border-radius: 4px;";}
	function trocar8h(){document.querySelector("[name='trocar8']").type = "color";document.querySelector("[name='trocar8']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar9(){document.querySelector("[name='trocar9']").type = "text";document.querySelector("[name='trocar9']").style = "width: 100%;border-radius: 4px;";}
	function trocar9h(){document.querySelector("[name='trocar9']").type = "color";document.querySelector("[name='trocar9']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar10(){document.querySelector("[name='trocar10']").type = "text";document.querySelector("[name='trocar10']").style = "width: 100%;border-radius: 4px;";}
	function trocar10h(){document.querySelector("[name='trocar10']").type = "color";document.querySelector("[name='trocar10']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar11(){document.querySelector("[name='trocar11']").type = "text";document.querySelector("[name='trocar11']").style = "width: 100%;border-radius: 4px;";}
	function trocar11h(){document.querySelector("[name='trocar11']").type = "color";document.querySelector("[name='trocar11']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar12(){document.querySelector("[name='trocar12']").type = "text";document.querySelector("[name='trocar12']").style = "width: 100%;border-radius: 4px;";}
	function trocar12h(){document.querySelector("[name='trocar12']").type = "color";document.querySelector("[name='trocar12']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar13(){document.querySelector("[name='trocar13']").type = "text";document.querySelector("[name='trocar13']").style = "width: 100%;border-radius: 4px;";}
	function trocar13h(){document.querySelector("[name='trocar13']").type = "color";document.querySelector("[name='trocar13']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar14(){document.querySelector("[name='trocar14']").type = "text";document.querySelector("[name='trocar14']").style = "width: 100%;border-radius: 4px;";}
	function trocar14h(){document.querySelector("[name='trocar14']").type = "color";document.querySelector("[name='trocar14']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar15(){document.querySelector("[name='trocar15']").type = "text";document.querySelector("[name='trocar15']").style = "width: 100%;border-radius: 4px;";}
	function trocar15h(){document.querySelector("[name='trocar15']").type = "color";document.querySelector("[name='trocar15']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar16(){document.querySelector("[name='trocar16']").type = "text";document.querySelector("[name='trocar16']").style = "width: 100%;border-radius: 4px;";}
	function trocar16h(){document.querySelector("[name='trocar16']").type = "color";document.querySelector("[name='trocar16']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar17(){document.querySelector("[name='trocar17']").type = "text";document.querySelector("[name='trocar17']").style = "width: 100%;border-radius: 4px;";}
	function trocar17h(){document.querySelector("[name='trocar17']").type = "color";document.querySelector("[name='trocar17']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar18(){document.querySelector("[name='trocar18']").type = "text";document.querySelector("[name='trocar18']").style = "width: 100%;border-radius: 4px;";}
	function trocar18h(){document.querySelector("[name='trocar18']").type = "color";document.querySelector("[name='trocar18']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar19(){document.querySelector("[name='trocar19']").type = "text";document.querySelector("[name='trocar19']").style = "width: 100%;border-radius: 4px;";}
	function trocar19h(){document.querySelector("[name='trocar19']").type = "color";document.querySelector("[name='trocar19']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar20(){document.querySelector("[name='trocar20']").type = "text";document.querySelector("[name='trocar20']").style = "width: 100%;border-radius: 4px;";}
	function trocar20h(){document.querySelector("[name='trocar20']").type = "color";document.querySelector("[name='trocar20']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar21(){document.querySelector("[name='trocar21']").type = "text";document.querySelector("[name='trocar21']").style = "width: 100%;border-radius: 4px;";}
	function trocar21h(){document.querySelector("[name='trocar21']").type = "color";document.querySelector("[name='trocar21']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar22(){document.querySelector("[name='trocar22']").type = "text";document.querySelector("[name='trocar22']").style = "width: 100%;border-radius: 4px;";}
	function trocar22h(){document.querySelector("[name='trocar22']").type = "color";document.querySelector("[name='trocar22']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar23(){document.querySelector("[name='trocar23']").type = "text";document.querySelector("[name='trocar23']").style = "width: 100%;border-radius: 4px;";}
	function trocar23h(){document.querySelector("[name='trocar23']").type = "color";document.querySelector("[name='trocar23']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}
	function trocar24(){document.querySelector("[name='trocar24']").type = "text";document.querySelector("[name='trocar24']").style = "width: 100%;border-radius: 4px;";}
	function trocar24h(){document.querySelector("[name='trocar24']").type = "color";document.querySelector("[name='trocar24']").style = "cursor:pointer;width: 35px;height:35px;padding:0px";}


	function checkZero(data){
		if(data.length == 1){
		  data = "0" + data;
		}
		return data;
	  }

		function saveProject() {
		DBM.saveProject();

		var today = new Date();
	var day = today.getDate() + "";
	var month = (today.getMonth() + 1) + "";
	var year = today.getFullYear() + "";
	var hour = today.getHours() + "";
	var minutes = today.getMinutes() + "";
	var seconds = today.getSeconds() + "";
	
	day = checkZero(day);
	month = checkZero(month);
	year = checkZero(year);
	hour = checkZero(hour);
	minutes = checkZero(minutes);
	seconds = checkZero(seconds);

	
		document.querySelector("[name='ultimosave']").innerText = (`Projeto salvo automaticamente em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
		document.querySelector("[name='ultimosave2']").innerText = (`Projeto salvo automaticamente em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
	  }

	  function registrarsave() {

		var today = new Date();
	var day = today.getDate() + "";
	var month = (today.getMonth() + 1) + "";
	var year = today.getFullYear() + "";
	var hour = today.getHours() + "";
	var minutes = today.getMinutes() + "";
	var seconds = today.getSeconds() + "";
	
	day = checkZero(day);
	month = checkZero(month);
	year = checkZero(year);
	hour = checkZero(hour);
	minutes = checkZero(minutes);
	seconds = checkZero(seconds);

	
		document.querySelector("[name='ultimosave']").innerText = (`Projeto salvo em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
		document.querySelector("[name='ultimosave2']").innerText = (`Projeto salvo em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
	  }

	  function salvarprojeto() {
		DBM.saveProject();

		var today = new Date();
	var day = today.getDate() + "";
	var month = (today.getMonth() + 1) + "";
	var year = today.getFullYear() + "";
	var hour = today.getHours() + "";
	var minutes = today.getMinutes() + "";
	var seconds = today.getSeconds() + "";
	
	day = checkZero(day);
	month = checkZero(month);
	year = checkZero(year);
	hour = checkZero(hour);
	minutes = checkZero(minutes);
	seconds = checkZero(seconds);

	
		document.querySelector("[name='ultimosave']").innerText = (`Projeto salvo em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
		document.querySelector("[name='ultimosave2']").innerText = (`Projeto salvo em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
	  }

	  function start(){
		$('.notas').bind('click', mouseHandler);
	  }

	function mouseHandler(e){
		if ($(this).hasClass('selecionado')) {
		} else {
		  $(".selecionado").removeClass('selecionado');
		  $(this).addClass('selecionado');
		} 
	  }

	  function customizeloadconfig()
	  {
		document.querySelector("[name='customizeloadconfig']").style = "display:inline-block";
	  }
	  
	
	  

	  function xinelason() {
		document.getElementById('xinelas').style.display = 'block';
		setsearchmark()
	  }
	  function xinelasoff() {
		document.getElementById('xinelas').style.display = 'none';
		document.getElementById("query").value = ""
setsearchmark()
	  }


	  function xinelas2on() {
		document.getElementById('xinelas2').style.display = 'block';
		setsearchmark()
	  }
	  function xinelas2off() {
		document.getElementById('xinelas2').style.display = 'none';
	  }

	  function customizepastaon() {
		document.getElementById('customizepastadiv').style.display = 'block';
		document.getElementById('customizepastadiv').style.top = '80px';
		document.getElementById('customizepastadiv').style.left = '20px';
	  }
	  function customizepastaoff() {
		document.getElementById('customizepastadiv').style.display = 'none';
	  }


	  
function customizeicon_font(){document.querySelector("[name='customizepasta']").value = "font";DBM.tempFolderSaveData()}
