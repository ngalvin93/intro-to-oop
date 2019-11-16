// Person exercise
class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
    printInfo() {
      console.log({
        Email: this.email,
        Phone: this.phone
      })
    }
  }

// EX 1
  let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// EX 1
  let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
// EX 3
sonny.greet(jordan)
// EX 4
jordan.greet(sonny)
// EX 5
// const sonnyContactInfo = 'Sonny Email: ' + sonny.email + ' Sonny Phone: ' + sonny.phone
// console.log(sonnyContactInfo)
sonny.printInfo()
// EX 6
// const jordanContactInfo = 'Jordan Email: ' + jordan.email + ' Jordan Phone: ' + jordan.phone
// console.log(jordanContactInfo)
jordan.printInfo()

// ------------------------------------------------------------------------------------------

// // Card exercise
// class Card {
//     constructor(point, suit) {
//         this.point = point,
//         this.suit = suit
//     }
// }
// // Create a new card
// let myCard = new Card(5, 'diamonds')
// console.log(myCard)
// // Access point and suit of the new card
// console.log(myCard.point)
// console.log(myCard.suit)

// ------------------------------------------------------------------------------------------

// getImageUrl() exercise
class Card {
    constructor(point, suit) {
        this.point = point,
        this.suit = suit
    }
    getImageUrl () {
        console.log('images/' + this.point + '_of_' + this.suit + '.png')
    }
}

let myCard = new Card(5, 'diamonds')
myCard.getImageUrl()

// ------------------------------------------------------------------------------------------

// Hand constructor exercise

class Hand {
    constructor(point, suit) {
        this.point = point,
        this.suit = suit
    }
    addCard () {
        
    }
    getPoints () {

    }
}

// Get the following to work
var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()