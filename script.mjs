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
console.log(`\n--------------------------FIRST PART--------------------------`);
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

adventurer.inventory.forEach((ele) => {
  console.log(ele);
});
adventurer.roll();
adventurer.roll();
adventurer.roll();

/***
 * 
Part 2: Class Fantasy
Let’s take a moment to analyze the data above. What are the common features of each object?
When creating classes, begin by searching for the simplest form your data takes. Remember, you can add specificity later by extending the classes.
Start with a Character class, which will define generic character entities. Robin and their companions all have a name, so the Character class should definitely include name as one of its properties. At this stage, we will also make the decision that every character should have health (which we will standardize to a maximum of 100, and an inventory (even if the inventory is empty).
Here is what the basic Character class looks like so far, including a constructor function that allows us to create new characters with whatever name we would like:
class Character {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
}

Every character should also be able to make rolls. Add the roll method to the Character class.
Now, we can re-create Robin using the Character class!
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

Not only does this allow us to create standardized objects for each character, it also ensures that they all have common properties and methods such as roll(). Even the companions can roll now; give it a try! This saves us a significant amount of typing since we do not need to manually add this method to each nested object.
While progress has been made, this is still not the most efficient way to create these objects. In order to effectively create companions, we need to extend the Character class for added specificity.
 * 
 * 
 * 
 * * */
console.log(
  `\n--------------------------SECOND PART--------------------------`
);

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();
robin.roll();
robin.roll();

console.log(robin);
