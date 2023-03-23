/*
define classes
define variables

game....

start menu

Needed functions:

update inventory lists
display story message
change screen art
retreat?
start game
create random enemy
create random pet?
.......
play associated audio
additional inventory?
combat?
health bar?


story class/object
player class/object
enemy class/object


*/

const guys = ["man", "troll", "centaur"]
const pets = ["finch", "gerbil", "rabbit", "lizard", "kitten",
"sparrow", "parrot", "crow", "hamster", "chinchilla"]

const messageBox = document.querySelector(".storyMessage")
const messageText = document.querySelector(".storyMessage p")
const choiceDisplay = document.querySelector(".choicesDisplay")
const optionList = document.querySelector(".choicesDisplay ol")
const artWindow = document.querySelector(".artWindow")
const nextBtn = document.querySelector(".next")
const resetBtn = document.querySelector(".reset")
const buttons = document.querySelector(".buttons")
const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
const btn4 = document.getElementById("button4")




class Story {
    constructor() {
        this.guy = guys[Math.floor(Math.random()*3)] // Fix this
        this.pet = pets[Math.floor(Math.random()*4) + 4]// Fix this
        this.target = this.guy
        
        this.locations = {
            intro : {
                scripts : ["You find yourself on a dark street on a cool summer evening, having finally found the wooden door that your bounty target resides behind.", 
                "'This is it,' you mutter to yourself, wondering why you signed up to hunt down some guy named Bob in this small mountain town, so far from home.", 
                "You take a swig of water from your canteen and observe your surroundings.",
                "With the door in front of you, the street stretches out in opposite directions to both sides, lined with tudor-style homes that had no room to breathe on either side.",
                "To your left, the street barely continues for a dozen yards before ending abruptly at the interior of the city wall.",
                "A single, lonely door and a dimly lit window in the neighboring home are all that there is to see here.",
                "To your right, the moonlit street leads to the town center.",
                "With no streetlamps, the road fades into the dim light several hundred yards away, just beyond an ominous-looking alleyway adjacent to a small merchant's shop.",
                "You quickly check your belt, making sure that your sword is at the ready and your cord for binding the target's hands is easily accessible.",
                "You've captured enough bounty targets to know that you can never be too prepared."],
                prompts : ["...", "You stand in front of the wooden door, the address that you were told to find Bob.", 
                "What do you do next?"],
                choices : ["Knock on the wooden door.",
                "Walk left, toward the neighbor's house and the dead end.",
                "Walk right, toward the alley and merchant."],
                nexts : ["this.locations.atWoodenDoor"]
            },
            atWoodenDoor : {
                scripts : [
                    {all : ["You take a deep breath and knock on the door.",
                            `The door opens wide and you find yourself looking up at a ${this.guy} standing at least two heads taller than you, his silhouette obscuring the lamplight behind him.`,
                            'You confidently stare him in the eyes and declare, "I\'m looking for Bob. Is this your name?"',
                            "In the following seconds of awkward silence, you quickly take in what you see behind him.",
                            "The furniture is falling apart and everything is covered in filth.",
                            "A cage is perched precariously on top of a bench in the corner, the cage door askew.",
                            `The ${this.pet} inside, sensing the tension, stares back at you.`,
                            `The ${this.guy} clears his throat and slowly reaches toward the heavy wooden club resting on the table nearby.`]},
                    {guyTarget : [["...", "\"YOU SHOULDN'T HAVE COME HERE!!!\", he yells, grabbing the club and brandishing it menacingly.",
                    `You unsheath your sword and raise it to block as the ${this.guy} takes a massive swing at you.`,
                    "The club makes contact with your sword, but it hits with such force that your block gives way.",
                    "You stagger backward. Maybe this foe is more than your sword can handle alone.",
                    '"Let that be a lesson to you! Tell your boss that Bob sends his regards!" Bob yells as he gestures to himself.',
                    "Bob slams the door, leaving you feeling defeated out on the street.",
                    "Maybe the merchant has additional weaponry that could be of use?"],
                    ["You knock on the wooden door...again.",
                    "The door swings open and Bob, fuming, raises his club.",
                    '"I told you to leave!!! You won\'t be walking away this time!!!" he shouts.'],
                    ["He lunges forward and takes a mighty swing.", 
                    "You do your best to dodge the incoming club, but you just can't move fast enough...", 
                    "The club hits you in the head. Everything goes dark...",
                    "...", "YOU LOSE!!!", "Next time, do better."],
                    ["He takes a mighty swing, but his club glances off your shield as you thrust your sword forward, stopping just inches from his throat.",
                    "Shocked, Bob drops his club and raises his hands slowly, surrendering to his captor.",
                    "You bind his hands and pull him out into the street.",
                    "Your journey to return Bob to the client has only just begun...",
                    "YOU WON!!!", "Congratulations! But beware...this story may not play out how you think next time..."]]}
                ],
                petTarget : [["...",
                "He chuckles as he grabs his club from the table.",
                '"\'Bob\', you say? Go ahead and take him!"',
                `'"He\'s been nothing but trouble ever since I bought him,\" he says, using the club to gesture toward the ${this.pet} sitting innocently in the cage."'`,
                "You look at 'Bob'.", "Bob stares back.",
                `"A growl rises from deep within the ${this.pet}'s throat, and Bob starts slowly making his way out of the cage, eyes locked on you the entire time."`,
                `"Wait...${this.pet}s can growl?  Yes....yes they can."`,
                "Bob leaps from the cage and attacks you! You wave your sword back and forth, hoping to land a strike as Bob darts about, nipping at any part of you that gets close enough.",
                "You look for an escape. The dead-end street to your left offers no safety, so you take off running to the right, toward the merchant and alleyway.",
                `"You hear the savage ${this.pet} at your heels."`], 
                ["With your net at the ready, you knock on the door once more and step to the side, hiding out of view against the side of the house.",
                `"The door opens and the ${this.pet} flies out into the street, clearly still enraged from your previous encounter."`,
                "You leap forward and scoop up Bob with the net!",
                `"You wrap up the top of the net to make sure the squirming ${this.pet} won't be able to get out as the ${this.guy} watches from his doorway."`,
                "He gives you a nod of appreciation as you start off, beginning the long journey back home where your bounty awaits!",
                "...", "YOU WON!!!", "Congratulations! But beware...this story may not play out how you think it will next time..."], 
                ["You knock on the door once more, holding your sword in a defensive position, prepared for whatever Bob may do this time.",
                "The door swings open...as if by no one. The {guy} is nowhere to be seen.",
                "But wait...  There....", "There, on the floor... It's...",
                `"BOB", "Bob the ${this.pet} stares at you directly in the eyes..."`,
                "You feel an overwhelming sense of despair, losing your grip on the sword.",
                "You stand there, frozen in fear as your sword drops to the stone street, the clanging sound breaking the deadly silence.",
                "Everything goes dark...", "...", "YOU LOSE. You were devoured by Bob.",
                `"Who knew a ${this.pet} could have such a voracious appetite?"`]],
                neighborTarget : [["You take a deep breath and knock on the door.",
                `"The door opens wide and you find yourself looking up at a ${this.guy} standing at least two heads taller than you, his silhouette obscuring the lamplight behind him."`,
                "You confidently stare him in the eyes and declare,'I'm looking for Bob. Is this your name?",
                "In the following seconds of awkward silence, you quickly take in what you see behind him.",
                "The furniture is falling apart and everything is covered in filth.",
                "A cage is perched precariously on top of a bench in the corner, the cage door askew.",
                "The {pet} inside, sensing the tension, stares back at you.",
                "The {guy} clears his throat and slowly reaches toward the heavy wooden club resting on the table nearby.", "...",
                '"Bob is my neighbor. He doesn\'t live here," he says, placing the end of his club on the floor, then leaning on it like a cane.',
                '"He lives just next door. I think he\'s over there now."',
                "The {guy} also mentions that Bob rarely answers his door, but that sometimes he leaves the back door in the alley unlocked.",
                "You thank him for his help and he shuts the door as you step back out onto the street."], 
                [`"You knock on the wooden door, and seconds later you're greeted once more by the ${this.guy}."`,
                '"I\'m sorry. I don\'t know how else I can help," he says.',
                "You apologize for bothering him and he shuts the door."]],
                prompts : ["...", "You stand in front of the wooden door, the address that you were told to find Bob.", 
                "What do you do next?"],
                choices : ["Knock on the wooden door.",
                "Walk left, toward the neighbor's house and the dead end.",
                "Walk right, toward the alley and merchant."],
        },
        merchantStand : [["You approach the merchant's stand.", "A homely old man sits, asleep, behind the merchant stand.",
                        "Your presence startles him awake."],
                        ["Looking at his wares, you can't think of anything else that you would need right now.",
                        "It's time to capture Bob and earn your pay!"],
                        ["You purchase a lockpick from him.", "Conveniently, you already know how to use it."],
                        [`"You purchase an animal-trapper's net from him.", "NOW you're ready for that $@^% ${this.pet}!"`],
                        ["You buy a sturdy oak shield from him.", "This will surely help deflect Bob's swinging club!"]]
        
    }
}

                                    

         
    
