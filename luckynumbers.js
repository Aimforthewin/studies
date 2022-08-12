var cat = {};
cat[legs] = 3;
cat[name] = "Harmony";
cat[color] = "Turtle";
cat;
var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Turtle";
cat;
var anna = { name: "Ann", age: 10, luckyNumbers: [13, 19, 21] };
var dave = { 
    name: "David",
    age: 13,
    luckyNumbers: [1, 5, 11]
};
var kate = {
    name: "Cathy",
    age: 17,
    luckyNumbers: [7, 12, 18]
};
var friends = [anna, dave, kate];
friends[1];
friends[1].luckyNumbers
friends[2].luckyNumbers[0];

var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3], "random animal": "Банановая акула"
};
myCrazyObject["some array"][2].number
