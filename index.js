
function hasTargetSum(array, target) {
  let arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    let value1 = array[i];
    for (let j = i + 1; j < arrayLength; j++) {
      let value2 = array[j];
      if (value1 + value2 === target) {
        return true; // Return true if target sum is found
      }
    }
  }
  return false; // Return false if no two numbers add up to the target sum
}


/*function hasTargetSum(array, target) {
  // Write your algorithm here
  let arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
      let value1 = array[i];
      console.log(value1);
      for (let j = 1; j < arrayLength; j++ ){
        let value2 = array[j];
        console.log(value2);
        if ((value1 + value2) === target){ 
         
        } else if (j === arrayLength) {
          console.log(value2);
          
        };
      };  
  };
};
*/


/* 
  Write the Big O time complexity of your function here
    //   O(N^2)
*/

/* 
  Add your pseudocode here
 function (array){
 variable = 


 }
*/

/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  /*------------------------------------------------------------
  console.log("");

  console.log("Expecting: 1");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5, 6, 7]));

  console.log("");

  ------------------------------------------------------------*/

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