    tellStory(storyArray){  // Previous, great code.  Do not delete.
        messageActive = true;
        messageBox.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
        this.updateMessageDiv(storyArray[0])
        if (storyArray.length === 0){  // If all array messages have been removed...
            messageActive = false;
            messageBox.style.visibility = "hidden";
            nextBtn.style.visibility = "hidden";
            if(!skipChoices){
                this.presentChoices()
            }
           
        }
        storyArray.shift()
    }
    updateMessageDiv(message){
        messageText.textContent = message;
    }
    
    presentChoices(){
        messageActive = true;
        console.log(storyArray)
        messageBox.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
        this.updateMessageDiv("What would you like to do?")   // Display the prompt for a decision in the message box.
        //messageActive = false;   // Hide the message box.
        //messageBox.style.visibility = "hidden";
        nextBtn.style.visibility = "hidden";
        for(let i = 0; i < choicesVar.length; i++){  //  for each item(option) in choicesVar
            let option = document.createElement("li");  //  Create an li element 
            option.textContent = choicesVar[i];  //  Then give that li element the corresponding text content.
            optionList.append(option);  //   Add the li element to the ol in the choicesDisplay div.
        }
        decisionTime = true;  // After adding the li's, Choice button event listeners are now active.
        }
        
    
  
    updateArt(image){
        console.log(artWindow)
        artWindow.style.backgroundImage = image;

    }
    startGame(){
        console.log("Starting the game.")
        console.log(this.guy)
        messageBox.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
        this.updateStoryArray(gameName.locations.intro.scripts)  //  Prepopulate the storyArray with the introduction script.
        this.tellStory(storyArray)  // Call the function to start telling the story (intro script).

    }
    reset(){
        console.log("resetting the game")
        promptVar = [];
        storyArray = [];
        while(optionList.firstChild){
            optionList.firstChild.remove()
        }
        messageText.textContent = [" "];
        messageActive = false;
        optionList.textContent = [" "];  
        player.inventory = ["Clothes", "Sword", "Binding cord"]
        player.notes = []
        decisionTime = false;
        skipChoices = false;
        gameCount++
        gameName = "Game" + gameCount
        console.log(gameName)
        gameName = new Story()
        console.log(gameName)
        return this.startGame()

    }
    updateInventory(){

    }
    updateStoryArray(original){
        original.forEach(sentence => {
            storyArray.push(sentence);
        });
    }
}



