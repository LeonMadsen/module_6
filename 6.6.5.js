const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };

const arrValues = [];
for (const key in obj) {
if (typeof obj[key] === 'object') {
arrValues.push(Object.values(obj[key]));
} else {
arrValues.push(obj[key]);
}
}
console.log(arrValues);