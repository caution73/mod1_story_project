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

const largeMessageBox = document.querySelector(".importantDecision")
const largeMessageText = document.querySelector(".importantDecision p")
const messageBox = document.querySelector(".storyMessage")
const messageText = document.querySelector(".storyMessage p")
const choiceDisplay = document.querySelector(".choicesDisplay")
const optionList = document.querySelector(".choicesDisplay ol")
const artWindow = document.querySelector(".artWindow")
const impNext = document.querySelector(".impNext")
const nextBtn = document.querySelector(".next")
const resetBtn = document.querySelector(".reset")
const buttons = document.querySelector(".buttons")
const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
const btn4 = document.getElementById("button4")
const inventory = document.getElementById("inventoryList")
const notesUl = document.querySelector(".notesUl")




class Story {
    constructor() {
        this.guy = guys[Math.floor(Math.random()*3)] // Fix this
        this.pet = pets[Math.floor(Math.random()*10)]// Fix this
        this.targets = [this.pet, this.guy, "neighbor"]
        this.target = this.targets[Math.floor(Math.random()*3)]
        
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
                '" \'Bob\', you say? Go ahead and take him!"',
                `"He\'s been nothing but trouble ever since I bought him,\" he says, using the club to gesture toward the ${this.pet} sitting innocently in the cage.`,
                "You look at 'Bob'.", "Bob stares back.",
                `A growl rises from deep within the ${this.pet}'s throat, and Bob starts slowly making his way out of the cage, eyes locked on you the entire time.`,
                `Wait...${this.pet}s can growl?`, "Yes....yes they can.",
                "Bob leaps from the cage and attacks you! You wave your sword back and forth, hoping to land a strike as Bob darts about, nipping at any part of you that gets close enough.",
                "You look for an escape. The dead-end street to your left offers no safety, so you take off running to the right, toward the merchant and alleyway.",
                `You hear the savage ${this.pet} at your heels.`, "You bolt down the street, nearly tripping over a loose cobblestone as you approach the alley entrance."], 
                ["With your net at the ready, you knock on the door once more and step to the side, hiding out of view against the side of the house.",
                `The door opens and the ${this.pet} flies out into the street, clearly still enraged from your previous encounter.`,
                "You leap forward and scoop up Bob with the net!",
                `You wrap up the top of the net to make sure the squirming ${this.pet} won't be able to get out as the ${this.guy} watches from his doorway.`,
                "He gives you a nod of appreciation as you start off, beginning the long journey back home where your bounty awaits!",
                "...", "YOU WON!!!", "Congratulations! But beware...this story may not play out how you think it will next time..."], 
                ["You knock on the door once more, holding your sword in a defensive position, prepared for whatever Bob may do this time.",
                `The door swings open...as if by no one. The ${this.guy} is nowhere to be seen.`,
                "But wait...  There....", "There, on the floor... It's...",
                "BOB", `Bob the ${this.pet} stares at you directly in the eyes...`,
                "You feel an overwhelming sense of despair, losing your grip on the sword.",
                "You stand there, frozen in fear as your sword drops to the stone street, the clanging sound breaking the deadly silence.",
                "Everything goes dark...", "...", "YOU LOSE. You were devoured by Bob.",
                `Who knew a ${this.pet} could have such a voracious appetite?`]],
                neighborTarget : [["...",
                '"Bob is my neighbor. He doesn\'t live here," he says, placing the end of his club on the floor, then leaning on it like a cane.',
                '"He lives just next door. I think he\'s over there now."',
                `The ${this.guy} also mentions that Bob rarely answers his door, but that sometimes he leaves the back door in the alley unlocked.`,
                "You thank him for his help and he shuts the door as you step back out onto the street."], 
                [`You knock on the wooden door, and seconds later you're greeted once more by the ${this.guy}.`,
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
                        ["You purchase an animal-trapper's net from him.", `NOW you're ready for that $@^% ${this.pet}!`],
                        ["You buy a sturdy oak shield from him.", "This will surely help deflect Bob's swinging club!"]],
        neighborFront : [["You walk toward the end of the street, turning your attention toward the only thing of any interest at all, the front door to the neighbor's home.",
                        "You knock, but nobody answers.","You try opening the door, but it's locked."],
                        ["If only you had the tools to pick the lock..."],
                        ["No need to cause trouble with the neighbor, is there? We're here for Bob, after all.",
                        "It's probably best to leave the neighbor alone."],
                        ["You pull out your new lockpick and skillfully unlock the door.",
                        "You quickly unsheath your sword and open the door.",
                        "A small man, the top of his head barely reaching as high as your shoulder, stands up from his chair in the corner of the room.",
                        "You can hear what sounds like vicious dogs behind a door to a back room.",
                        '"Are you Bob?" you ask.',
                        "His face is pale from shock. He clearly wasn't expecting you.",
                        '"Ye...yes, sir." he stammers, trailing off as he faints.',
                        "His knees buckle and he falls to the floor.",
                        "You sigh in disgust as you pick the small man up and drape him over your shoulders.",
                        "It's going to be a long walk home, but the bounty will be worth it!",
                        "...", "YOU WON!!!",
                        "Congratulations! But beware... this story may not play out how you think next time..."]],
        alleyWay : [["You step into the alleyway, your hand resting on the hilt of your sword.",
                    "Standing in the alleyway, all you can make out in the dark is a back door to the neighbor's house and various piles of trash and rubble against the alley walls.",       
                    "You slowly approach the door.","As you're just about to reach out for the handle, the door shakes and a you hear a barrage of barking, growling, and snapping from the other side of the door.",
                    "Either it's a massive, vicious dog...or it's a massive, equally vicious wolf.", "...",
                    "What do you want to do? Try to open the door, or leave the alley?"],
                    ["You use your better judgement and leave the alley."],
                    ["Suffering from a severe lack of common sense, you reach out and try to open the door.",
                    "The door is unlocked, lucky you!",
                    "The door bursts open and within seconds all you see are teeth.",
                    "...", "I guess that WAS a wolf...",
                    "...", "YOU LOSE!!!  You were eaten by a wolf."]],
        fleeing : [["Sprinting full speed, you turn the corner into the dark alleyway.",
                    "You dive behind a large pile of broken wine kegs and crates, hoping that your pursuer would continue onward down the alleyway.",
                    `The ${this.pet} darts past you, slowing a bit as it realizes that it has lost you.`,
                    "As Bob frantically searches for you, rage gleaming in his eyes, you quietly push yourself farther into the mountain of garbage and make yourself as small as possible.",
                    "Bob takes one final look around the alley, briefly assessing the dark mass that you are hiding in, then rushes back to his home.",
                    "It's clear to you that you're in need of additional tools, perhaps a net?"],
                ["You sprint down the street, past the foreboding alleyway.",
                "You can hear the monster behind you, closing in on you with each passing second.",
                `You look over your shoulder just in time to see Bob, the ferocious ${this.pet}, reach out and grab you.`,
                "...", `Who knew a ${this.pet} could have such a voracious appetite?`,
                "YOU LOSE. You were devoured by Bob."]]
        
    }
}

         
    
    tellStory(storyArray){  // 
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
            }else{
                return // This is new, for alley. If doesn't work, remove.
            }
           
        }
        storyArray.shift()
    }
    tellGrippingStory(storyArray){
        messageBox.style.visibility = "hidden"
        nextBtn.style.visibility = "hidden"
        largeMessageBox.style.visibility = "visible";
        impNext.style.visibility = "visible";
        this.updateLargeMessageDiv(storyArray[0])
        if (storyArray.length === 0){  // If all array messages have been removed...
            largeMessageBox.style.visibility = "hidden";
            impNext.style.visibility = "hidden";
            if(!skipChoices){
                this.presentChoices()
            }else{
                return // This is new, for alley. If doesn't work, remove.
            }
           
        }
        storyArray.shift()
    }

    updateLargeMessageDiv(message){
        largeMessageText.textContent = message;
    }

    updateMessageDiv(message){
        messageText.textContent = message;
    }
    
    presentChoices(){
        if(gameOver){
            return gameName.afterGame()
        }
        messageActive = true;
        largeMessageBox.style.visibility = "hidden"
        impNext.style.visibility = "hidden"
        notesUl.textContent = "NOTES"
        inventory.textContent = "INVENTORY"
        player.notes.forEach(item => {  //  for each item in player.notes
            let itemLi = document.createElement("li");  //  Create an li element 
            itemLi.textContent = item;  //  Then give that li element the corresponding text content.
            notesUl.append(itemLi);  //   Add the li element to the ol in the choicesDisplay div.
        })
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
        console.log(gameName)
        player.inventory = ["Sword", "Clothes", "Binding cord"]
        //this.updateInventory()
        messageBox.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
        this.updateStoryArray(gameName.locations.intro.scripts)  //  Prepopulate the storyArray with the introduction script.
        this.tellStory(storyArray)  // Call the function to start telling the story (intro script).

    }
    reset(playAgain){
        console.log("resetting the game")
        console.log(playAgain)
        promptVar = [];
        storyArray = [];
        while(optionList.firstChild){
            optionList.firstChild.remove()
        }
        while(inventory.firstChild){
            inventory.firstChild.remove()
        }
        messageText.textContent = [" "];
        largeMessageBox.visibility = "hidden";
        largeMessageText.textContent = []
        impNext.visibility = "hidden"
        messageActive = false;
        optionList.textContent = [" "];  
        //player.inventory = [ "Sword", "Clothes", "Binding cord"]
        player.notes = []
        decisionTime = false;
        skipChoices = false;
        gameOver = false;
        gameCount++
        gameName = "Game" + gameCount
        console.log(gameName)
        gameName = new Story()
        console.log(gameName)
        if(playAgain){
            return this.startGame()
        }
    }
   
    updateInventory(){
        player.inventory.forEach(item => {  //  for each item(option) in choicesVar
            let inventoryLi = document.createElement("li");  //  Create an li element 
            inventoryLi.textContent = item;  //  Then give that li element the corresponding text content.
            inventory.append(inventoryLi);  //   Add the li element to the ol in the choicesDisplay div.
        })
    }
    
    updateStoryArray(original){
        original.forEach(sentence => {
            storyArray.push(sentence);
        });
    }
    afterGame(){
        playAgain = window.confirm("Click 'OK' to play again. Click 'Cancel' to quit.")
        console.log(playAgain)
        if(playAgain){
            this.reset(playAgain)
        }else{
            playAgain = true;
        }
        
    }
}
//////////////                ///////////////////////////////////////////////
//////////////  Player Class  ////////////////////////////////////////////////
//////////////                ///////////////////////////////////////////////
class Player {
    constructor(){
        this.name = ""
        this.inventory = ["Clothes", "Sword", "Binding cord"]
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
                    gameOver = true;
                    gameName.tellStory(storyArray)
                }else{
                    console.log("B1b")
                    gameName.locations.atWoodenDoor.scripts[1].guyTarget[2].forEach(sentence => {
                        storyArray.push(sentence);
                    });
                    gameOver = true;
                    gameName.tellStory(storyArray)
                }
            }else if(this.notes.includes("Bob is a " + gameName.pet + ".")){
                console.log("B2")
                if(this.inventory.includes("Net")){
                    console.log("B2a")
                    gameName.updateStoryArray(gameName.locations.atWoodenDoor.petTarget[1])
                    gameName.tellStory(storyArray)
                }else{
                    console.log("B2b")
                    gameName.updateStoryArray(gameName.locations.atWoodenDoor.petTarget[2])
                    gameOver = true;
                    gameName.tellStory(storyArray)
                }
                    
            }else{
                console.log("B3")
                if(this.notes.includes("Bob is the neighbor."))
                gameName.updateStoryArray(gameName.locations.atWoodenDoor.neighborTarget[1])
                return gameName.tellStory(storyArray)
            }
        }else{
            gameName.updateStoryArray(gameName.locations.atWoodenDoor.scripts[0].all)
            console.log("A")
            this.notes.push("Visited Bob's supposed address.")
            if(gameName.target === gameName.guy){
                console.log("A1")
                gameName.locations.atWoodenDoor.scripts[1].guyTarget[0].forEach(sentence => {
                    storyArray.push(sentence);
                });
                this.notes.push("Bob is a " + gameName.guy + ".")
                this.notes.push("Could use something to block Bob's club.")
                gameName.tellStory(storyArray)
            }else if(gameName.target === gameName.pet){
                console.log("A2")
                gameName.locations.atWoodenDoor.petTarget[0].forEach(sentence => {
                    storyArray.push(sentence);
                });
                this.notes.push("Bob is a " + gameName.pet + ".")
                this.notes.push("Could use something to trap Bob with...")
                place = "fleeing"
                return gameName.tellGrippingStory(storyArray)
            }else{
                console.log("A3")
                gameName.locations.atWoodenDoor.neighborTarget[0].forEach(sentence => {
                    storyArray.push(sentence);
                });
                this.notes.push("Bob is the neighbor.")
                return gameName.tellStory(storyArray)
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
            this.inventory.push("Sturdy Oak Shield")
            //let shieldLi = document.createElement("li");  //  Create an li element 
            //shieldLi.textContent = "Sturdy Oak Shield";  //  Then give that li element the corresponding text content.
            //inventory.append(shieldLi)
            this.notes.splice(this.notes.indexOf("Could use something to block Bob's club."))
            return gameName.tellStory(storyArray)
        }else if(this.notes.includes("Could use something to trap Bob with...")){
            gameName.locations.merchantStand[3].forEach(sentence => {
                storyArray.push(sentence);
        });
            this.inventory.push("Net")
            //let netLi = document.createElement("li");  //  Create an li element 
            //netLi.textContent = "Animal Trapper's Net";  //  Then give that li element the corresponding text content.
            //inventory.append(netLi)
            this.notes.splice(this.notes.indexOf("Could use something to trap Bob with..."))
            return gameName.tellStory(storyArray)
        }else if(this.notes.includes("I need something to help me open that door...")){
            gameName.locations.merchantStand[2].forEach(sentence => {
                storyArray.push(sentence);
        });
            this.inventory.push("Lockpick")
            //let lockpickLi = document.createElement("li");  //  Create an li element 
            //lockpickLi.textContent = "Lockpick";  //  Then give that li element the corresponding text content.
            //inventory.append(lockpickLi)
            this.notes.splice(this.notes.indexOf("I need something to help me open that door..."))
            return gameName.tellStory(storyArray)

        }else{
            gameName.locations.merchantStand[1].forEach(sentence => {
                storyArray.push(sentence);
        });
            
            return gameName.tellStory(storyArray)
        }
    }
    investigateAlley(){
        gameName.updateStoryArray(gameName.locations.alleyWay[0])
        place = "alley"
        //skipChoices = true;
        gameName.tellGrippingStory(storyArray)
        //gameName.tellStory(storyArray)     
        console.log(storyArray)
   

    }
    visitNeighborFront(){
        console.log("NF")
        gameName.updateStoryArray(gameName.locations.neighborFront[0])
        if(this.notes.includes("Bob is the neighbor.")){
            console.log("NF1")
            if(this.inventory.includes("Lockpick")){
                console.log("NF1a")
                gameName.locations.neighborFront[3].forEach(sentence => {
                    storyArray.push(sentence);
                });
                gameOver = true;
                return gameName.tellStory(storyArray)
            }else{
                console.log("NF1b")
                gameName.locations.neighborFront[1].forEach(sentence => {
                    storyArray.push(sentence);
                });
                this.notes.push("I need something to help me open that door...")
                return gameName.tellStory(storyArray)
            }
        }else{
            console.log("NF2")
            gameName.locations.neighborFront[2].forEach(sentence => {
                storyArray.push(sentence);
            });
            return gameName.tellStory(storyArray)
        }

    }
}

