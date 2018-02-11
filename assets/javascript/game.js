
                // BEGIN DOCUMENT READY
$(document).ready(function() {
                // BEGIN DOCUMENT READY


    // Global Variables
    var isHeroChosen = false
    var isEnemyChosen = false
    var heroChosen = "bob"
    var enemyChosen
    var chosenHero
    var chosenVill

    // Charactor Stats
    var charArr = [
        {
            name: "John Crichton",
            health: 100,
            attack: 75,
            image: "assets/images/crichton.jpg"
        },

        {
            name: "Ka D'Argo",
            health: 100,
            attack: 75,
            image: "assets/images/dargo.jpg"
        },
        {
            name: "Aaryn",
            health: 100,
            attack: 50,
            image: "assets/images/aaryn.jpg"
        },
        {
            name: "Chiana",
            health: 100,
            attack: 50,
            image: "assets/images/chiana.jpg"
        },
        {
            name: "Bialar Crais",
            health: 100,
            attack: 50,
            image: "assets/images/crais.jpg"
        },
        {
            name: "Scorpius",
            health: 100,
            attack: 75,
            image: "assets/images/scorpius.jpg"
        }
    ]

            //  BEGINNING OF FUNCTIONS



    // Put characters into selection area
    for (i = 0; i < charArr.length; i++) {
        $("#charContainer").append(
            $("<div class='col-md-2 charDiv' value='"+i+"'><img class='border border-light rounded charIcon' src='"+charArr[i].image+"'></div>")
        )
    }



    // On click of charactor icon, 
    $(document).on("click", ".charDiv", function () {
        // if first choice, make it the hero choice
        if (isHeroChosen === false) {
            chosenHero = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            isHeroChosen = true
            $("#heroImage").html("<img id='bigImage' src='"+chosenHero.image+"'>")
            // $("#heroContainer").append("<p>"+chosenHero.name+"</p>", "<p>"+chosenHero.health+"</p>")
            console.log("Hero: " + chosenHero.name)

        }
        else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
            chosenEnemy = charArr[$(this).attr("value")]
            $(this).addClass("fader")
            isEnemyChosen = true
            $("#enemyContainer").html("<img id='bigImage' src='"+chosenEnemy.image+"'>")
            $("#enemyContainer").append("<p>"+chosenEnemy.name+"</p>", "<p>"+chosenEnemy.health+"</p>")
            console.log("Enemy: " + chosenEnemy.name)
        }
    })

    // Fight Button Click Event
    $(document).on("click", "#fightButton", function () {
        console.log("Fight Button Pressed")
        console.log(chosenHero.name + " VS " + chosenEnemy.name)

        if (chosenHero.health < chosenEnemy.attack) {
            console.log("Your hero has died!")
            console.log("Hero Health Left: " + chosenHero.health)
            console.log("Enemy Health Left: " + chosenEnemy.health)        
        }
        else if (chosenEnemy.health < chosenHero.attack) {
            chosenEnemy = null
            isEnemyChosen = false
            console.log("The enemy has died!")
            console.log("Hero Health Left: " + chosenHero.health)
        }
        else if (chosenHero.health > 0) {
            chosenHero.health = chosenHero.health - chosenEnemy.attack
            chosenEnemy.health = chosenEnemy.health - chosenHero.attack
            $("#heroHealth").html("<h4>"+chosenHero.health+"</h4>")
            console.log("Hero Health Left: " + chosenHero.health)
            console.log("Enemy Health Left: " + chosenEnemy.health)
        }


    })




// END DOCUMENT READY
})
// END DOCUMENT READY