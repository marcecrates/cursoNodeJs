//Constructor
function Animal(age){
    this.hasEnergy = true;
    this.hasAge = true;
    this.Age = age;
}
//metodos
Animal.prototype.getOld = function (){
    this.Age++;
    console.log(this.Age);
}
module.exports = Animal;