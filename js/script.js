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
const choices = document.querySelector(".choiceDisplay")
const artWindow = document.querySelector(".artWindow")
const nextBtn = document.querySelector(".next")
const resetBtn = document.querySelector(".reset")
const btn1 = document.querySelector("button1")
const btn2 = document.querySelector("button2")
const btn3 = document.querySelector("button3")
const btn4 = document.querySelector("button4")

let next = true;
let messageActive = false;
let gamecount = 0;
let nextScene = "";


class Story {
    constructor() {
        this.guy = guys[Math.floor(Math.random()*4) + 4] // Fix this
        this.pet = pets[Math.floor(Math.random()*4) + 4]// Fix this
        this.target = this.guy
        //this.choices = { atWoodenDoorChoices : {prompts : ["You stand in front of the wooden door, the address that you were told to find Bob.", 
          //                                                  "What do you do next?"]},
            //                                    {options : ["1. Knock on the wooden door.",
              //                                              "2. Walk left, toward the neighbor's house and the dead end.",
                //                                            "3. Walk right, toward the alley and merchant."]}
   // }
        this.scripts = {
            introScript : ["You find yourself on a dark street on a cool summer evening, having finally found the wooden door that your bounty target resides behind.", 
                            "'This is it,' you mutter to yourself, wondering why you signed up to hunt down some guy named Bob in this small mountain town so far from home.", 
                            "You take a swig of water from your canteen and observe your surroundings.",
                            "With the door in front of you, the street stretches out in opposite directions to both sides, lined with tudor-style homes that had no room to breathe on either side.",
                            "To your left, the street barely continues for a dozen yards before ending abruptly at the interior of the city wall.",
                            "A single, lonely door and a dimly lit window in the neighboring home are all that there is to see here.",
                            "To your right, the moonlit street leads to the town center.",
                            "With no streetlamps, the road fades into the dim light several hundred yards away, just beyond an ominous-looking alleyway adjacent to a small merchant's shop.",
                            "You quickly check your belt, making sure that your sword is at the ready and your cord for binding the target's hands is easily accessible.",
                            "You've captured enough bounty targets to know that you can never be too prepared."],
            atWoodenDoorScript : ["You take a deep breath and knock on the door.",
                                "The door opens wide and you find yourself looking up at a {guy} standing at least two heads taller than you, his silhouette obscuring the lamplight behind him.",
                                "You confidently stare him in the eyes and declare,'I'm looking for Bob. Is this your name?",
                                "In the following seconds of awkward silence, you quickly take in what you see behind him.",
                                "The furniture is falling apart and everything is covered in filth.",
                                "A cage is perched precariously on top of a bench in the corner, the cage door askew.",
                                "The {pet} inside, sensing the tension, stares back at you.",
                                "The {guy} clears his throat and slowly reaches toward the heavy wooden club resting on the table nearby."],
            targetNeighbor : {
                atWoodenDoor: [['Bob is my neighbor. He doesn\'t live here," he says, placing the end of his club on the floor, then leaning on it like a cane.',
                '"He lives just next door. I think he\'s over there now."',
                "The {guy} also mentions that Bob rarely answers his door, but that sometimes he leaves the back door in the alley unlocked.",
                "You thank him for his help and he shuts the door as you step back out onto the street."], 
                ["You knock on the wooden door, and seconds later you're greeted once more by the {guy}.",
                '"I\'m sorry. I don\'t know how else I can help," he says.',
                "You apologize for bothering him and he shuts the door."]]
            },
            targetGuy : {
                atWoodenDoor: [["\"YOU SHOULDN'T HAVE COME HERE!!!\", he yells, grabbing the club and brandishing it menacingly.",
                "You unsheath your sword and raise it to block as the {guy} takes a massive swing at you.",
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
                "YOU WON!!!",
                "Congratulations! But beware...this story may not play out how you think next time..."]]
            }
            
        }
        
         

    }
    tellStory(storyArray, prompt, nextChoices){
        messageActive = true;
        const messageArray = storyArray;
        this.updateMessageDiv(messageArray[0])
        if (messageArray.length === 0){  // If all array messages have been removed...
            messageActive = false;
            messageBox.style.display = "none";
            nextBtn.style.display = "none";
            this.presentChoices(prompt, nextChoices)
        }
        messageArray.shift()
       

    }
    updateMessageDiv(message){
        messageText.textContent = message;
    }

