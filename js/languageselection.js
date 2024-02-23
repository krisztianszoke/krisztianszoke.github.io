import langSelector from './langs.json' assert {type: 'json'};

		let currentLang = "en";

		function setLangEN() {
			document.cookie= "language=en";
			let currentLang = "en";
			console.log(currentLang);
			changeText(currentLang);
		}

        function setLangDE() {
			document.cookie= "language=hu";
			let currentLang = "hu";
			console.log(currentLang);
			changeText(currentLang);
		}

		function setLangHU() {
			document.cookie= "language=hu";
			let currentLang = "hu";
			console.log(currentLang);
			changeText(currentLang);
		}

		function getCookie(cname) {
		let name = cname + "=";
		let ca = document.cookie.split(';');
		for(let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
			c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
			}
		}
		return "";
		}
		$( document ).ready(function () {
      	currentLang = getCookie("language");
		
		document.getElementById("lang-hu").addEventListener("click",setLangHU);
		document.getElementById("lang-en").addEventListener("click",setLangEN);
        document.getElementById("lang-en").addEventListener("click",setLangDE);
		changeText(currentLang);
    	});

		function changeText(currentLang){
			document.getElementById("mushroomlist_button").innerHTML=langSelector[currentLang].MushroomList;
			document.getElementById("home_button").innerHTML=langSelector[currentLang].Home;
			document.getElementById("uploadText").innerHTML=langSelector[currentLang].Upload;
			document.getElementById("predict-button").innerHTML=langSelector[currentLang].Prediction;
			document.getElementById("lang_button").innerHTML=langSelector[currentLang].Language;
			document.getElementById("document_button").innerHTML=langSelector[currentLang].Documentation;

		}