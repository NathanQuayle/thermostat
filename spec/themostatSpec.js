describe('Thermostat', function() {
    beforeEach(function() {
        thermostat = new Thermostat();
    });
    
    it('starts with a default temp of 20', function() {
        expect(thermostat.temp).toBe(20);
    });
});