function Thermostat() {
    this.temp = 20;
    this.powerSaving = true;
}

Thermostat.prototype.increase = function() {
    if(this.powerSaving && this.temp < 25) {
        this.temp++
    } else if(!this.powerSaving && this.temp < 32) {
        this.temp++;
    }
}

Thermostat.prototype.decrease = function() {
    if (this.temp <= 10){
        throw "Unable to decrease temperature further. Minimum temp is 10 degrees"
    }
    this.temp--;
}

Thermostat.prototype.powerSavingOn = function() {
    this.powerSaving = true;
}

Thermostat.prototype.powerSavingOff = function() {
    this.powerSaving = false;
}

Thermostat.prototype.resetTemp = function() {
    this.temp = 20
}
