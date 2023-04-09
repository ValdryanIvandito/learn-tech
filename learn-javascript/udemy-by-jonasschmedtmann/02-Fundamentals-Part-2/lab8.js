//----------------//
// Object Methods //
//----------------//

const valdryan = {
    firstName: 'Valdryan',
    lastName: 'Ivandito',
    birthYear: 1994,
    job: 'Data Engineer',
    friends: ['Sofian', 'Gerry', 'Ruben'],
    hasDrivingLicense: true,

    calcAge1: function(birthYear) {
        return 2022 - birthYear;
    },

    calcAge2: function() {
        console.log(this);
        return 2022 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge2()} years old ${valdryan.job}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving license.`
    }
}

console.log(valdryan.calcAge1(1990));
console.log(valdryan['calcAge1'](1991));
console.log(valdryan.calcAge2());
console.log(valdryan.getSummary());