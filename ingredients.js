var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i= 0;
var ingredient = " ";
// // Write a while loop that prints out the contents of ingredients:
  while( ingredients[i]){
 ingredient += ingredients[i];
i++;

 }
 console.log(ingredient);
// // Write a for loop that prints out the contents of ingredients:
for (;i<ingredients.length;i++){
  ingredient +=ingredients[i];
}
console.log(ingredient);
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(var j= ingredients.length;j>=0;j--){
  ingredient +=ingredients[j];

}
console.log(ingredient);