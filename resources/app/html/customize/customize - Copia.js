/* Criado por XinXyla#0001 - Favor não apagar!
Editado por: 
*/
const configFile = "./config_customizev05.json",

/* Corpo  */ 
customizetexto = document.getElementById('customizetexto'),
customizetextoset = document.getElementsByClassName("customizetexto")[0],
customizebf = document.getElementById('customizebf'),
customizebfset = document.getElementsByClassName("customizebf")[0],
customizebb = document.getElementById('customizebb'),
customizebbset = document.getElementsByClassName("customizebb")[0],
customizecxtxt = document.getElementById('customizecxtxt'),
customizecxtxtset = document.getElementsByClassName("customizecxtxt")[0],
customizecxb = document.getElementById('customizecxb'),
customizecxbset = document.getElementsByClassName("customizecxb")[0],
customizecxf = document.getElementById('customizecxf'),
customizecxfset = document.getElementsByClassName("customizecxf")[0],
customizecorpo1 = document.getElementById('customizecorpo1'),
customizecorpo1set = document.getElementsByClassName("customizecorpo1")[0],
customizecorpo2 = document.getElementById('customizecorpo2'),
customizecorpo2set = document.getElementsByClassName("customizecorpo2")[0],

/* Menu  */ 
customizemenu1 = document.getElementById('customizemenu1'),
customizemenu1set = document.getElementsByClassName("customizemenu1")[0],
customizemenu2 = document.getElementById('customizemenu2'),
customizemenu2set = document.getElementsByClassName("customizemenu2")[0],
customizemenu3 = document.getElementById('customizemenu3'),
customizemenu3set = document.getElementsByClassName("customizemenu3")[0],
customizemenu4 = document.getElementById('customizemenu4'),
customizemenu4set = document.getElementsByClassName("customizemenu4")[0],
customizemenu5 = document.getElementById('customizemenu5'),
customizemenu5set = document.getElementsByClassName("customizemenu5")[0],
customizemenu6 = document.getElementById('customizemenu6'),
customizemenu6set = document.getElementsByClassName("customizemenu6")[0],
customizemenu7 = document.getElementById('customizemenu7'),
customizemenu7set = document.getElementsByClassName("customizemenu7")[0],

/* Rolagem  */ 
customizerolagem1 = document.getElementById('customizerolagem1'),
customizerolagem1set = document.getElementsByClassName("customizerolagem1")[0],
customizerolagem2 = document.getElementById('customizerolagem2'),
customizerolagem2set = document.getElementsByClassName("customizerolagem2")[0],
customizerolagem3 = document.getElementById('customizerolagem3'),
customizerolagem3set = document.getElementsByClassName("customizerolagem3")[0],
customizerolagem4 = document.getElementById('customizerolagem4'),
customizerolagem4set = document.getElementsByClassName("customizerolagem4")[0],
customizerolagem5 = document.getElementById('customizerolagem5'),
customizerolagem5set = document.getElementsByClassName("customizerolagem5")[0],
customizerolagem6 = document.getElementById('customizerolagem6'),
customizerolagem6set = document.getElementsByClassName("customizerolagem6")[0],
customizerolagem7 = document.getElementById('customizerolagem7'),
customizerolagem7set = document.getElementsByClassName("customizerolagem7")[0],

/* Actions & Eventos  */ 
customizeae1 = document.getElementById('customizeae1'),
customizeae1set = document.getElementsByClassName("customizeae1")[0],
customizeae2 = document.getElementById('customizeae2'),
customizeae2set = document.getElementsByClassName("customizeae2")[0],
customizeae3 = document.getElementById('customizeae3'),
customizeae3set = document.getElementsByClassName("customizeae3")[0],
customizeae4 = document.getElementById('customizeae4'),
customizeae4set = document.getElementsByClassName("customizeae4")[0],
customizeae5 = document.getElementById('customizeae5'),
customizeae5set = document.getElementsByClassName("customizeae5")[0],
customizeae6 = document.getElementById('customizeae6'),
customizeae6set = document.getElementsByClassName("customizeae6")[0],


/* Janela de Actions  */ 
customizej1 = document.getElementById('customizej1'),
customizej1set = document.getElementsByClassName("customizej1")[0],
customizej2 = document.getElementById('customizej2'),
customizej2set = document.getElementsByClassName("customizej2")[0],
customizej3 = document.getElementById('customizej3'),
customizej3set = document.getElementsByClassName("customizej3")[0],
customizej4 = document.getElementById('customizej4'),
customizej4set = document.getElementsByClassName("customizej4")[0],
customizej5 = document.getElementById('customizej5'),
customizej5set = document.getElementsByClassName("customizej5")[0],
customizej6 = document.getElementById('customizej6'),
customizej6set = document.getElementsByClassName("customizej6")[0],
customizej7 = document.getElementById('customizej7'),
customizej7set = document.getElementsByClassName("customizej7")[0],

