let hotDate;
let bg;
let title;
let tbl;
let chair;
let glasses;
let pName;
let correct = false;
let affection = 0;
let dial;
let optionA;
let optionB;
let choBo;
let romPartner;
let recliner;
let foodHolder;
let cup;
let talkBox;

gameStart();

// Asks the player for their name
function gameStart() {
  // Repeats until the player confirms their name
  while (correct === false) {
    // Asks the player to input their name
    pName = prompt("Please enter your name.");
    // Asks the player for confirmation on name choice
    correct = confirm(`Is this correct?: \n${pName}`);
  }
}

let introDia = [
  `Hey, you're ${pName}, right?`,
  `Huh… I gotta say, you're a lot more… dehydrated… than you looked in your pictures.`,
  `Not that it matters or anything, I'm sure that's common for you humans.`,
  `I'm Philix, by the way. Though, I guess you already knew that, right? 
  It's nice to finally meet you in person and not planets and planets away, haha!`,
  `So, what do you wanna get for appetizers?`,
];

let marriageDia = [
  `Wow, I think you're my dream lover… You're so perfect in every way…`,
  `I- Let's get married. Right here, right now.`,
  `${pName}... I love you.`,
  `I have never met anyone in my life who has made me feel the way you do, and I really, truly think that you are 
  the one.`,
  `Now, let's ride off into the sunset and have a million children together.`,
];

let lovinDia = [
  `You know, I really enjoyed the night with you, ${pName}.`,
  `I feel really comfortable with you, and I can see us going further in this little relationship of ours.`,
  `Do you… wanna come over to my place? Maybe we could spend a little more time together…`,
];

let rejectDia = [
  `Listen, I'm sure you're a lovely, lovely, very dehydrated person.`,
  `You're just… not the one for me.`,
  `I appreciate you taking me out tonight, but I think this is the farthest I'm willing to take us.`,
  `Goodbye, ${pName}.`,
];

let deathDia = [
  `You are the most vile, disgusting, horrendous, dehydrated organism to ever exist not only on this planet or your own, but to ever be spat out by the cosmos.`,
  `You shame not only your birth giver, but your entire bloodline and entire race.`,
  `I have never met anyone in my life who has made me feel the way you do, and that's not a compliment.`,
  `In fact, you don't even deserve to live on any planet!`,
  `It's time to die, ${pName}.`,
];

let appDia = ["So, what do you wanna get for appetizers?"];

class Alien {
  x = width / 2;
  y = 300;
  constructor() {
    this.hotDate = new Sprite(this.x, this.y, "static");
    // Creates the sprite and designates where it goes
    this.hotDate.img = "Lover Sprites/hottie neutral.png";
    this.hotDate.layer = 3;
  }
  // Different expressions of alien
  neutral() {
    this.hotDate.img = "Lover Sprites/hottie neutral.png";
  }
  happy() {
    this.hotDate.img = "Lover Sprites/hottie happy.png";
  }
  disgust() {
    this.hotDate.img = "Lover Sprites/hottie disgust.png";
  }
  flirty() {
    this.hotDate.img = "Lover Sprites/hottie flirty.png";
  }
  angry() {
    this.hotDate.img = "Lover Sprites/hottie angry.png";
  }
  shocked() {
    this.hotDate.img = "Lover Sprites/hottie shocked.png";
  }
}

function dialogueBox(x, y, message) {
  const diaBox = new Sprite(x, y, "static");
  diaBox.layer = 5;
  diaBox.img = "Boxes/dialogue box.png";
  diaBox.w = diaBox.img.width;
  diaBox.index = 0;
  diaBox.draw = function () {
    image(diaBox.img, diaBox.x, diaBox.y);
    textSize(30);
    textAlign(CENTER);
    fill(158, 0, 142);
    text(message[this.index], diaBox.x, diaBox.y);
  };
  return diaBox;
}

function choiceBox(customY, customC, opinion) {
  const choiceSprite = new Sprite(340, customY, "static");
  choiceSprite.choices = customC;
  choiceSprite.img = choBo;
  choiceSprite.draw = function () {
    // Create the sprite
    image(choiceSprite.img, choiceSprite.x, 0);
    // Text properties
    textSize(40);
    textAlign(CENTER);
    fill(158, 0, 142);
    text(choiceSprite.choices, choiceSprite.x, 0);
    choiceSprite.layer = 6;
  };
  // When the player presses one of the choice boxes, the alien will respond
  choiceSprite.update = function () {
    if (choiceSprite.mouse.presses()) {
      opinion();
    }
  };
  return choiceSprite;
}

class Chair {
  x = width / 2;
  y = 480;
  constructor() {
    this.chair = new Sprite(this.x, this.y, "static");
    this.chair.img = "Background and objects/chair.png";
    this.chair.layer = 1;
  }
}

