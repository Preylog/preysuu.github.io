var myImage = document.querySelector("img");

myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if(mySrc === "images/firefox-icon.png") {
	myImage.setAttribute ("src", "images/u1140329s.png");
	} else {
	myImage.setAttribute("src", "images/firefox-icon.png");
	}
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("名前を入力してください");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Mozillaはずばらしいよ、" + myName;
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Mozillaはすばらしいよ。" + storedName;
}

myButton.onclick = function() {
	setUserName();
}