/* Botões  */ 
customizebotaotexto = document.getElementById('customizebotaotexto'),
customizebotaotextoset = document.getElementsByClassName("customizebotaotexto")[0],
customizebotao = document.getElementById('customizebotao'),
customizebotaoset = document.getElementsByClassName("customizebotao")[0],
customizebotaotextoh = document.getElementById('customizebotaotextoh'),
customizebotaotextohset = document.getElementsByClassName("customizebotaotextoh")[0],
customizebotaoh = document.getElementById('customizebotaoh'),
customizebotaohset = document.getElementsByClassName("customizebotaoh")[0],

/* Marcador */ 
marcadorcustomize = document.getElementById('cordomarcador'),
marcadorcustomizetxt = document.getElementById('cordomarcadortxt'),
marcadorset = document.getElementsByClassName("marcador")[0],

/* Notas */ 
notasfundo = document.getElementById('notasfundo'),
notastxt = document.getElementById('notastxt'),
notasfundoset = document.getElementsByClassName("notasfundo")[0],
notastxtset = document.getElementsByClassName("notastxt")[0],
bordanotas = document.getElementById('bordanotas'),
bordanotasset = document.getElementsByClassName("bordanotas")[0],

fundocustomize = document.getElementById('cordofundo'),
fundocustomize2 = document.getElementById('cordofundo2'),
customizesalvar = document.getElementById('customizesalvar'),
fundoset = document.getElementsByClassName("fundo")[0],
fundoset2 = document.getElementsByClassName("fundo2")[0],
customizesalvarset = document.getElementsByClassName("customizesalvar")[0];
window.addEventListener("load", function() {
const fs = require("fs");
if(fs.existsSync(configFile)) {
	fs.readFile(configFile, function read(err, data) {
		if (err) throw err;
		var config = JSON.parse(data);

						/* Corpo */ 
						customizetexto.value = customizetextoset.style.background = config.customizetexto;
						document.documentElement.style.setProperty("--config-customizetexto", document.getElementById("customizetexto").value);
						customizebf.value = customizebfset.style.background = config.customizebf;
						document.documentElement.style.setProperty("--config-customizebf", document.getElementById("customizebf").value);
						customizebb.value = customizebbset.style.background = config.customizebb;
						document.documentElement.style.setProperty("--config-customizebb", document.getElementById("customizebb").value);
						customizecxtxt.value = customizecxtxtset.style.background = config.customizecxtxt;
						document.documentElement.style.setProperty("--config-customizecxtxt", document.getElementById("customizecxtxt").value);
						customizecxb.value = customizecxbset.style.background = config.customizecxb;
						document.documentElement.style.setProperty("--config-customizecxb", document.getElementById("customizecxb").value);
						customizecxf.value = customizecxfset.style.background = config.customizecxf;
						document.documentElement.style.setProperty("--config-customizecxf", document.getElementById("customizecxf").value);
						customizecorpo1.value = customizecorpo1set.style.background = config.customizecorpo1;
						document.documentElement.style.setProperty("--config-customizecorpo1", document.getElementById("customizecorpo1").value);
						customizecorpo2.value = customizecorpo2set.style.background = config.customizecorpo2;
						document.documentElement.style.setProperty("--config-customizecorpo2", document.getElementById("customizecorpo2").value);

												/* Menu */ 
												customizemenu1.value = customizemenu1set.style.background = config.customizemenu1;
												document.documentElement.style.setProperty("--config-customizemenu1", document.getElementById("customizemenu1").value);
												customizemenu2.value = customizemenu2set.style.background = config.customizemenu2;
												document.documentElement.style.setProperty("--config-customizemenu2", document.getElementById("customizemenu2").value);
												customizemenu3.value = customizemenu3set.style.background = config.customizemenu3;
												document.documentElement.style.setProperty("--config-customizemenu3", document.getElementById("customizemenu3").value);
												customizemenu4.value = customizemenu4set.style.background = config.customizemenu4;
												document.documentElement.style.setProperty("--config-customizemenu4", document.getElementById("customizemenu4").value);
												customizemenu5.value = customizemenu5set.style.background = config.customizemenu5;
												document.documentElement.style.setProperty("--config-customizemenu5", document.getElementById("customizemenu5").value);
												customizemenu6.value = customizemenu6set.style.background = config.customizemenu6;
												document.documentElement.style.setProperty("--config-customizemenu6", document.getElementById("customizemenu6").value);
												customizemenu7.value = customizemenu7set.style.background = config.customizemenu7;
												document.documentElement.style.setProperty("--config-customizemenu7", document.getElementById("customizemenu7").value);

																								/* Rolagem */ 
																								customizerolagem1.value = customizerolagem1set.style.background = config.customizerolagem1;
																								document.documentElement.style.setProperty("--config-customizerolagem1", document.getElementById("customizerolagem1").value);
																								customizerolagem2.value = customizerolagem2set.style.background = config.customizerolagem2;
																								document.documentElement.style.setProperty("--config-customizerolagem2", document.getElementById("customizerolagem2").value);
																								customizerolagem3.value = customizerolagem3set.style.background = config.customizerolagem3;
																								document.documentElement.style.setProperty("--config-customizerolagem3", document.getElementById("customizerolagem3").value);
																								customizerolagem4.value = customizerolagem4set.style.background = config.customizerolagem4;
																								document.documentElement.style.setProperty("--config-customizerolagem4", document.getElementById("customizerolagem4").value);
																								customizerolagem5.value = customizerolagem5set.style.background = config.customizerolagem5;
																								document.documentElement.style.setProperty("--config-customizerolagem5", document.getElementById("customizerolagem5").value);
																								customizerolagem6.value = customizerolagem6set.style.background = config.customizerolagem6;
																								document.documentElement.style.setProperty("--config-customizerolagem6", document.getElementById("customizerolagem6").value);
																								customizerolagem7.value = customizerolagem7set.style.background = config.customizerolagem7;
																								document.documentElement.style.setProperty("--config-customizerolagem7", document.getElementById("customizerolagem7").value);

/* Actions & Eventos  */ 
customizeae1.value = customizeae1set.style.background = config.customizeae1;
document.documentElement.style.setProperty("--config-customizeae1", document.getElementById("customizeae1").value);
customizeae2.value = customizeae2set.style.background = config.customizeae2;
document.documentElement.style.setProperty("--config-customizeae2", document.getElementById("customizeae2").value);
customizeae3.value = customizeae3set.style.background = config.customizeae3;
document.documentElement.style.setProperty("--config-customizeae3", document.getElementById("customizeae3").value);
customizeae4.value = customizeae4set.style.background = config.customizeae4;
document.documentElement.style.setProperty("--config-customizeae4", document.getElementById("customizeae4").value);
customizeae5.value = customizeae5set.style.background = config.customizeae5;
document.documentElement.style.setProperty("--config-customizeae5", document.getElementById("customizeae5").value);
customizeae6.value = customizeae6set.style.background = config.customizeae6;
document.documentElement.style.setProperty("--config-customizeae6", document.getElementById("customizeae6").value);

/* Janela de Actions  */ 
customizej1.value = customizej1set.style.background = config.customizej1;
document.documentElement.style.setProperty("--config-customizej1", document.getElementById("customizej1").value);
customizej2.value = customizej2set.style.background = config.customizej2;
document.documentElement.style.setProperty("--config-customizej2", document.getElementById("customizej2").value);
customizej3.value = customizej3set.style.background = config.customizej3;
document.documentElement.style.setProperty("--config-customizej3", document.getElementById("customizej3").value);
customizej4.value = customizej4set.style.background = config.customizej4;
document.documentElement.style.setProperty("--config-customizej4", document.getElementById("customizej4").value);
customizej5.value = customizej5set.style.background = config.customizej5;
document.documentElement.style.setProperty("--config-customizej5", document.getElementById("customizej5").value);
customizej6.value = customizej6set.style.background = config.customizej6;
document.documentElement.style.setProperty("--config-customizej6", document.getElementById("customizej6").value);
customizej7.value = customizej7set.style.background = config.customizej7;
document.documentElement.style.setProperty("--config-customizej7", document.getElementById("customizej7").value);

												/* Botões */ 
												customizebotaotexto.value = customizebotaotextoset.style.background = config.customizebotaotexto;
												document.documentElement.style.setProperty("--config-customizebotaotexto", document.getElementById("customizebotaotexto").value);
												customizebotao.value = customizebotaoset.style.background = config.customizebotao;
												document.documentElement.style.setProperty("--config-customizebotao", document.getElementById("customizebotao").value);
												customizebotaotextoh.value = customizebotaotextohset.style.background = config.customizebotaotextoh;
												document.documentElement.style.setProperty("--config-customizebotaotextoh", document.getElementById("customizebotaotextoh").value);
												customizebotaoh.value = customizebotaohset.style.background = config.customizebotaoh;
												document.documentElement.style.setProperty("--config-customizebotaoh", document.getElementById("customizebotaoh").value);


				/* Marcador  */ 
				marcadorcustomize.value = marcadorset.style.background = config.marcador;
				marcadorcustomizetxt.value = marcadorset.style.background = config.marcadortxt;
				document.documentElement.style.setProperty("--config-marcador", document.getElementById("cordomarcador").value);
				document.documentElement.style.setProperty("--config-marcadortxt", document.getElementById("cordomarcadortxt").value);

		/* Notas */ 
		notasfundo.value = notasfundoset.style.background = config.notasfundo;
		notastxt.value = notastxtset.style.background = config.notastxt;
		bordanotas.value = bordanotasset.style.background = config.bordanotas;
		document.documentElement.style.setProperty("--config-notasfundo", document.getElementById("notasfundo").value);
		document.documentElement.style.setProperty("--config-notastxt", document.getElementById("notastxt").value);
		document.documentElement.style.setProperty("--config-bordanotas", document.getElementById("bordanotas").value);

  		fundocustomize.value = fundoset.style.background = config.fundo;
		fundocustomize2.value = fundoset2.style.background = config.fundo2;
		customizesalvar.value = customizesalvarset.style.display = config.customizesalvar;
		document.documentElement.style.setProperty("--config-fundo", document.getElementById("cordofundo").value);
		document.documentElement.style.setProperty("--config-fundo2", document.getElementById("cordofundo2").value);
		document.documentElement.style.setProperty("--config-customizesalvar", document.getElementById("customizesalvar").value);
	});
}
else {


	/* Corpo */ 
	customizetexto.value = "#ffffff";
	customizebf.value = "rgba(0,0,0,0.5)";
	customizebb.value = "0px";
	customizecxtxt.value = "#ffffff";
	customizecxb.value = "0px";
	customizecxf.value = "rgba(60,60,60,0.9)";
	customizecorpo1.value = "rgba(0,0,0,0.5)";
	customizecorpo2.value = "0px";

		/* Menu */ 
		customizemenu1.value = "rgba(40,40,40,0.5)";
		customizemenu2.value = "1px solid rgba(250,250,250,0.5)";
		customizemenu3.value = "#ffffff";
		customizemenu4.value = "#000";
		customizemenu5.value = "#ffffff";
		customizemenu6.value = "0px 1px";
		customizemenu7.value = "5px";

		
		/* Rolagem */ 
		customizerolagem1.value = "rgb(0,0,0)";
		customizerolagem2.value = "1px solid #222";
		customizerolagem3.value = "rgb(100,150,200)";
		customizerolagem4.value = "rgb(200,200,200)";
		customizerolagem5.value = "none";
		customizerolagem6.value = "rgb(100,150,200)";
		customizerolagem7.value = "10px";


/* Actions & Eventos  */ 
		customizeae1.value = "#222";
		customizeae2.value = "#dddddd";
		customizeae3.value = "#000";
		customizeae4.value = "#ffffff";
		customizeae5.value = "1px solid #333";
		customizeae6.value = "1px solid rgb(150,150,200)";

		/* Janela de Actions  */ 
		customizej1.value = "#111";
		customizej2.value = "#C8C8C8";
		customizej3.value = "#222";
		customizej4.value = "#333";
		customizej5.value = "#C8C8C8";
		customizej6.value = "1px solid #555";
		customizej7.value = "url(./bg/01.gif) center";

		/* Botão */ 
		customizebotao.value = "rgba(200,250,250,0.5)";
		customizebotaotexto.value = "#111111";
		customizebotaoh.value = "rgba(200,250,250,0.7)";
		customizebotaotextoh.value = "#000000";


/* Marcador */ 
marcadorcustomize.value = "#ffff00";
marcadorcustomizetxt.value = "";

/* Notas */ 
notasfundo.value = "rgba(0,0,0,0.6)";
notastxt.value = "#dddddd";
bordanotas.value = "1px solid rgba(60,60,60)";

fundocustomize.value = "url(./bg/01.jpg) center";
fundocustomize2.value = "rgba(0,0,0,0.4)";
customizesalvar.value = "0";


}

});