class Guy {
    constructor(){
        this.type = ""
    }
}

class Player {
    constructor(){
        this.name = ""
        this.inventory = ["Clothes", "Sword", "Bindings"]
        this.notes = []
    }
    knockOnWoodenDoor(){
        console.log(player.inventory)
        if(this.notes.includes("Visited Bob's supposed address.")){
            console.log("B")
            if(this.notes.includes("Bob is a " + gameName.guy + ".")){
                console.log("B1")
                gameName.updateStoryArray(gameName.locations.atWoodenDoor.scripts[1].guyTarget[1])
                if(this.inventory.includes("Shield")){
                    console.log("B1a")
                    gameName.locations.atWoodenDoor.scripts[1].guyTarget[3].forEach(sentence => {
                        storyArray.push(sentence);
                    });
                    skipChoices = true;
                    gameName.tellStory(storyArray)
                }else{
                    console.log("B1b")
                    gameName.locations.atWoodenDoor.scripts[1].guyTarget[2].forEach(sentence => {
                        storyArray.push(sentence);
                    });
                    skipChoices = true;
                    gameName.tellStory(storyArray)
                }
            }else if(this.notes.includes("Bob is a " + gameName.pet + ".")){
                console.log("B2")
                if(this.inventory.includes("Net")){
                    console.log("B2a")
                    gameName.tellStory(gameName.locations.atWoodenDoor.petTarget[1])
                }else{
                    console.log("B2b")
                    gameName.tellStory(gameName.locations.atWoodenDoor.petTarget[2])
                }
                    
            }else{
                console.log("B3")
                gameName.tellStory(gameName.locations.atWoodenDoor.neighborTarget[0])
            }
        }else{
            gameName.updateStoryArray(gameName.locations.atWoodenDoor.scripts[0].all)
            console.log("A")
            if(gameName.target === gameName.guy){
                console.log("A1")
                gameName.locations.atWoodenDoor.scripts[1].guyTarget[0].forEach(sentence => {
                    storyArray.push(sentence);
                });
                this.notes.push("Visited Bob's supposed address.")
                this.notes.push("Bob is a " + gameName.guy + ".")
                this.notes.push("Could use something to block Bob's club.")
                gameName.tellStory(storyArray)
            }else if(gameName.target === gameName.pet){
                console.log("A2")
                gameName.locations.atWoodenDoor.petTarget[0].forEach(sentence => {
                    storyArray.push(sentence);
                });
                gameName.tellStory(storyArray)
            }else{
                console.log("A3")
                gameName.locations.atWoodenDoor.neighborTarget[0].forEach(sentence => {
                    storyArray.push(sentence);
                });
                gameName.tellStory(storyArray)
            }
        }
    }
    visitMerchantStand(){
        gameName.updateStoryArray(gameName.locations.merchantStand[0])
        console.log(storyArray)
        console.log("M")
        if(this.notes.includes("Could use something to block Bob's club.")){
            gameName.locations.merchantStand[4].forEach(sentence => {
                storyArray.push(sentence);
            });
            this.inventory.push("Shield")
            return gameName.tellStory(storyArray)
        }else if(this.notes.includes("Could use something to trap Bob with...")){
            gameName.locations.merchantStand[3].forEach(sentence => {
                storyArray.push(sentence);
        });
            this.inventory.push("Net")
            return gameName.tellStory(storyArray)
        }else if(this.notes.includes("I need something to help me open that door...")){
            gameName.locations.merchantStand[2].forEach(sentence => {
                storyArray.push(sentence);
        });
            this.inventory.push("Lockpick")
            return gameName.tellStory(storyArray)

        }else{
            gameName.locations.merchantStand[1].forEach(sentence => {
                storyArray.push(sentence);
        });
            console.log(storyArray)
            console.log(gameName.locations.merchantStand[0])
            console.log(gameName.locations.intro.scripts)
            return gameName.tellStory(storyArray)
        }
    }
}

