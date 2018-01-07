/**
 * JS
 */

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

for (const index in cuts) {
  console.log(cuts[index])
}

for (const [index, cut] of cuts.entries()) {
  console.log(`${cut} is the item.`);
}

function addUpNumbers() {
  let total = 0;
  for (num of arguments) {
    total += num; 
  }
  console.log(total);
  return total; 
}

addUpNumbers(10,23,52,34,12,13,123);

const name = 'Harry Manchanda';
for (const char of name) {
  console.log(char);
}

const paraBunch = document.querySelectorAll('p');
for (const para of paraBunch) {
  para.addEventListener('click', function() {
    console.log(this.textContent);
  });
}

const apple = {
  color: 'red',
  size: 'medium',
  weight: 50,
  sugar: 10,
};

for (const prop in apple) {
  const value = apple[prop];
  console.log(value, prop);
}