var a = 'a';
console.log(a);
if (1) {
  const b = 6;
  console.warn(b);
}

const obj = {
  prop: 2,
};

console.log(obj);
// var a = 2;
if (obj.hasOwnProperty('prop')) {
  const c = 2 + 2;
}
