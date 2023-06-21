const user1 = {
    name: "Azer",
    years: 21
};
;

const { name, years: age, isAdmin = false } = user1;

console.log(name);
console.log(age);
console.log(isAdmin);

