/**
 * 
 * 
Part 1: Humble Beginnings
Let’s model a simple adventurer with basic properties such as health and an inventory. 
We will call the adventurer “Robin.”
const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"]
}

From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].
As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
Nested arrays are useful, but so are nested objects. Let’s give Robin a companion to travel with – a furry friend they call “Leo.”
const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: {
    name: "Leo",
    type: "Cat"
}
}

This is an extremely common data pattern in programming. Nested arrays and objects allow programmers to store data in organized ways. Accessing the data should be both convenient and easily understood, particularly when using several objects of the same data structure, such as those derived from a Class (more on that later).
Next, give Robin’s feline friend a friend of his own:
Add a “companion” sub-object to “Leo” with the following properties:
The companion’s name is “Frank.”
The companion’s type is “Flea.”
The companion has its own belongings, which includes a small hat and sunglasses.
Now we have created an array within an object within an object within an object, but that is not all we can do! Objects can also have their own functions, called methods, which define specific actions that object can take.
Give Robin the following method:
const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: ...
roll (mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`)
}
}

Now we have a method for “dice rolls,” a common way to handle outcomes in adventuring games. Test this method by calling adventurer.roll() a few times.
What if we had many adventurers? As you can imagine, creating several of these objects manually would be time consuming, inefficient, and prone to errors. 
Next, we will level up our approach using Classes.
 * 
 * 
 * ***/
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

adventurer.inventory.forEach((ele) => {
  console.log(ele);
});