//////////////                     ///////////////////////////////////////////////
//////////////  Global Variables  ////////////////////////////////////////////////
//////////////                     ///////////////////////////////////////////////

const notes = [];
let decisionTime = false;
let storyArray = [];
let gameName = "game"
let messageActive = false;
let gameCount = 0;
let promptVar = []
let choicesVar = ["Pay a visit to the wooden door, the house your client sent you to for Bob.", "Visit the neighbor's house (front door).", "Check out the merchant's shop.", "Investigate the dark alleyway."]
let place = "woodenDoor"
let skipChoices = false;
let choseDeath = false;
let gameOver = false;
let playAgain = true;

//////////////                   ///////////////////////////////////////////////
//////////////  Instantiations  ////////////////////////////////////////////////
//////////////                   ///////////////////////////////////////////////

gameName = new Story()
const player = new Player()



gameName.startGame()


//////////////                   ///////////////////////////////////////////////
//////////////  Event Listeners  ////////////////////////////////////////////////
//////////////                   ///////////////////////////////////////////////

resetBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    gameName.reset(playAgain)
})

nextBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    return gameName.tellStory(storyArray)
})

impNext.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    if(place === "alley"){
        if(storyArray.length === 0 && choseDeath === false){
            window.alert("...Let's take a second to think, here. This seems sketchy...")
            let investigateFurther = window.confirm("Would you like to try to open the door? Click OK to try to open the door. Click Cancel to leave the alley.")
            if(investigateFurther){
                let uSure = window.confirm("Wooooahhh, man. Are you sure? That dog/wolf sounds MEAN! Click OK if you want to try to open the door, otherwise click Cancel.")
                if(uSure){
                    window.alert(".....Alrighty, then...")
                    choseDeath = true;
                    gameOver = true;
                    largeMessageBox.style.visibility = "hidden";
                    impNext.style.visibility = "hidden";
                    gameName.updateStoryArray(gameName.locations.alleyWay[2])
                    return gameName.tellStory(storyArray)
                }
                
            }else{
                window.alert("You use your better judgement and leave the alley.")
                skipChoices = false;
            }
        }
        return gameName.tellGrippingStory(storyArray)
    }else if(place === "fleeing"){
        if(storyArray.length === 0 && choseDeath === false){
            window.alert(`Uh oh...that ${gameName.pet} is getting pretty close...`)
            let whereTo = window.confirm("Where should you go? Click OK to try to keep running on the street. Click Cancel to hide in the alley.")
            if(whereTo){
                window.alert(`You clearly understimate the speed of a ${gameName.pet}...`)
                choseDeath = false;
                gameOver = true;
                largeMessageBox.style.visibility = "hidden";
                impNext.style.visibility = "hidden";
                gameName.updateStoryArray(gameName.locations.fleeing[1])
                return gameName.tellStory(storyArray)
            }else{
                gameName.updateStoryArray(gameName.locations.fleeing[0])
                return gameName.tellStory(storyArray)
            }
        }
        return gameName.tellGrippingStory(storyArray)
    }
    
})

buttons.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    optionList.textContent = "";
    if(evnt.target.className === "button" && decisionTime === true){
        decisionTime = false;
        if(evnt.target.id === "button1"){
            console.log("Clicked btn1")
            return player.knockOnWoodenDoor()
        }else if(evnt.target.id === "button2"){
            console.log("clicked btn2")
            return player.visitNeighborFront()
        }else if(evnt.target.id === "button3"){
            console.log("clicked btn3")
            return player.visitMerchantStand()
        }else{
            console.log("clicked btn4")
            return player.investigateAlley()
         } 
        
        
    }
})





/*

// =============================================
// =============================================
// =============================================

       Python Code

        

def run_from_pet(guy, pet, target):
    attempt_count = 0
    print_pause(4)
    fleeing_choice = valid_input(attempt_count, "Where do you "
                                 "run? Please enter the number "
                                 "of your selection.\n\n1. "
                                 "Duck into the dark alleyway "
                                 "to hide.\n2. That alley "
                                 "looks sketchy, keep running "
                                 "down the street.\n\n",
                                 ['1', '2'])
    if fleeing_choice == "1":
        print_pause(
        inventory.append("need_net")
        return alleyway(guy, pet, target)
    else:
        print_pause( 3)
        return after_game()



*/
