// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return 2*this.radius
    };

    get circumference() {
        return this.diameter * Math.PI
    };

    get area() {
        return Math.PI*(this.radius**2)
    };

    set diameter(value) {
       this.radius = value / 2 
    };

    set circumference(value) {
        this.radius = (value / Math.PI) / 2
    };

    set area(value) { 
        this.radius = Math.sqrt((value / Math.PI))
    };

}; 

