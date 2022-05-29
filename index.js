const genBtn = document.querySelector(".gen-btn");
const passField = document.getElementsByClassName("pass-field");
const userNum = document.querySelector(".user-num");

function makePass(length) {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function copyPass(x) {
	passField[x].addEventListener("dblclick", function () {
		navigator.clipboard.writeText(passField[x].value);
	});
}

genBtn.addEventListener("click", function () {
	for (var i = 0; i < passField.length; i++) {
		passField[i].value = makePass(userNum.value);
		passField[i].style.backgroundImage = "none";
	}
	copyPass(0);
	copyPass(1);
	copyPass(2);
	copyPass(3);
});
