const clients1 = ["Gilbert", "Salvatore", "Pierce", "Summers", "Forbes", "Donovan", "Bennett"];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];

const combinedClients = [... new Set([...clients1, ...clients2])];

console.log(combinedClients);