function customizereload(){
	const fs = require("fs");
	if(fs.existsSync(configFile)) {
		fs.readFile(configFile, function read(err, data) {
			if (err) throw err;
			var config = JSON.parse(data);
	
							/* Corpo */ 
							customizetexto.value = customizetextoset.style.background = config.customizetexto;
							document.documentElement.style.setProperty("--config-customizetexto", document.getElementById("customizetexto").value);
							customizebf.value = customizebfset.style.background = config.customizebf;
							document.documentElement.style.setProperty("--config-customizebf", document.getElementById("customizebf").value);
							customizebb.value = customizebbset.style.background = config.customizebb;
							document.documentElement.style.setProperty("--config-customizebb", document.getElementById("customizebb").value);
							customizecxtxt.value = customizecxtxtset.style.background = config.customizecxtxt;
							document.documentElement.style.setProperty("--config-customizecxtxt", document.getElementById("customizecxtxt").value);
							customizecxb.value = customizecxbset.style.background = config.customizecxb;
							document.documentElement.style.setProperty("--config-customizecxb", document.getElementById("customizecxb").value);
							customizecxf.value = customizecxfset.style.background = config.customizecxf;
							document.documentElement.style.setProperty("--config-customizecxf", document.getElementById("customizecxf").value);
							customizecorpo1.value = customizecorpo1set.style.background = config.customizecorpo1;
							document.documentElement.style.setProperty("--config-customizecorpo1", document.getElementById("customizecorpo1").value);
							customizecorpo2.value = customizecorpo2set.style.background = config.customizecorpo2;
							document.documentElement.style.setProperty("--config-customizecorpo2", document.getElementById("customizecorpo2").value);
	
													/* Menu */ 
													customizemenu1.value = customizemenu1set.style.background = config.customizemenu1;
													document.documentElement.style.setProperty("--config-customizemenu1", document.getElementById("customizemenu1").value);
													customizemenu2.value = customizemenu2set.style.background = config.customizemenu2;
													document.documentElement.style.setProperty("--config-customizemenu2", document.getElementById("customizemenu2").value);
													customizemenu3.value = customizemenu3set.style.background = config.customizemenu3;
													document.documentElement.style.setProperty("--config-customizemenu3", document.getElementById("customizemenu3").value);
													customizemenu4.value = customizemenu4set.style.background = config.customizemenu4;
													document.documentElement.style.setProperty("--config-customizemenu4", document.getElementById("customizemenu4").value);
													customizemenu5.value = customizemenu5set.style.background = config.customizemenu5;
													document.documentElement.style.setProperty("--config-customizemenu5", document.getElementById("customizemenu5").value);
													customizemenu6.value = customizemenu6set.style.background = config.customizemenu6;
													document.documentElement.style.setProperty("--config-customizemenu6", document.getElementById("customizemenu6").value);
													customizemenu7.value = customizemenu7set.style.background = config.customizemenu7;
													document.documentElement.style.setProperty("--config-customizemenu7", document.getElementById("customizemenu7").value);
	
																									/* Rolagem */ 
																									customizerolagem1.value = customizerolagem1set.style.background = config.customizerolagem1;
																									document.documentElement.style.setProperty("--config-customizerolagem1", document.getElementById("customizerolagem1").value);
																									customizerolagem2.value = customizerolagem2set.style.background = config.customizerolagem2;
																									document.documentElement.style.setProperty("--config-customizerolagem2", document.getElementById("customizerolagem2").value);
																									customizerolagem3.value = customizerolagem3set.style.background = config.customizerolagem3;
																									document.documentElement.style.setProperty("--config-customizerolagem3", document.getElementById("customizerolagem3").value);
																									customizerolagem4.value = customizerolagem4set.style.background = config.customizerolagem4;
																									document.documentElement.style.setProperty("--config-customizerolagem4", document.getElementById("customizerolagem4").value);
																									customizerolagem5.value = customizerolagem5set.style.background = config.customizerolagem5;
																									document.documentElement.style.setProperty("--config-customizerolagem5", document.getElementById("customizerolagem5").value);
																									customizerolagem6.value = customizerolagem6set.style.background = config.customizerolagem6;
																									document.documentElement.style.setProperty("--config-customizerolagem6", document.getElementById("customizerolagem6").value);
																									customizerolagem7.value = customizerolagem7set.style.background = config.customizerolagem7;
																									document.documentElement.style.setProperty("--config-customizerolagem7", document.getElementById("customizerolagem7").value);
	
	/* Actions & Eventos  */ 
	customizeae1.value = customizeae1set.style.background = config.customizeae1;
	document.documentElement.style.setProperty("--config-customizeae1", document.getElementById("customizeae1").value);
	customizeae2.value = customizeae2set.style.background = config.customizeae2;
	document.documentElement.style.setProperty("--config-customizeae2", document.getElementById("customizeae2").value);
	customizeae3.value = customizeae3set.style.background = config.customizeae3;
	document.documentElement.style.setProperty("--config-customizeae3", document.getElementById("customizeae3").value);
	customizeae4.value = customizeae4set.style.background = config.customizeae4;
	document.documentElement.style.setProperty("--config-customizeae4", document.getElementById("customizeae4").value);
	customizeae5.value = customizeae5set.style.background = config.customizeae5;
	document.documentElement.style.setProperty("--config-customizeae5", document.getElementById("customizeae5").value);
	customizeae6.value = customizeae6set.style.background = config.customizeae6;
	document.documentElement.style.setProperty("--config-customizeae6", document.getElementById("customizeae6").value);

	/* Janela de Actions  */ 
customizej1.value = customizej1set.style.background = config.customizej1;
document.documentElement.style.setProperty("--config-customizej1", document.getElementById("customizej1").value);
customizej2.value = customizej2set.style.background = config.customizej2;
document.documentElement.style.setProperty("--config-customizej2", document.getElementById("customizej2").value);
customizej3.value = customizej3set.style.background = config.customizej3;
document.documentElement.style.setProperty("--config-customizej3", document.getElementById("customizej3").value);
customizej4.value = customizej4set.style.background = config.customizej4;
document.documentElement.style.setProperty("--config-customizej4", document.getElementById("customizej4").value);
customizej5.value = customizej5set.style.background = config.customizej5;
document.documentElement.style.setProperty("--config-customizej5", document.getElementById("customizej5").value);
customizej6.value = customizej6set.style.background = config.customizej6;
document.documentElement.style.setProperty("--config-customizej6", document.getElementById("customizej6").value);
customizej7.value = customizej7set.style.background = config.customizej7;
document.documentElement.style.setProperty("--config-customizej7", document.getElementById("customizej7").value);
	
													/* Botões */ 
													customizebotaotexto.value = customizebotaotextoset.style.background = config.customizebotaotexto;
													document.documentElement.style.setProperty("--config-customizebotaotexto", document.getElementById("customizebotaotexto").value);
													customizebotao.value = customizebotaoset.style.background = config.customizebotao;
													document.documentElement.style.setProperty("--config-customizebotao", document.getElementById("customizebotao").value);
													customizebotaotextoh.value = customizebotaotextohset.style.background = config.customizebotaotextoh;
													document.documentElement.style.setProperty("--config-customizebotaotextoh", document.getElementById("customizebotaotextoh").value);
													customizebotaoh.value = customizebotaohset.style.background = config.customizebotaoh;
													document.documentElement.style.setProperty("--config-customizebotaoh", document.getElementById("customizebotaoh").value);
	
					/* Marcador  */ 
					marcadorcustomize.value = marcadorset.style.background = config.marcador;
					marcadorcustomizetxt.value = marcadorset.style.background = config.marcadortxt;
					document.documentElement.style.setProperty("--config-marcador", document.getElementById("cordomarcador").value);
					document.documentElement.style.setProperty("--config-marcadortxt", document.getElementById("cordomarcadortxt").value);
	
			/* Notas */ 
			notasfundo.value = notasfundoset.style.background = config.notasfundo;
			notastxt.value = notastxtset.style.background = config.notastxt;
			bordanotas.value = bordanotasset.style.background = config.bordanotas;
			document.documentElement.style.setProperty("--config-notasfundo", document.getElementById("notasfundo").value);
			document.documentElement.style.setProperty("--config-notastxt", document.getElementById("notastxt").value);
			document.documentElement.style.setProperty("--config-bordanotas", document.getElementById("bordanotas").value);
	
			  fundocustomize.value = fundoset.style.background = config.fundo;
			fundocustomize2.value = fundoset2.style.background = config.fundo2;
			customizesalvar.value = customizesalvarset.style.display = config.customizesalvar;
			document.documentElement.style.setProperty("--config-fundo", document.getElementById("cordofundo").value);
			document.documentElement.style.setProperty("--config-fundo2", document.getElementById("cordofundo2").value);
			document.documentElement.style.setProperty("--config-customizesalvar", document.getElementById("customizesalvar").value);
		});
	}
	else {
	
	
		/* Corpo */ 
		customizetexto.value = "#ffffff";
		customizebf.value = "rgba(0,0,0,0.5)";
		customizebb.value = "0px";
		customizecxtxt.value = "#ffffff";
		customizecxb.value = "0px";
		customizecxf.value = "rgba(60,60,60,0.9)";
		customizecorpo1.value = "rgba(0,0,0,0.5)";
		customizecorpo2.value = "0px";
	
			/* Menu */ 
			customizemenu1.value = "rgba(40,40,40,0.5)";
			customizemenu2.value = "1px solid rgba(250,250,250,0.5)";
			customizemenu3.value = "#ffffff";
			customizemenu4.value = "#000";
			customizemenu5.value = "#ffffff";
			customizemenu6.value = "0px 1px";
			customizemenu7.value = "5px";
	
			
			/* Rolagem */ 
			customizerolagem1.value = "rgb(0,0,0)";
			customizerolagem2.value = "1px solid #222";
			customizerolagem3.value = "rgb(100,150,200)";
			customizerolagem4.value = "rgb(200,200,200)";
			customizerolagem5.value = "none";
			customizerolagem6.value = "rgb(100,150,200)";
			customizerolagem7.value = "10px";
	
	
	/* Actions & Eventos  */ 
			customizeae1.value = "#222";
			customizeae2.value = "#dddddd";
			customizeae3.value = "#000";
			customizeae4.value = "#ffffff";
			customizeae5.value = "1px solid #333";
			customizeae6.value = "1px solid rgb(150,150,200)";

			
		/* Janela de Actions  */ 
		customizej1.value = "#111";
		customizej2.value = "#C8C8C8";
		customizej3.value = "#222";
		customizej4.value = "#333";
		customizej5.value = "#C8C8C8";
		customizej6.value = "1px solid #555";
		customizej7.value = "url(./bg/01.gif) center";
	
			/* Botão */ 
			customizebotao.value = "rgba(200,250,250,0.5)";
			customizebotaotexto.value = "#111111";
			customizebotaoh.value = "rgba(200,250,250,0.7)";
		customizebotaotextoh.value = "#000000";
	
	/* Marcador */ 
	marcadorcustomize.value = "#ffff00";
	marcadorcustomizetxt.value = "";
	
	/* Notas */ 
	notasfundo.value = "rgba(0,0,0,0.6)";
	notastxt.value = "#dddddd";
	bordanotas.value = "1px solid rgba(60,60,60)";
	
	fundocustomize.value = "url(./bg/01.jpg) center";
	fundocustomize2.value = "rgba(0,0,0,0.4)";
	customizesalvar.value = "0";
	
	
	}}


