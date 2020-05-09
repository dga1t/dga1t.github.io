// Exercise: Make the test pass

function addTwoToEveryNumberInTheList (list) {
    // an example for you to see how the tests work
    
    const newList = [];
  
    for (let i = 0; i < list.length; i++) {
      newList.push(list[i] + 2);
    }
    
    return newList;
} 
  
function findLargestNumber(list) {
    // return the largest number in array
    let i;
    
    return Math.max.apply(null, list);
}

function makeDogObject() {
    // return a dog object that
    //   has a speak method that returns woof
    //   has a name property of "Fido"
    //   has a color property of "white"
    //   has an age property of 6
    
    const dog = {
      name: "Fido",
      color: "white",
      age: 6,
      speak() {
        return "woof";
      }
    }
  
    return dog;
}

function getListOfNames(list) {
    // list is an array of objects that looks like this
    // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
    // return a list of all the workers' names
    
    let names = list.map(a => a.name);
    
    return names;
}

function getAverageAge(list) {
    // using the same list as above, get the average age of all the workers'
    
    // pulls out ages out of array
    let sAges = list.map(a => a.age);
    // converts array of strigs to an array of numbers
    let iAges = sAges.map(Number);
    // sums up all the numbers in array and devides the sum by the length of the array
    const agesAvg = iAges => iAges.reduce((a,b) => a + b, 0) / iAges.length;
  
    return agesAvg;
}