const notes = [];
let decisionTime = false;
let storyArray = [];
let gameName = "game"
let messageActive = false;
let gameCount = 0;
let promptVar = []
let choicesVar = ["Pay a visit to the house where Bob supposedly resides.", "Visit the neighbor's house (front door).", "Check out the merchant's shop.", "Investigate the dark alleyway."]
let place = "woodenDoor"
let skipChoices = false;


gameName = new Story()
const player = new Player()

//nextScene = gameName.locations.

gameName.startGame()

resetBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    gameName.reset()
})

nextBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    return gameName.tellStory(storyArray)
})

buttons.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    console.log(storyArray)
    optionList.textContent = "";
    if(evnt.target.className === "button" && decisionTime === true){
        if(evnt.target.id === "button1"){
            console.log("Clicked btn1")
            return player.knockOnWoodenDoor()
        }else if(evnt.target.id === "button2"){
            console.log("clicked btn2")
        }else if(evnt.target.id === "button3"){
            console.log("clicked btn3")
            return player.visitMerchantStand()
        }else{
            console.log("clicked btn4")
         } 
        console.log("clicked btn")       
        decisionTime = false;
        //storyArray = gameName.choices
        //console.log(gameName.locations.atWoodenDoor[0].scripts[0].all) // This syntax works. It accesses the all array from atWoodenDoor.scripts.
        //return player.knockOnWoodenDoor()
        
    }
})