class Tbl {
  x = width / 2;
  y = 665;
  constructor() {
    this.tbl = new Sprite(this.x, this.y, "static");
    this.tbl.layer = 2;
    this.tbl.img = "Background and objects/table.png";
  }
}

class Glasses {
  x = 600;
  y = 620;
  constructor() {
    this.glasses = new Sprite(this.x, this.y, "static");
    this.glasses.img = "Background and objects/glasses.png";
    this.glasses.layer = 4;
  }
}

// Makes sure the background is loaded in time
function preload() {
  title = loadImage("ph title.png");
  bg = loadImage("Background and objects/background.png");
  choBo = loadImage("Boxes/choice box.png");
  romPartner = loadImage("Lover Sprites/hottie neutral.png");
  recliner = loadImage("Background and objects/chair.png");
  foodHolder = loadImage("Background and objects/table.png");
  cup = loadImage("Background and objects/glasses.png");
  talkBox = loadImage("Boxes/dialogue box.png");
}

function setup() {
  dateStart();
  createCanvas(1366, 784);
  background(bg);
  // Setting up the sprites in their set locations
  lover = new Alien();
  seat = new Chair();
  surface = new Tbl();
  glass = new Glasses();
}

// Starts the date with alien
function dateStart() {
  // Create a dialogue box
  dial = dialogueBox(340, 280, introDia);
  // When the dialogue box is clicked, it moves on the to next dialogue
  // When the last bit of dialogue is clicked, it moves on to the next function
}

function appetizers() {
  // Good choice
  optionA = choiceBox(150, "Yum'merz", function () {
    console.log("W");
    affection++;
    console.log(affection);
  });
  // Bad choice
  optionB = choiceBox(350, "Not'Chos", function () {
    console.log("L");
    affection--;
    console.log(affection);
  });
}

function whyDate() {
  dialogueBox(
    340,
    280,
    "I gotta ask... what made you expand out to the cosmos for dating?"
  );
  // optionA = new ChoiceBox(150, "Aliens are hot");
  // optionA.show();
  affection++;
  lover.flirty();
  message = "Well aren't you adorable?";
  // If the player picks the wrong option
  // optionB = new ChoiceBox(350, "Nobody on Earth wanted me");
  // optionB.show();
  affection--;
  lover.disgust();
  message = "That's kind of depressing...";
}

function mainCourse() {
  // Ask the player which meal they want
  dialogueBox(340, 280, "What're you getting for your main course?");
  // Good choice
  optionA = choiceBox(150, "Elusive Steak", function () {
    console.log("W");
    affection++;
    console.log(affection);
    lover.happy();
    message =
      "Whoa, that looks delicious! Mind if I take a bite? Or two bites? Or three?";
  });
  // Bad choice
  optionB = choiceBox(350, "Vegan Meat Lover's Meatball Supreme", function () {
    console.log("L");
    affection--;
    console.log(affection);
    lover.disgust();
    message = "Oh... that looks... interesting...";
  });
}

function hobbies() {
  // optionA = new ChoiceBox(150, "Gaming");
  affection--;
  message = "Oh. That's... cool... I guess...";
  // If the player picks the wrong option
  // optionB = new ChoiceBox(350, "Killing people with rocks");
  affection++;
  message = "Damn... you must be pretty strong, huh?";
}

function dessert() {
  // Ask the player which dessert they want
  dialogueBox(340, 280, "Dessert time! What do you think we should get?");
  // Good choice
  // optionA = new ChoiceBox(100, "Scorching Lava Cake");
  // optionA.show();
  // Bad choice
  // optionB = new ChoiceBox(100, "Astronaut Ice Cream");
  // optionB.show();
  if (mouse.presses()) {
    // If the player picks the correct option
    affection++;
    lover.happy();
    dialogueBox(x, y, "It's like you read my mind! Can humans read minds?");
  } else if (mouse.presses()) {
    // If the player picks the wrong option
    affection--;
    lover.disgust();
    dialogueBox(
      x,
      y,
      "You can have it, I'm actually really full. And allergic. And it has gluten and I can't have that either."
    );
  }
}

function theBill() {
  dialogueBox(
    340,
    280,
    "WHOA!!! THIS BILL IS OUTRAGEOUS!!! Ugh, don't worry, I'll pay for it."
  );
  optionB = choiceBox(150, "Let them pay for it");
  affection--;
  optionA = choiceBox(350, "Give them counterfeit money");
  affection++;
}

function goodEnd() {
  lover.happy();
  dialogueBox(340, 280, marriageDia);
}

function badEnd() {
  lover.angry();
  dialogueBox(340, 280, deathDia);
}

function keyPressed() {
  if (key == " ") {
    dial.index++;
    console.log(dial.index);
    if (dial.index === 5) {
      appetizers();
    }
  }
}

function draw() {
  background(bg);
}
