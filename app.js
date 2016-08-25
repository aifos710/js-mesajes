var num = prompt("ingresar numero");

if(num % 2 != 0){
	document.write("Odd!");
}
else if(num % 2 == 0 && num > 1 && num < 6){
	document.write("Good!");
}
else if(num % 2 == 0 && num > 5 && num < 21){
	document.write("Great!");
}
else if(num % 2 == 0 && num > 20){
	document.write("Perfect!");
}