function setcustomize() {
const fs = require("fs");
marcadorset.style.background = marcadorcustomize.value;


		/* Corpo */ 
		document.documentElement.style.setProperty("--config-customizetexto", document.getElementById("customizetexto").value);
		document.documentElement.style.setProperty("--config-customizebf", document.getElementById("customizebf").value);
		document.documentElement.style.setProperty("--config-customizebb", document.getElementById("customizebb").value);
		document.documentElement.style.setProperty("--config-customizecxtxt", document.getElementById("customizecxtxt").value);
		document.documentElement.style.setProperty("--config-customizecxb", document.getElementById("customizecxb").value);
		document.documentElement.style.setProperty("--config-customizecxf", document.getElementById("customizecxf").value);
		document.documentElement.style.setProperty("--config-customizecorpo1", document.getElementById("customizecorpo1").value);
		document.documentElement.style.setProperty("--config-customizecorpo2", document.getElementById("customizecorpo2").value);

				/* Menu */ 
				document.documentElement.style.setProperty("--config-customizemenu1", document.getElementById("customizemenu1").value);
				document.documentElement.style.setProperty("--config-customizemenu2", document.getElementById("customizemenu2").value);
				document.documentElement.style.setProperty("--config-customizemenu3", document.getElementById("customizemenu3").value);
				document.documentElement.style.setProperty("--config-customizemenu4", document.getElementById("customizemenu4").value);
				document.documentElement.style.setProperty("--config-customizemenu5", document.getElementById("customizemenu5").value);
				document.documentElement.style.setProperty("--config-customizemenu6", document.getElementById("customizemenu6").value);
				document.documentElement.style.setProperty("--config-customizemenu7", document.getElementById("customizemenu7").value);

				
				/* rolagem */ 
				document.documentElement.style.setProperty("--config-customizerolagem1", document.getElementById("customizerolagem1").value);
				document.documentElement.style.setProperty("--config-customizerolagem2", document.getElementById("customizerolagem2").value);
				document.documentElement.style.setProperty("--config-customizerolagem3", document.getElementById("customizerolagem3").value);
				document.documentElement.style.setProperty("--config-customizerolagem4", document.getElementById("customizerolagem4").value);
				document.documentElement.style.setProperty("--config-customizerolagem5", document.getElementById("customizerolagem5").value);
				document.documentElement.style.setProperty("--config-customizerolagem6", document.getElementById("customizerolagem6").value);
				document.documentElement.style.setProperty("--config-customizerolagem7", document.getElementById("customizerolagem7").value);


				/* Actions & Eventos  */ 
document.documentElement.style.setProperty("--config-customizeae1", document.getElementById("customizeae1").value);
document.documentElement.style.setProperty("--config-customizeae2", document.getElementById("customizeae2").value);
document.documentElement.style.setProperty("--config-customizeae3", document.getElementById("customizeae3").value);
document.documentElement.style.setProperty("--config-customizeae4", document.getElementById("customizeae4").value);
document.documentElement.style.setProperty("--config-customizeae5", document.getElementById("customizeae5").value);
document.documentElement.style.setProperty("--config-customizeae6", document.getElementById("customizeae6").value);


	/* Janela de Actions  */ 
	document.documentElement.style.setProperty("--config-customizej1", document.getElementById("customizej1").value);
	document.documentElement.style.setProperty("--config-customizej2", document.getElementById("customizej2").value);
	document.documentElement.style.setProperty("--config-customizej3", document.getElementById("customizej3").value);
	document.documentElement.style.setProperty("--config-customizej4", document.getElementById("customizej4").value);
	document.documentElement.style.setProperty("--config-customizej5", document.getElementById("customizej5").value);
	document.documentElement.style.setProperty("--config-customizej6", document.getElementById("customizej6").value);
	document.documentElement.style.setProperty("--config-customizej7", document.getElementById("customizej7").value);

				/* Botão */ 
				document.documentElement.style.setProperty("--config-customizebotao", document.getElementById("customizebotao").value);
				document.documentElement.style.setProperty("--config-customizebotaotexto", document.getElementById("customizebotaotexto").value);
				document.documentElement.style.setProperty("--config-customizebotaoh", document.getElementById("customizebotaoh").value);
				document.documentElement.style.setProperty("--config-customizebotaotextoh", document.getElementById("customizebotaotextoh").value);

		/* Marcador de comandos e eventos */ 
		document.documentElement.style.setProperty("--config-marcador", document.getElementById("cordomarcador").value);
		document.documentElement.style.setProperty("--config-marcadortxt", document.getElementById("cordomarcadortxt").value);

		/* Notas */ 
		document.documentElement.style.setProperty("--config-notasfundo", document.getElementById("notasfundo").value);
		document.documentElement.style.setProperty("--config-notastxt", document.getElementById("notastxt").value);
		document.documentElement.style.setProperty("--config-bordanotas", document.getElementById("bordanotas").value);


		document.documentElement.style.setProperty("--config-fundo", document.getElementById("cordofundo").value);
		document.documentElement.style.setProperty("--config-fundo2", document.getElementById("cordofundo2").value);
		document.documentElement.style.setProperty("--config-customizesalvar", document.getElementById("customizesalvar").value);
		
		
fs.writeFile(configFile,JSON.stringify({"fundo": fundocustomize.value,"fundo2": fundocustomize2.value,"customizesalvar": customizesalvar.value,"marcador": marcadorcustomize.value,"marcadortxt": marcadorcustomizetxt.value,"notasfundo": notasfundo.value,"notastxt": notastxt.value,"bordanotas": bordanotas.value,"customizetexto": customizetexto.value,"customizebf": customizebf.value,"customizebb": customizebb.value,"customizecxtxt": customizecxtxt.value,"customizecxb": customizecxb.value,"customizecxf": customizecxf.value,"customizebotaotexto": customizebotaotexto.value,"customizebotao": customizebotao.value,"customizemenu1": customizemenu1.value,"customizemenu2": customizemenu2.value,"customizemenu3": customizemenu3.value,"customizemenu4": customizemenu4.value,"customizemenu5": customizemenu5.value,"customizemenu6": customizemenu6.value,"customizemenu7": customizemenu7.value,"customizeae1": customizeae1.value,"customizeae2": customizeae2.value,"customizeae3": customizeae3.value,"customizeae4": customizeae4.value,"customizeae5": customizeae5.value,"customizeae6": customizeae6.value,"customizecorpo1": customizecorpo1.value,"customizecorpo2": customizecorpo2.value,"customizerolagem1": customizerolagem1.value,"customizerolagem2": customizerolagem2.value,"customizerolagem3": customizerolagem3.value,"customizerolagem4": customizerolagem4.value,"customizerolagem5": customizerolagem5.value,"customizerolagem6": customizerolagem6.value,"customizerolagem7": customizerolagem7.value,"customizej1": customizej1.value,"customizej2": customizej2.value,"customizej3": customizej3.value,"customizej4": customizej4.value,"customizej5": customizej5.value,"customizej6": customizej6.value,"customizej7": customizej7.value,"customizebotaotextoh": customizebotaotextoh.value,"customizebotaoh": customizebotaoh.value,}), (err) => { if(err) throw err; });
}
