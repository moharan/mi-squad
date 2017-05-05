function Misquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;

	this.mostrarMisquad = function(){
		return("Nombre: " + this.nombre + "<br>" + "Apellido: " + this.apellido + "<br>" + "Edad: " + this.edad + "<br>" + "Hobbies: " + this.hobbies.join(" - ") );
	}
}
const rangi = new Misquad("Rangi","Becerra",32,["Viajar"]);
const genesis= new Misquad("Génesis","Narváez",27,["Pasear en Bici"]);
const rosa= new Misquad("Rosa","Díaz",32,["Pensar en la inmortalidad del cangrejo"]);
const caterina= new Misquad("Caterina","Da Silva",26,["Juegos Online"]);
const constanza= new Misquad("Constanza","Pecori",26,["Tejer", "Comer", "Dormir"]);
const laura= new Misquad("Laura","Pelaéz","Underfined",["Cinéfila"]);
const orieta= new Misquad("Orieta","Toro",27,["leer", "Dormir"]);

//document.getElementById("contenedor").innerHTML = rangi.mostrarMisquad() + genesis.mostrarMisquad() + rosa.mostrarMisquad() + caterina.mostrarMisquad() + constanza.mostrarMisquad();
//document.write("<div class= contenedor>" + rangi.mostrarMisquad() + "</div>");
//console.log(constanza.hobbies[1])

var res = [rangi,genesis,rosa,caterina,constanza,laura,orieta];

res.forEach(function(element){
	document.write("<div class= contenedor>" + element.mostrarMisquad() + "</div>");
});