    presentChoices(prompt, choiceList){
        choices.textContent = choiceList;
        this.updateMessageDiv(prompt)
    }

    updateArt(image){
        console.log(artWindow)
        artWindow.style.backgroundImage = image;

    }
    startGame(){

    }
    reset(){
        console.log("resetting the game")
        gamecount++
        let gameName = "Game" + gamecount
        console.log(gameName)
        gameName = new Story()
        console.log(gameName)

    }
    updateInventory(){

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
    }
}



const newStory = new Story()

nextScene = newStory.scripts.introScript

resetBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    newStory.reset()
})

nextBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    return newStory.tellStory(nextScene)
})






/*
// =============================================
// =============================================
// =============================================

       Python Code

import time
import random

inventory = []  # a list of the items that the player has on their person.


def print_pause(message, seconds):  # print a message, then pause.
    print(message)
    time.sleep(seconds)


def valid_input(attempt_count, prompt, options):
    while True:
        option = input(prompt).lower()
        if option in options:
            return option
        else:
            attempt_count += 1
            if attempt_count == 3:
                print_pause("\nOh, okay. You're not going to take this "
                            "seriously... Fine. You had ONE job.", 4)
                print_pause("You know what? I'm kicking you out...\n", 4)
                exit(0)
            elif attempt_count == 2:
                print_pause("\nWoah, bud. You've gotta get a hold "
                            "of your typing fingers, there.", 3)
                print_pause("They're out of control! "
                            "Alright, let's try one more time.\n", 2)
            else:
                print_pause("\nI'm sorry, I didn't get that. Let's "
                            "try again.\n", 2)


def play_game():
    guys = ["man", "troll", "centaur"]
    pets = ["finch", "gerbil", "rabbit", "lizard", "kitten", "badger",
            "sparrow", "parrot", "crow", "hamster", "chinchilla"]
    guy = random.choice(guys)  # pick a random guy
    pet = random.choice(pets)  # pick a random pet
    targets = [guy, pet, "neighbor"]
    target = random.choice(targets)  # pick a random target
    intro(guy, pet, target)


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
    if door_choice == "1":
        return knock_wooden_door(guy, pet, target)
    elif door_choice == "2":
        print_pause("\nYou turn to your left and meander "
                    "down the street.", 2)
        return toward_dead_end(guy, pet, target)
    else:
        print_pause("\nYou turn to your right and head in the "
                    "direction of the alley and the merchant.\n", 3)
        return merchant_or_alley(guy, pet, target)


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


def knock_wooden_door(guy, pet, target):
    if "been_to_wooden_door" not in inventory:
        print messages
        inventory.append("been_to_wooden_door")
        if target == guy:
            print messages
            inventory.append("guy_is_bob")
            inventory.append("need_shield")
            return at_door(guy, pet, target)
        elif target == "neighbor":
            print messages
            inventory.append("neighbor_is_bob")
            return at_door(guy, pet, target)
        elif target == pet:
            print_pause(f"He chuckles as he grabs his club from "
                        "the table.\n", 4)
            print_pause('"\'Bob\', you say? Go ahead and take him!"', 3)
            print_pause('"He\'s been nothing but trouble ever since I '
                        'bought him,\" he says, using the club to gesture '
                        f"toward the {pet} sitting innocently in the "
                        "cage.\n", 6)
            print_pause("You look at 'Bob'.", 4)
            print_pause("Bob stares back.\n", 4)
            print_pause(f"A growl rises from deep within the {pet}'s "
                        "throat, and Bob starts slowly making his way "
                        "out of the cage, eyes locked on you the entire "
                        "time.\n", 5)
            print_pause(f"Wait...{pet}s can growl?  Yes....yes they can.\n", 3)
            print_pause("Bob leaps from the cage and attacks you! You "
                        "wave your sword back and forth, hoping to land a "
                        "strike as Bob darts about, nipping at any part "
                        "of you that gets close enough.", 6)
            print_pause("You look for an escape. The dead-end street to "
                        "your left offers no safety, so you take off running "
                        "to the right, toward the merchant and alleyway.\n", 3)
            print_pause(f"You hear the savage {pet} at your heels.", 2)
            inventory.append("pet_is_bob")
            return run_from_pet(guy, pet, target)
    else:
        if "guy_is_bob" in inventory:
           print messages
                after_game()
            else:
               print messages
                return after_game()
        elif "pet_is_bob" in inventory:
            if "net" in inventory:
                print_pause("With your net at the ready, you knock on the "
                            "door once more and step to the side, hiding "
                            "out of view against the side of the house.", 4)
                print_pause(f"The door opens and the {pet} flies out into the "
                            "street, clearly still enraged from your previous "
                            "encounter.", 3)
                print_pause("You leap forward and scoop up Bob with the "
                            "net!", 2)
                print_pause("You wrap up the top of the net to make sure the "
                            f"squirming {pet} won't be able to get out "
                            f"as the {guy} watches from his doorway.", 3)
                print_pause("He gives you a nod of appreciation as you start "
                            "off, beginning the long journey back home where "
                            "your bounty awaits!", 4)
                print_pause("YOU WON!!!", 2)
                print_pause("Congratulations! But beware...this story may not "
                            "play out how you think it will next time...", 4)
                return after_game()
            else:
                print_pause("You knock on the door once more, holding your "
                            "sword in a defensive position, prepared for "
                            "whatever Bob may do this time.", 4)
                print_pause("The door swings open...as if by no one. The "
                            f"{guy} is nowhere to be seen.", 3)
                print_pause("But wait...  There....", 3)
                print_pause("There, on the floor... It's...\n", 3)
                print_pause("BOB\n", 2)
                print_pause(f"Bob the {pet} stares at you directly in the "
                            "eyes...", 3)
                print_pause("You feel an overwhelming sense of despair, "
                            "losing your grip on the sword.", 3)
                print_pause("You stand there, frozen in fear as your sword "
                            "drops to the stone street, the clanging sound "
                            "breaking the deadly silence.\n", 3)
                print_pause("Everything goes dark...\n\n", 4)
                print_pause("...", 3)
                print_pause("YOU LOSE. You were devoured by Bob.", 3)
                print_pause(f"Who knew a {pet} could have such a "
                            "voracious appetite?\n", 2)
                return after_game()
        elif "neighbor_is_bob" in inventory:
            print_pause("You knock on the wooden door, and seconds later "
                        f"you're greeted once more by the {guy}.", 3)
            print_pause('"I\'m sorry. I don\'t know how else I can help," he '
                        'says.', 3)
            print_pause("You apologize for bothering him and he shuts "
                        "the door.", 2)
            return at_door(guy, pet, target)


def merchant_or_alley(guy, pet, target):
    attempt_count = 0
    print_pause("What would you like to do?", 2)
    shop_or_alley = valid_input(attempt_count, "Please enter "
                                "the number of your "
                                "selection.\n\n1. Buy from the "
                                "merchant.\n2. Explore the dark "
                                "alleyway.\n3. Go back to the "
                                "wooden door.\n\n",
                                ['1', '2', '3'])
    if shop_or_alley == "1":
        print_pause("\nYou approach the merchant's stand.", 2)
        return merchant_stand(guy, pet, target)
    elif shop_or_alley == "2":
        print_pause("\nYou step into the alleyway, your hand "
                    "resting on the hilt of your sword.", 3)
        return alleyway(guy, pet, target)
    else:
        print_pause("\nYou return to the wooden door.", 2)
        return at_door(guy, pet, target)


def merchant_stand(guy, pet, target):  # visit the merchant
    print_pause("\nA homely old man sits, asleep, behind the "
                "merchant stand.", 3)
    print_pause("Your presence startles him awake.", 2)
    if "need_lockpick" in inventory:  # if needed, buy lockpick.
        print_pause("You purchase a lockpick from him. Conveniently, "
                    "you already know how to use it.", 3)
        inventory.append("lockpick")
        inventory.remove("need_lockpick")
    elif "need_net" in inventory:  # if you need it, buy a net.
        print_pause("You purchase an animal-trapper's net from him.", 3)
        print_pause(f"NOW you're ready for that $@^% {pet}!", 3)
        inventory.append("net")
        inventory.remove("need_net")
    elif "need_shield" in inventory:  # if you need it, buy a shield.
        print_pause("You buy a sturdy oak shield from him. This will "
                    "surely help deflect Bob's swinging club!", 3)
        inventory.append("shield")
        inventory.remove("need_shield")
    else:  # redirect player to continue the story. Return once necessary.
        print_pause("Looking at his wares, you can't think of anything "
                    "else that you would need right now.", 3)
        print_pause("It's time to capture Bob and earn your pay!\n", 2)
    return outside_alleyway(guy, pet, target)


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