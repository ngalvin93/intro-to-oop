// // Person exercise
// class Person {
//     constructor(name, email, phone) {
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//     }
//     greet(otherPerson) {
//       console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
//     }
//     printInfo() {
//       console.log({
//         Email: this.email,
//         Phone: this.phone
//       })
//     }
//   }

// // EX 1
//   let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// // EX 1
//   let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
// // EX 3
// sonny.greet(jordan)
// // EX 4
// jordan.greet(sonny)
// // EX 5
// // const sonnyContactInfo = 'Sonny Email: ' + sonny.email + ' Sonny Phone: ' + sonny.phone
// // console.log(sonnyContactInfo)
// sonny.printInfo()
// // EX 6
// // const jordanContactInfo = 'Jordan Email: ' + jordan.email + ' Jordan Phone: ' + jordan.phone
// // console.log(jordanContactInfo)
// jordan.printInfo()

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

// let myCard = new Card(5, 'diamonds')
// myCard.getImageUrl()

// ------------------------------------------------------------------------------------------

// Hand constructor exercise
// class Hand extends Card {
//     constructor(point, suit) {
//         super(point, suit)
//         this.hand = []
//     }
//     addCard (card) {
//         this.hand.push(card)
//         console.log(card.point + ' of ' + card.suit + ' was added to your hand')
//     }
//     getPoints () {
//         const pointArray = this.hand.map((x)=> x.point)
//         console.log('Total points: ',(pointArray.reduce((a,b)=> a+b)))
//     }
// }

class Hand {
  constructor() {
      this.hand = []
  }
  addCard (card) {
      this.hand.push(card)
      console.log(card.point + ' of ' + card.suit + ' was added to your hand')
  }
  getPoints () {
      const pointArray = this.hand.map((x)=> x.point)
      console.log('Total points: ',(pointArray.reduce((a,b)=> a+b)))
  }
}

// Get the following to work
// var myHand = new Hand()
// console.log('This is my current hand: ', myHand)
// myHand.addCard(new Card(5, 'diamonds'))
// myHand.addCard(new Card(13, 'spades'))
// console.log('This is my current hand: ', myHand)
// myHand.getPoints()

// ------------------------------------------------------------------------------------------

// Deck constructor exercise
class Deck extends Hand {
  constructor (hand = [
    {point: 6, suit: "club"},
    {point: 8, suit: "heart"},
    {point: 3, suit: "spade"},
    {point: 2, suit: "clover"},
    {point: 10, suit: "heart"}
  ]) {
    super(hand)
    this.hand = hand
  }
  draw () {
    let randomCard = this.hand[Math.floor(Math.random() * this.hand.length)]
    console.log('You drew this card: ', randomCard)
  }
  shuffle () {
    for (var i = this.hand.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.hand[i];
      this.hand[i] = this.hand[j];
      this.hand[j] = temp;
  }
    console.log('Shuffled hand: ', this.hand)
  }

  numCardsLeft () {
    console.log('Number of cards left in deck: ', this.hand.length)
  }
}

// Get the following to work
var myDeck = new Deck()
myDeck.draw()
// Card {point: 6, suit: "clubs"}
myDeck.draw()
// Card {point: 1, suit: "spades"}
myDeck.shuffle()
myDeck.numCardsLeft()
// 50
