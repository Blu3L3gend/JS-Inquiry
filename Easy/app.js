//2 name variables

var person1 = "Violet";
var person2 = "Jinx";

var longOrShort = function (name1, name2) {
  if (name1.length > name2.length) {
    console.log(
      `The name ${name1} is longer than ${name2} by ${
        name1.length - name2.length
      } characters`
    );
  } else if (name1.length < name2.length) {
    console.log(
      `the name ${name2} is longer than ${name1} by {name2.length - name1.length} characters`
    );
  } else {
    console.log(`${name1} and ${name2} are the same length`);
  }
};

longOrShort(person1, person2);
