export default class utils {
  static standLine(num1, num2) {
    // A1: sets up the array to count by tens
    // A2: it pushes out the first number from the array which is registered with num1
    // A3: the new number will place at the end of the array which is registered with num2
    // R: will show the final product from the push and shift which is whatever the user inputs
    var countByTens = [10, 20, 30, 40, 50, 60]
    countByTens.push(num1)
    countByTens.shift(num2)
    return countByTens
  }
  static shoppingList(string1, num1) {
    // A1: a list of computers
    // A2: listing computer brands by best to worst
    // R: a list of sub arrays consist of differnt kind of computer brands and their rankings. user will add new brand and quantity
    var computers = [
      [" hp ", 1],
      [" dell ", 2],
      [" acer ", 3],
      [" toshiba ", 4],
    ]
    computers.push(string1, num1)
    return computers
  }
  static arrWithUnshift(string1) {
    // A1: a list of array in vegetables
    // R: adding the element at the start of the array
    var vegetables = [" mushrooom ", " potato ", " lettuce "]
    vegetables.unshift(string1)
    return vegetables
  }
  static arrWithShift(string1) {
    // A1: a list of array in fruits
    // R: it removes the first element and adds a new one with user input
    var fruits = [" grapes ", " apples ", " oranges "]
    fruits.shift(string1)
    fruits.unshift(string1)
    return fruits
  }
  static arrWithPop(string1) {
    // A1: a list of arrays in ice cream
    // R: removes the last element and adds a new one with user input
    var iceCream = ["strawberry", "chocolate", "vanilla"]
    iceCream.pop(string1)
    iceCream.push(string1)
    return iceCream
  }
  static arrWithPush(string1) {
    // A1:list the arrays in skittles
    // R: adds the element in the end of the array
    var skittles = ["red", "blue", "green"]
    skittles.push(string1)
    return skittles
  }

  static nLastCharaString(string1) {
    // A1: a set of characters
    // R: the second to last letter of the word
    return string1[string1.length - 2]
  }
  static lastCharaString(string1) {
    // A1: a set of characters
    // R: the last letter of the word
    return string1[string1.length - 1]
  }

  static nCharaString(string1) {
    // A1: user types a set of characters
    // R: picks the 4 character of the string. (remember the computer starts from 0)
    return string1[3]
  }
  static firstCharaString(string1) {
    // A1: user types a set of characters
    // R: the first letter of the word
    return string1[0]
  }

  static lengthString(string1) {
    // A1: user inputs word
    // R: count the amount of characters in a word
    return string1.length
  }
  static stringsWithVariables(string1) {
    // A1: user inputs in favorite sport
    // R: user inputs combined with a preset set of strings
    return "Do you love " + string1 + " like the professionals?"
  }
  static glueStringsPlusEquals(string1, string2) {
    // A1: a set of words
    // A2: a set of words
    // R: a sentence from A1 and A2 combine with each other
    return (string1 += " " + string2)
  }
  static glueStrings(string1, string2) {
    // A1: a set of words
    // A2: a set of words
    // R: a sentence from A1 and A2 combine with each other
    return string1 + string2
  }
  static quotientDecimals(input1, input2) {
    // A1: a number with decimals, not letter or any other special characters
    // A2: a number with decimals, not letter or any other special characters
    // R: a value from A1 and A2
    return input1 / input2
  }

  static productDecimals(input1, input2) {
    // A1: a number with decimals, not letter or any other special characters
    // A2: a number with decimals, not letter or any other special characters
    // R: a value from A1 and A2
    return input1 * input2
  }

  static decrement(input1) {
    // A1: a number, not letter or any other special characters
    // A2: deducts one less from the return
    // R: a value from A1 and A2
    input1--
    return input1
  }
  static increment(input1) {
    // A1: a number, not letter or any other special characters
    // A2: adds one more to the return
    // R: a value from A1 and A2
    input1++
    return input1
  }

  static quotient(input1, input2) {
    // A1: a number, not letter or any other special characters
    // A2: a number, not letter or any other special characters
    // R: a value from A1 and A2
    return input1 / input2
  }

