//.map() method
let numbers = [21, 42, 68, 84, 1012];

// function to return the square of a number
function square(number) {
    return number * number;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers.map(square);
console.log('New Array of Squared Numbers: ' , square_numbers);

// Output: [ 441, 1764, 4624, 7056, 1024144 ]


//.reduce() method
let foods = [
    {name: 'steak', calories: 1520},
    {name: 'fruit', calories: 125},
    {name: 'salad', calories: 360},
    {name: 'chips', calories: 550},
    {name: 'ice cream', calories: 2201},
];

let total = foods.reduce(function(sum, item){
    return sum + item.calories;
}, 0)
//value of total will be 4756

console.log('Total Calories: ',  total)

// .filter()

let each = foods.filter(item => item.calories > 500);

console.log("Items with more Calories than 500: "  , each)

