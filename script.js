let stringArray = ["Apple", "Orange", "Banana"];

function addString(newString) {
 
  if (stringArray.includes(newString)) {
    console.log(`"${newString}" is already in the array.`);
  } else {
    stringArray.push(newString); 
    console.log(`"${newString}" added to the array.`);
  }

  stringArray.sort();

  console.log("Sorted Array:", stringArray);
  
  console.log("Array Length:", stringArray.length);
}

addString("Grapes");
addString("Apple"); // Already exists
addString("Mango");
addString("watermelon");