  static product(input1, input2) {
    // A1: a number, not letter or any other special characters
    // A2: a number, not letter or any other special characters
    // R: a value from A1 and A2
    return input1 * input2
  }

  static difference(input1, input2) {
    // A1: a number, not letter or any other special characters
    // A2: a number, not letter or any other special characters
    // R: a value from A1 and A2
    return input1 - input2
  }

  static add(input1, input2) {
    // A1: any JavaScript value
    // A2: any JavaScript value
    // R: a single JavaScript value
    return input1 + input2
  }
  static variableTypeOf(num) {
    // A1:
    // A2:
    // R:
    return typeof num
  }

  static elementIndexOf(userInput) {
    // A1: randomStuff is an array with strings inside
    // A2: a conditional statement that makes sure that randomStuff doesnt reach -1. its the default of indexOf. indexOf searches inside the array to make sure the string is in the array.
    // R: a boolean against what the user inputs
    let randomStuff = [
      "jello",
      "water",
      "color",
      "football",
      "basketball",
      "protein",
    ]
    if (randomStuff.indexOf(userInput) !== -1) {
      return true
    } else {
      return false
    }
  }

  static addSpliceValue(input1, input2, addValue) {
    // A1:let addNewArr is an array with strings inside
    // A2:removedItems is equal to addNewArr to take out strings from addNewArr and replaces with what the user inputs
    // R: gives a result of what the user extracted and added together in one sentence. the join makes is readable by removing the commas.
    let addNewArr = ["How", "old", "are", "you", "?", 28]
    //let removedItems = addNewArr.splice(input1, input2, addValue)
    return addNewArr.join(" ")
  }

