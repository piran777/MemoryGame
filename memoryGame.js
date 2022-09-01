

const cardArray = [
    {
        name: 'gigachad',
        img: 'images/gigachad.jpg',
    }, //curly brackets are an object inside the array
    {
        name: 'na-what-are-cyclical-stocks',
        img: 'images/blackscreen.png'

    },
    {
        name: 'thumb',
        img: 'images/thumb.jpg'

    },
    {
        name: 'Brickwall',
        img: 'images/Brickwall.jpg'

    },
    {
        name: 'brickwall2',
        img: 'images/brickwall2.jpg'

    },
    {
        name: 'gigachad',
        img: 'images/gigachad.jpg',
    }, //curly brackets are an object inside the array
    {
        name: 'na-what-are-cyclical-stocks',
        img: 'images/blackscreen.png'

    },
    {
        name: 'thumb',
        img: 'images/thumb.jpg'

    },
    {
        name: 'Brickwall',
        img: 'images/Brickwall.jpg'

    },
    {
        name: 'brickwall2',
        img: 'images/brickwall2.jpg'

    },
    {
        name: 'blue',
        img: 'images/blue.jpg'

    },
    {
        name: 'blue',
        img: 'images/blue.jpg'

    },



] //card array

//random order
cardArray.sort(() => 0.5 - Math.random()) //sort an array randomly using this compares 2 values and sorts thru it
                // smaller than 0.5 or larger than 0.5 cause it returns a number between 0 and 1
                //built in sort method
    
    //grab div id
   const gridDisplay =  document.querySelector('#grid') //# means id querey slectory lets us match the id to grab the div
    //finds grid id
    const resultDisplay = document.querySelector('#result') //grabbing the span by id of result from html

    let cardsChosen = []
    let cardsChosenIds = []
    const cardsWon = []


function createBoard(){
    for(let i = 0; i< cardArray.length; i++){ //something happens 10 times
        const card = document.createElement('img') //creating an image
        card.height = 100
        card.width = 100
        card.setAttribute('src', 'images/na-what-are-cyclical-stocks.jpg') //sets the value of the attribute
        card.setAttribute('data-id',i) //each cardf will have a unique id
        card.addEventListener('click',flipCard) //dont use () cause we only need it if its called
        //the event listener lets up click and call the function flipCard
        gridDisplay.append(card) //take the created images and append them to the grid
        //required content from the card is put into grid display which is our grid
        console.log(card,i)

    }

}
createBoard()

function checkMatch(){
const cards = document.querySelectorAll('#grid img') //look for all images in the grid
const optionOneId = cardsChosenIds[0]  
const optionTwoId = cardsChosenIds[1]  
    console.log(cards)
    console.log('check for match')


    if(optionOneId === optionTwoId){
       
        cards[optionOneId].setAttribute('src', 'images/na-what-are-cyclical-stocks.jpg')
        cards[optionTwoId].setAttribute('src', 'images/na-what-are-cyclical-stocks.jpg')
        alert('you clicked the same')
        // return them blank and add a pop up

    }
    
    
    if(cardsChosen[0] == cardsChosen[1] && optionOneId !== optionTwoId){ //the cards clicked on are put into this array so if 2 are clicked and are the same then they turn white
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg') //if a match the image turns white
        cards[optionOneId].removeEventListener('click',flipCard)
        
        cardsWon.push(cardsChosen) //recording matches
    } else{
        cards[optionOneId].setAttribute('src','images/na-what-are-cyclical-stocks.jpg')
        cards[optionTwoId].setAttribute('src','images/na-what-are-cyclical-stocks.jpg')
        alert('sorry try again plz')
    }
    resultDisplay.innerHTML = cardsWon.length //for the score or can use text content

    cardsChosen = []
    cardsChosenIds = []
    if (cardsWon.length == cardArray.length/2){ //if there are 12 cards we can only get six matches
        resultDisplay.innerHTML = 'Congratulations you found all matches'
    }
}

function flipCard(){
    console.log(cardArray)
   const cardID = this.getAttribute('data-id') //the cards id is stored here
   //this lets us take the clicked on id
   //we do this to know which card is clicked so we can pass it thru our array to get the name
 
   cardsChosen.push(cardArray[cardID].name) //pushes item into array (name)
   cardsChosenIds.push(cardID)
   console.log(cardsChosen)
   console.log(cardsChosenIds)
   this.setAttribute('src',cardArray[cardID].img)
   if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
   }
    


}