/*
click on choice
prevent default
call correllated function for specific choice
clear choicedisplay

element has associated player function
click on element
element calls player function
player function clears choicedisplay
player function updates promptVar
player function updates choicesVar
player function updates nextVar
player function calls game tellstory

    
}

/*
// =============================================
// =============================================
// =============================================

       Python Code


def intro(guy, pet, target):
    print yur messages
    at_door(guy, pet, target)


def after_game():
    attempt_count = 4
    inventory.clear()  # reset inventory between games
    play_again = valid_input(attempt_count, "Would you like to play again? "
                             "Please enter 'Yes' or 'No'.\n\n",
                             ['yes', 'no']).lower()
    if play_again == "yes":
        print_pause("\nExcellent! Here we go again!\n\n", 2)
        return play_game()
    elif play_again == "no":
        print_pause("\nThank you for playing! Come back "
                    "when you're ready to see what other "
                    "things can happen here!\n", 2)
        exit(0)


def at_door(guy, pet, target):  # Player choices from in front of door.
    attempt_count = 0  # how many times has this loop already been run.
    print messages
    door_choice = valid_input(attempt_count, "Please enter the "
                              "number of your selection.\n\n1. Knock "
                              "on the wooden door.\n2. Walk left, "
                              "toward the neighbor's house and the "
                              "dead end.\n3. Walk right, toward "
                              "the alley and merchant.\n\n",
                              ['1', '2', '3'])
*/

