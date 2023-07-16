mine = [
    "1| After these things the word of the Lord came to Abram in a vision: \"Fear not, Abram, I am your shield; your reward shall be very great.\"",
    "2| But Abram said, \"O Lord God, what will you give me, for I continue childless, and the heir of my house is Eliezer of Damascus?\"",
    "3| And Abram said, \"Behold, you have given me no offspring, and a member of my household will be my heir.\"",
    "4| And behold, the word of the Lord came to him: \"This man shall not be your heir; your very own son shall be your heir.\"",
    "5| And he brought him outside and said, \"Look toward heaven, and number the stars, if you are able to number them.\" Then he said to him, \"So shall your offspring be.\"",
    "6| And he believed the Lord, and he counted it to him as righteousness.",
    "7| And he said to him, \"I am the Lord who brought you out from Ur of the Chaldeans to give you this land to possess.\"",
    "8| But he said, \"O Lord God, how am I to know that I shall possess it?\"",
    "9| He said to him, \"Bring me a heifer three years old, a female goat three years old, a ram three years old, a turtledove, and a young pigeon.\"",
    "10| And he brought him all these, cut them in half, and laid each half over against the other. But he did not cut the birds in half.",
    "11| And when birds of prey came down on the carcasses, Abram drove them away.",
    "12| As the sun was going down, a deep sleep fell on Abram. And behold, dreadful and great darkness fell upon him.",
    "13| Then the Lord said to Abram, \"Know for certain that your offspring will be sojourners in a land that is not theirs and will be servants there, and they will be afflicted for four hundred years.",
    "14| But I will bring judgment on the nation that they serve, and afterward they shall come out with great possessions.",
    "15| As for you, you shall go to your fathers in peace; you shall be buried in a good old age.",
    "16| And they shall come back here in the fourth generation, for the iniquity of the Amorites is not yet complete.\"",
    "17| When the sun had gone down and it was dark, behold, a smoking fire pot and a flaming torch passed between these pieces.",
    "18| On that day the Lord made a covenant with Abram, saying, \"To your offspring I give this land, from the river of Egypt to the great river, the river Euphrates,",
    "19| the land of the Kenites, the Kenizzites, the Kadmonites,",
    "20| the Hittites, the Perizzites, the Rephaim,",
    "21| the Amorites, the Canaanites, the Girgashites and the Jebusites.\"",
]
let encoded = ` “ ” `
theirs = `1After these things the word of the Lord came to Abram in a vision: “Fear not, Abram, I am your shield; your reward shall be very great.” 2But Abram said, “O Lord God, what will you give me, for I continue childless, and the heir of my house is Eliezer of Damascus?” 3And Abram said, “Behold, you have given me no offspring, and a member of my household will be my heir.” 4And behold, the word of the Lord came to him: “This man shall not be your heir; your very own son shall be your heir.” 5And he brought him outside and said, “Look toward heaven, and number the stars, if you are able to number them.” Then he said to him, “So shall your offspring be.” 6And he believed the Lord, and he counted it to him as righteousness.
7And he said to him, “I am the Lord who brought you out from Ur of the Chaldeans to give you this land to possess.” 8But he said, “O Lord God, how am I to know that I shall possess it?” 9He said to him, “Bring me a heifer three years old, a female goat three years old, a ram three years old, a turtledove, and a young pigeon.” 10And he brought him all these, cut them in half, and laid each half over against the other. But he did not cut the birds in half. 11And when birds of prey came down on the carcasses, Abram drove them away.
12As the sun was going down, a deep sleep fell on Abram. And behold, dreadful and great darkness fell upon him. 13Then the Lord said to Abram, “Know for certain that your offspring will be sojourners in a land that is not theirs and will be servants there, and they will be afflicted for four hundred years. 14But I will bring judgment on the nation that they serve, and afterward they shall come out with great possessions. 15As for you, you shall go to your fathers in peace; you shall be buried in a good old age. 16And they shall come back here in the fourth generation, for the iniquity of the Amorites is not yet complete.”
17When the sun had gone down and it was dark, behold, a smoking fire pot and a flaming torch passed between these pieces. 18On that day the Lord made a covenant with Abram, saying, “To your offspring I give this land, from the river of Egypt to the great river, the river Euphrates, 19the land of the Kenites, the Kenizzites, the Kadmonites, 20the Hittites, the Perizzites, the Rephaim, 21the Amorites, the Canaanites, the Girgashites and the Jebusites.”`
theirs = theirs.split("\n").join(" ")
theirs = theirs.split("“").join('"')
theirs = theirs.split("”").join('"')
theirs = theirs.split("‘").join("'")
theirs = theirs.split("’").join("'")
theirs = theirs.split("—").join("-")
console.log(mine.map(v => v.split("| ").join("")).join(" ") === theirs)

let sample = ""
let real = ""
let counter = 0
let foundDouble = false
let lastVerse = ""
let lastSeen = -1

for (let i = 0; i < theirs.length; i++) {
    let currentNum = parseInt(theirs[i])
    let lastNum = parseInt(theirs[i-1])
    if(!isNaN(currentNum)){
        if (!isNaN(lastNum)) {
            lastVerse += currentNum
        } else {
            lastVerse = ""
            lastVerse += currentNum
        }
    }
    if (mine.map(v => v.split("| ").join("")).join(" ")[i] == theirs[i]) {
        sample += theirs[i]
        real += theirs[i]

    } else {
        console.log("Verse", lastVerse)
        console.log(mine.map(v => v.split("| ").join("")).join(" ")[i], "|",theirs[i])
        break;
    }

}
console.log(sample)