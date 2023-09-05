const openingHours = {
  thurs: {
    open: 12,
    close: 12,
  },
  Fri: {
    open: 3,
    Close: 3,
  },
  sat: {
    open: 4,
    close: 4,
  },
};

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
//Values

const values = Object.values(openingHours);
console.log(values);
//Entries
const entries = Object.entries(openingHours);
console.log(entries);

for (const [keys, { open, close }] of entries) {
  console.log(`On ${keys} we open at ${open} and close at ${close}`);
}
