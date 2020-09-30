/** Problem No 1 */
function feetToMile (feet) {
    return mile = parseFloat((0.000189394 * feet).toFixed(2));
}
console.log(feetToMile(10000))


/** Problem No 2 */
function woodCalculator(chair, table, bed) {
    if(chair < 0 || table <0 || bed <0) {
        return "Invalid input";
    } else {
        return totalWood = chair * 1 + table * 3 + bed * 5;
    }
}
console.log(woodCalculator(2,0,2));



/** Problem No 3 */
function brickCalculator(floor) {
    if(floor <= 10) {
        const height = floor * 15;
        return brick = height * 1000;
    } else if(floor > 10 && floor <=20) {
        const height = (10 * 15) + (floor - 10) * 12;
        return brick = height * 1000;
    } else if (floor > 20) {
        const height = (10 * 15) + (10 * 12) + (floor - 20) * 10;
        return brick = height * 1000;
    }
}
console.log(brickCalculator(118));



/** Problem No 4 */
function tinyFriend(arr) {

    let shortest = '';

       if(arr.length > 0){
         for(let i = 0; i < arr.length; i++){
           if(typeof arr[i] === 'string') {
               if(shortest.length == 0) {
                   shortest = arr[i]; continue;
               } 
               
               if(arr[i].length < shortest.length){
                   shortest = arr[i]; 
               }   
            }
          }
         }
          return shortest; 
       }

const friend = ["John", "Bob", "Maximilan", "Sara"];
console.log(tinyFriend(friend));
