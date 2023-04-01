/* Criado por XinXyla#0001 - Favor não apagar!
Editado por: 
*/
function customizebackup(){
const fs = require("fs");
fs.copyFile('./config_customizev07.json', './config_customizev07bk.json', (err) => {
  if (err) throw err;
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

  document.querySelector("[name='customizebk']").innerText = (`Backup em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
});}

function customizebackupauto(){
	const fs = require("fs");
	fs.copyFile('./config_customizev07.json', './config_customizev07bka.json', (err) => {
	  if (err) throw err;
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
	
	  document.querySelector("[name='customizebk']").innerText = (`Backup Auto feito em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
	});}

function customizerestaurar(){
	const fs = require("fs");
	fs.copyFile('./config_customizev07bk.json', './config_customizev07.json', (err) => {
	  if (err) throw err;
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

	  document.querySelector("[name='customizeres']").innerText = (`Restaurado em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);


		});}

		function customizerestaurar2(){
			const fs = require("fs");
			fs.copyFile('./config_customizev07bka.json', './config_customizev07.json', (err) => {
			  if (err) throw err;
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
		
			  document.querySelector("[name='customizeres']").innerText = (`Restaurado em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
		
		
				});}

	function restconfirm1() {
		document.getElementById('restconfirm2').style.display = 'block';
		document.getElementById('restconfirm1').style.display = 'none';
	  }
	  function restconfirm2() {
		document.getElementById('restconfirm1').style.display = 'block';
		document.getElementById('restconfirm2').style.display = 'none';
		document.getElementById('restconfirm3').style.display = 'none';
	  }

	  function restconfirm3() {
		document.getElementById('restconfirm3').style.display = 'block';
		document.getElementById('restconfirm1').style.display = 'none';
	  }


	  function xcustomizerestaurar(){
		const fs = require("fs");
		fs.copyFile('./config_customizev05.json', './config_customizev07.json', (err) => {
		  if (err) throw err;
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
	
		  document.querySelector("[name='xcustomizeres']").innerText = (`Restaurado em ${day}/${month}/${year} ás ${hour}:${minutes}:${seconds}`);
	
	
			});}


			function xrestconfirm1() {
				document.getElementById('xrestconfirm2').style.display = 'block';
				document.getElementById('xrestconfirm1').style.display = 'none';
			  }
	

			  function xrestconfirm2() {
				document.getElementById('xrestconfirm1').style.display = 'block';
				document.getElementById('xrestconfirm2').style.display = 'none';
			  }