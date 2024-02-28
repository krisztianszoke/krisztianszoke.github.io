import langSelector from './langs.json' assert {type: 'json'};

var currentLang = "en";
var isiPhone = /iPhone/i.test(navigator.userAgent);


function setLangEN() {
	document.cookie = "language=en";
	currentLang = "en";
	console.log(currentLang);
	changeText(currentLang);
}

function setLangDE() {
	document.cookie = "language=de";
	currentLang = "de";
	console.log(currentLang);
	changeText(currentLang);
}

function setLangHU() {
	document.cookie = "language=hu";
	currentLang = "hu";
	console.log(currentLang);
	changeText(currentLang);
}

function setLangFR() {
	document.cookie = "language=fr";
	currentLang = "fr";
	console.log(currentLang);
	changeText(currentLang);
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
$(document).ready(function () {
	currentLang = getCookie("language");
   changeText("en");
   $("#lang-hu").click(setLangHU);
   $("#lang-en").click(setLangEN);
   $("#lang-fr").click(setLangFR);
   $("#lang-de").click(setLangDE);
	changeText(currentLang);
});

function changeText(currentLang) {
    // MENUBAR
    if (langSelector[currentLang]) {
        document.getElementById("home-button").innerHTML = langSelector[currentLang].Home;
        document.getElementById("about-button").innerHTML = langSelector[currentLang].About;
        document.getElementById("services-button").innerHTML = langSelector[currentLang].Services;
        document.getElementById("contact-button").innerHTML = langSelector[currentLang].Contact;
        document.getElementById("news-button").innerHTML = langSelector[currentLang].News;
        document.getElementById("flag-icon-css-us").innerHTML = langSelector[currentLang].Flag;
        document.getElementById("current-lang").innerHTML = langSelector[currentLang].Language;
        // ABOUT US 
        document.getElementById("about-title").innerHTML = langSelector[currentLang].Section_about_title;
        document.getElementById("about-text").innerHTML = langSelector[currentLang].Section_about_text;
        //OUR TEAM
        document.getElementById("team-title").innerHTML = langSelector[currentLang].Section_team_title;
        document.getElementById("team-text").innerHTML = langSelector[currentLang].Section_team_text;
        document.getElementById("team-member-1-name").innerHTML = langSelector[currentLang].Section_team_member1_name;
        document.getElementById("team-member-1-role").innerHTML = langSelector[currentLang].Section_team_member1_role;
        document.getElementById("team-member-2-name").innerHTML = langSelector[currentLang].Section_team_member2_name;
        document.getElementById("team-member-2-role").innerHTML = langSelector[currentLang].Section_team_member2_role;
        //SERVICES
        document.getElementById("services-title").innerHTML = langSelector[currentLang].Section_services_title;
        document.getElementById("services-text").innerHTML = langSelector[currentLang].Section_services_text;
        document.getElementById("services-block1-title").innerHTML = langSelector[currentLang].Section_services_block_1_title;
        document.getElementById("services-block1-text").innerHTML = langSelector[currentLang].Section_services_block_1_text;
        document.getElementById("services-block2-title").innerHTML = langSelector[currentLang].Section_services_block_2_title;
        document.getElementById("services-block2-text").innerHTML = langSelector[currentLang].Section_services_block_2_text;
        document.getElementById("services-block3-title").innerHTML = langSelector[currentLang].Section_services_block_3_title;
        document.getElementById("services-block3-text").innerHTML = langSelector[currentLang].Section_services_block_3_text;
        document.getElementById("services-block4-title").innerHTML = langSelector[currentLang].Section_services_block_4_title;
        document.getElementById("services-block4-text").innerHTML = langSelector[currentLang].Section_services_block_4_text;
        //CONTACT
        document.getElementById("contact-title").innerHTML = langSelector[currentLang].Section_contact_title;
        document.getElementById("contact-text").innerHTML = langSelector[currentLang].Section_contact_text;
        document.getElementById("contact-location-title").innerHTML = langSelector[currentLang].Section_contact_address_title;
        document.getElementById("contact-location-text").innerHTML = langSelector[currentLang].Section_contact_address_text;
        document.getElementById("contact-email-title").innerHTML = langSelector[currentLang].Section_contact_email_title;
        document.getElementById("contact-email-text").innerHTML = langSelector[currentLang].Section_contact_email_text;
        document.getElementById("contact-phone-title").innerHTML = langSelector[currentLang].Section_contact_phone_title;
        document.getElementById("contact-phone-text").innerHTML = langSelector[currentLang].Section_contact_phone_text;
    } else {
        console.error("The language object for the selected language is undefined.");
    }
}