//function loadAll() {

			var css = document.querySelector("h3");
			var color1 = document.querySelector(".color1");
			var color2 = document.querySelector(".color2");
			var body = document.getElementById("gradient");

			function setGradient() {
				body.style.background =
				"linear-gradient(to right, " 
				+ color1.value 
				+ ", " 
				+ color2.value
				+ ")";
				css.textContent = color1.value + "; " + color2.value;
			}

			color1.addEventListener("input", setGradient);
			color2.addEventListener("input", setGradient);

			css.textContent = color1.value + "; " + color2.value;

			/* "linear-gradient(to right, " 
				+ color1.value 
				+ ", " 
				+ color2.value 
				+ ")"; */

			//var btn = document.createElement("Button");
			//fent a random button

			var btn = document.querySelector(".gomb");
			
			function randomSzin() {
				var szin1 = "#" + ("000000" + Math.floor(Math.random() * 
				16777216).toString(16)).substr(-6);
				var szin2 = "#" + ("000000" + Math.floor(Math.random() * 
				16777216).toString(16)).substr(-6);
				//szin1 !== szin2;
				body.style.background =
				"linear-gradient(to right, " 
				+ szin1
				+ ", " 
				+ szin2
				+ ")";
				css.textContent = szin1 + "; " + szin2;
			}
			btn.addEventListener("click", randomSzin);
			setGradient();

			//szin1.addEventListener("input", randomSzin);
			//szin2.addEventListener("input", randomSzin);

			//css.textContent = szin1.value + "; " + szin2.value;

			//azonnali oldal betoltes https://www.w3schools.com/tags/ev_onload.asp

//}

/*
window.onload = function () {
	css.textContent = "onload megtortent";
}*/

