function Thermostat() {
    this.temp = 20;
}

Thermostat.prototype.increase = function() {
    this.temp++;
}

Thermostat.prototype.decrease = function() {
    if (this.temp <= 10){
        throw "Unable to decrease temperature further. Minimum temp is 10 degrees"
    }
    this.temp--;
}
