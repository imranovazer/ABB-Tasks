const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
}

const newObj = { ...employee, age: 21, salary: 720 };
console.log(newObj);