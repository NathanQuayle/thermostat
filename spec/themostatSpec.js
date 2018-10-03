describe('Thermostat', function() {
    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it('starts with a default temp of 20', function() {
        expect(thermostat.temp).toEqual(20);
    });

    it('starts with power-saving mode on', function() {
        expect(thermostat.powerSaving).toEqual(true);
    });

    describe('increase', function(){
        it('increases the thermostat temperature', function() {
            thermostat.increase()
            expect(thermostat.temp).toEqual(21);
        });
    })

    describe('decrease', function() {
        it('decreases the thermostat temperature', function() {
            thermostat.decrease();
            expect(thermostat.temp).toEqual(19);
        });

        it('has a minimum temp of 10', function() {
            for (var step = 0; step < 10; step++) {
                thermostat.decrease()
            };
            expect(function(){
                thermostat.decrease()
            }).toThrow("Unable to decrease temperature further. Minimum temp is 10 degrees");
        })
    });

    describe('powerSaving', function(){
        it('changes the thermostat to power saving mode on', function(){
            expect(thermostat.powerSaving).toEqual(true)
        })

        it('changes the thermostat to power saving off with a max temp of 32', function() {
            thermostat.powerSavingOff()
            expect(thermostat.powerSaving).toEqual(false);
        });
    });

    describe('resetTemp', function() {
        it('resets the temperature back to 20', function() {
            thermostat.resetTemp()
            expect(thermostat.temp).toEqual(20);
        })
    })
});
