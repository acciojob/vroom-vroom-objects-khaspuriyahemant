// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
car.prototype.getMakeModel=function(){
	return '${this.make} ${this.model}';
};

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed=topSpeed;
}

SportsCarCar.prototype=Object.create(car.prototype);
SportsCarCar.prototype.constructor=SportsCar;

SportsCar.prototype.getTopSpeed=function(){
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
