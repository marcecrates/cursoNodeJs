//declaro la herencia
var Animal = require("./clase3_Clases.js");
var util = require("util");

//Clase hija
function Dog (age){
    Animal.call(this, age);
}
util.inherits(Dog, Animal);
var dogInstance = new Dog(30);
for(i = 0; i<10; i++){
    dogInstance.getOld();
}
                          