/*


def toward_dead_end(guy, pet, target):
    attempt_count = 0
    print_pause("You walk toward the end of the street, "
                "turning your attention toward the only "
                "thing of any interest at all, the "
                "front door to the neighbor's home.\n", 4)
    while True:
        neighbor_choice = valid_input(attempt_count, "What would you like "
                                      "to do next? Please enter the number "
                                      "of your selection.\n\n1. Knock on "
                                      "the door.\n2. Open the door.\n3. "
                                      "Turn around and go back.\n\n",
                                      ['1', '2', '3'])
        if neighbor_choice == "1":
            print_pause("\nYou knock, but nobody answers.\n", 2)
        elif neighbor_choice == "2":
            print_pause("\nYou try opening the door, but it's locked.\n", 2)
            if target == "neighbor":
                if "neighbor_is_bob" in inventory:
                    if "lockpick" in inventory:
                        print_pause("You pull out your new lockpick and "
                                    "skillfully unlock the door.", 3)
                        print_pause("You quickly unsheath your sword and "
                                    "open the door.", 2)
                        print_pause("A small man, the top of his head "
                                    "barely reaching as high as your "
                                    "shoulder, stands up from his chair "
                                    "in the corner of the room.\n", 3)
                        print_pause("You can hear what sounds like "
                                    "vicious dogs behind a door to "
                                    "a back room.", 3)
                        print_pause('"Are you Bob?" you ask.\n', 2)
                        print_pause("His face is pale from shock. He "
                                    "clearly wasn't expecting you.\n", 2)
                        print_pause('"Ye...yes, sir." he stammers, '
                                    'trailing off as he faints. His knees '
                                    'buckle and he falls to the floor.', 3)
                        print_pause("You sigh in disgust as you pick the "
                                    "small man up and drape him over "
                                    "your shoulders.", 3)
                        print_pause("It's going to be a long walk home, "
                                    "but the bounty will be worth "
                                    "it!\n\n", 3)
                        print_pause("YOU WON!!!\n", 2)
                        print_pause("Congratulations! But beware... "
                                    "this story may not play out how "
                                    "you think next time...\n", 3)
                        after_game()
                    else:
                        print_pause("If only you had the tools to "
                                    "pick the lock...\n", 2)
                        if "need_lockpick" not in inventory:
                            inventory.append("need_lockpick")
                else:
                    print_pause("\nNo need to cause trouble with "
                                "the neighbor, is there? We're here "
                                "for Bob, after all.", 3)
                    print_pause("It's probably best to leave the "
                                "neighbor alone.\n", 3)
            else:
                print_pause("\nNo need to cause trouble with the "
                            "neighbor, is there? We're here for "
                            "Bob, after all.", 3)
                print_pause("It's probably best to leave the "
                            "neighbor alone.\n", 3)
        else:
            print_pause("\nYou decide your time is better spent "
                        "elsewhere. You head back down the "
                        "street.\n", 4)
            return at_door(guy, pet, target)


        print_pause("\nYou step into the alleyway, your hand "
                    "resting on the hilt of your sword.", 3)
        return alleyway(guy, pet, target)
    




def outside_alleyway(guy, pet, target):
    attempt_count = 0
    leaving_merchant = valid_input(attempt_count, "What will "
                                   "you do now? Please enter "
                                   "the number of your "
                                   "selection.\n\n1. Return "
                                   "to the wooden door\n2. "
                                   "Enter the dark "
                                   "alleyway.\n3. Walk to the "
                                   "neighbor's house at the "
                                   "end of the street.\n4. "
                                   "Visit the merchant's "
                                   "shop.\n\n",
                                   ['1', '2', '3', '4'])
    if leaving_merchant == "1":
        print_pause("\nYou head back to the wooden door.", 2)
        return at_door(guy, pet, target)
    elif leaving_merchant == "2":
        print_pause("\nYou cautiously enter the alleyway.", 2)
        return alleyway(guy, pet, target)
    elif leaving_merchant == "3":
        return toward_dead_end(guy, pet, target)
    else:
        print_pause("\nYou approach the merchant's stand.", 2)
        return merchant_stand(guy, pet, target)


def back_door(guy, pet, target):
    attempt_count = 0
    print_pause("\nYou slowly approach the door.", 3)
    print_pause("As you're just about to reach out for the handle, "
                "the door shakes and a you hear a barrage of barking, "
                "growling, and snapping from the other side of the door.", 6)
    print_pause("Either it's a massive, vicious dog...or it's a massive, "
                "equally vicious wolf.", 4)
    while True:
        back_door_choice = valid_input(attempt_count, "\nWhat would you "
                                       "like to do? Please enter the number "
                                       "of your selection.\n\n1. Knock on "
                                       "the door.\n2. Open the door.\n3. "
                                       "Exit the alleyway.\n\n",
                                       ['1', '2', '3'])
        if back_door_choice == "1":
            print_pause("\nYou knock on the door. Nobody answers...", 2)
            print_pause("but let's be honest, they probably wouldn't "
                        "hear you over that canine's racket.", 2)
        elif back_door_choice == "3":
            print_pause("\nYou use your better judgement and leave "
                        "the alley.\n", 2)
            return outside_alleyway(guy, pet, target)
        else:
            print_pause("\nSuffering from a severe lack of common sense, "
                        "you reach out and try to open the door.", 3)
            print_pause("The door is unlocked, lucky you! The door "
                        "bursts open and within seconds all you see "
                        "are teeth.", 3)
            print_pause("...", 3)
            print_pause("I guess that WAS a wolf...", 3)
            print_pause("...\n", 3)
            print_pause("YOU LOSE!!!  You were eaten by a wolf.\n", 2)
            return after_game()


def alleyway(guy, pet, target):
    attempt_count = 0
    print_pause("Standing in the alleyway, all you can make out in the "
                "dark is a back door to the neighbor's house and "
                "various piles of trash and rubble against the alley "
                "walls.\n", 6)
    alley_choice = valid_input(attempt_count, "What do you do next? "
                               "Please enter the number of your "
                               "selection.\n\n1. Investigate the "
                               "back door to the neighbor's home.\n2. "
                               "Exit the alleyway.\n3. Return to the "
                               "wooden door.\n4. Walk to the neighbor's "
                               "front door.\n\n", ['1', '2', '3', '4'])
    if alley_choice == "1":
        print_pause("\nYou walk toward the back door of the "
                    "neighbor's home.\n", 2)
        return back_door(guy, pet, target)
    elif alley_choice == "2":
        print_pause("\nYou leave the alley and return to the moonlit "
                    "street.\n", 2)
        return outside_alleyway(guy, pet, target)
    elif alley_choice == "3":
        print_pause("\nYou leave the alley and return to the wooden "
                    "door.\n", 2)
        return at_door(guy, pet, target)
    else:
        return toward_dead_end(guy, pet, target)


def run_from_pet(guy, pet, target):
    attempt_count = 0
    print_pause("You bolt down the street, nearly tripping "
                "over a loose cobblestone as you approach the "
                "alley entrance.\n", 4)
    fleeing_choice = valid_input(attempt_count, "Where do you "
                                 "run? Please enter the number "
                                 "of your selection.\n\n1. "
                                 "Duck into the dark alleyway "
                                 "to hide.\n2. That alley "
                                 "looks sketchy, keep running "
                                 "down the street.\n\n",
                                 ['1', '2'])
    if fleeing_choice == "1":
        print_pause("\nSprinting full speed, you turn the corner "
                    "into the dark alleyway.", 3)
        print_pause("You dive behind a large pile of broken "
                    "wine kegs and crates, hoping that your "
                    "pursuer would continue onward down the "
                    "alleyway.", 5)
        print_pause(f"The {pet} darts past you, slowing a bit "
                    "as it realizes that it has lost you.", 3)
        print_pause("As Bob frantically searches for you, rage "
                    "gleaming in his eyes, you quietly push "
                    "yourself farther into the mountain of "
                    "garbage and make yourself as small as "
                    "possible.", 5)
        print_pause("Bob takes one final look around the alley, "
                    "briefly assessing the dark mass that you "
                    "are hiding in, then rushes back to his "
                    "home.", 4)
        print_pause("It's clear to you that you're in need "
                    "of additional tools, perhaps a net?\n", 3)
        inventory.append("need_net")
        return alleyway(guy, pet, target)
    else:
        print_pause("\nYou sprint down the street, past "
                    "the foreboding alleyway.", 3)
        print_pause("You can hear the monster behind you, "
                    "closing in on you with each passing "
                    "second.", 4)
        print_pause("You look over your shoulder just in time "
                    f"to see Bob, the ferocious {pet}, reach "
                    "out and grab you.", 3)
        print_pause("...", 4)
        print_pause(f"Who knew a {pet} could have such a "
                    "voracious appetite?\n", 3)
        print_pause("YOU LOSE. You were devoured by Bob.\n", 3)
        return after_game()


play_game()

*/