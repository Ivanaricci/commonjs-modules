const fullName = require('./names')
const allHobbies = require('./hobbies')


const info = () => {
    return {
        fullName: fullName('Ivana', 'Ricci'),
        hobbies: allHobbies('Palestra', 'Viaggiare', 'Dormire')
    }
}

console.log(info())