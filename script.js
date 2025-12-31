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

SportCar.prototype=Object.create(car.prototype);
SportCar.prototype.constructor=SportsCar;

SportCar.prototype.getTopSpeed=function(){
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