  static spliceTheWord(input1, input2) {
    // A1: let oldArr is an array with strings
    // A2: the function carries to arguements inside that will called in the return
    // A3: newArr is where splice is coming to remmove strings from the oldArr. the user will input the values of the position of the array
    let oldArr = ["How", "are", "you", "doing", "today"]
    let newArr = oldArr.splice(input1, input2).join(" ")
    return newArr
  }
  static randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    //A1: the static holds a min and max.
    //R: math.floor rounds the number down while math.random can't reach a number past 1,its in between 0 and 1.
  }

  static contacts(name1, prop) {
    // A1: the code above is an array of objects
    // A2: variable num and text take on the value when the condition statement is reached
    // A3: a for loop grabbing the length of inside of the array
    // A4: condition statement if else to, test whether the user input matches from the array of objects
    //R: will return a phone number from a celebrity or will return text saying either no such property or no such celebrity exists
    var celebrity = [
      {
        name: "Johnny Depp",
        phone: "760-555-6666",
      },
      {
        name: "Dwyane Johnson",
        phone: "305-786-9543",
      },
      {
        name: "Tyra Banks",
        phone: "463-777-4444 ",
        likes: ["beaches", "beer", "glasses"],
      },
    ]
    var num = ""
    var text = ""
    for (var x = 0; x < celebrity.length; x++) {
      if (celebrity[x].name === name1) {
        if (celebrity[x].hasOwnProperty(prop)) {
          num = celebrity[x][prop]
        } else {
          text = "No such Property"
        }
      } else {
        text = "No such celebrity exists"
      }
    }
    return num || text
  }

  static headsOrTails(input1) {
    // A1: variable counter will determine the tally between heads or tails
    // A2: the conditional statment to determine whether if the user picks heads or tails
    // R: will return either heads or tails and keep tally of which is winnning
    var counter = 0
    if (input1 === "heads") {
      counter++
    } else if (input1 === "tails") {
      counter--
    }
    if (counter > 0) return counter + " Heads "
    return counter + " Tails "
  }

  static retiredPlayers(input1) {
    // A1:
    // A2:
    // R:
    const retiredBasketballPlayers = [
      {
        player: "Michael Jordan",
        seasons: 14,
        championships: 6,
        drafted: 1984,
      },
      {
        player: "Kobe Bryant",
        seasons: 18,
        championships: 5,
        drafted: 1996,
      },
      {
        player: "Kareem Abdul-Jabbar",
        seasons: 20,
        championships: 6,
        drafted: 1969,
      },
      {
        player: "Earvin Magic Johnson Jr",
        seasons: 12,
        championships: 5,
        drafted: 1979,
      },
      {
        player: "Larry Bird",
        seasons: 12,
        championships: 4,
        drafted: 1979,
      },
      {
        player: "Shaquille O'Neal",
        seasons: 15,
        championships: 4,
        drafted: 1992,
      },
      {
        player: "Wilt Chamberlain",
        seasons: 13,
        championships: 2,
        drafted: 1959,
      },
      {
        player: "Tim Duncan",
        seasons: 18,
        championships: 5,
        drafted: 1997,
      },
      {
        player: "Hakeem Olajuwon",
        seasons: 17,
        championships: 2,
        drafted: 1984,
      },
    ]

    const basketball = retiredBasketballPlayers.filter((obj) =>
      input1.includes(obj.player)
    )
    return JSON.stringify(basketball)
  }

  static keepTrackOfIt(findMe) {
    // A1: findMe is the user inputs
    // R: displays true if its from the listed array, or else it will display false.
    const instruments = [
      "guitar",
      "clarinet",
      "violin",
      "bass",
      "drums",
      "piano",
    ]
    return instruments.includes(findMe)
  }

  static notSoStrict(input1) {
    // A1:takes in the value of the user
    // R:a boolean whether the value is positive or negative
    const someValue = input1.some((value) => value > 0)
    return someValue
  }

  static checkNums(value) {
    // A1: takes in the value of the user
    // R: a boolean whether the value is positive or negative
    const checkValue = value.every((nums) => nums > 0)
    return checkValue
  }

  static ssnJoin(input1) {
    // A1: takes in what the user is inputing
    // R: 9 numbers for a social security. it includes a -
    console.log(input1)
    let ssn1 = String(input1)
    let ssn = ssn1.split("")
    ssn.splice(3, 0, "-")
    ssn.splice(6, 0, "-")
    let final = ssn.join("")
    return final
  }

  static splitItUp(encode) {
    // A1: encode is the user input
    // R: what the user types out and being separated by commas.
    return encode.split("")
  }

  static musicThatInfluence(userInput) {
    // A1:takes in what the usertypes in from the array of objects
    // R: returns what the user inputs to access a key value to return an array
    let albumMasterPiece = [
      {
        artist: "Eminem",
        album: "Slim Shady lp",
        genre: "Hip-Hop",
      },
      {
        artist: "Metallica",
        album: " Master of Puppets",
        genre: "Heavy Metal",
      },
      {
        artist: "Michael Jackson",
        album: "Thriller",
        genre: "Pop",
      },
      {
        artist: "Bob Marley",
        album: "Exodus",
        genre: "Reggae",
      },
    ]
    const music = albumMasterPiece.map((musicObj) => musicObj[userInput])
    return music
  }

  static keepTogetherConcat(first, second) {
    // A1: place two arguments so the user can type what they like
    // R: what the user typed in both input boxes
    return first.concat(second)
  }

  static changeTheArraySlice(cultureFood) {
    // A1:
    // R:
    let food = [
      "NicaDishes",
      "ThaiDishes",
      "HonduranDishes",
      "CubanDishes",
      "PeruvianDishes",
    ]
    return food.slice(0, cultureFood)
  }

  static sliceList(beginSlice, endSlice) {
    // A1: an array of strings is listed
    // R: user favorite sport and function will slice how many letters they want
    let sports = ["basketball", "football", "baseball", "hockey"]
    return sports.slice(beginSlice, endSlice)
  }

  static getNumbersBiggerThan5(numbers) {
    //  use forEach() instead of a filter()
    // A1: an array of numbers
    // R: a new array of numbers all greater or equal to five
    let filteredNumbers = []
    numbers.forEach((number) => {
      if (number >= 5) {
        filteredNumbers.push(number)
      }
    })
    return filteredNumbers
  }
}
