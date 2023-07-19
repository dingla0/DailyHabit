mine = [
    "1| When Abram was ninety-nine years old the Lord appeared to Abram and said to him, \"I am God Almighty; walk before me, and be blameless,",
    "2| that I may make my covenant between me and you, and may multiply you greatly.\"",
    "3| Then Abram fell on his face. And God said to him,",
    "4| \"Behold, my covenant is with you, and you shall be the father of a multitude of nations.",
    "5| No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations.",
    "6| I will make you exceedingly fruitful, and I will make you into nations, and kings shall come from you.",
    "7| And I will establish my covenant between me and you and your offspring after you throughout their generations for an everlasting covenant, to be God to you and to your offspring after you.",
    "8| And I will give to you and to your offspring after you the land of your sojournings, all the land of Canaan, for an everlasting possession, and I will be their God.\"",
    "9| And God said to Abraham, \"As for you, you shall keep my covenant, you and your offspring after you throughout their generations.",
    "10| This is my covenant, which you shall keep, between me and you and your offspring after you: Every male among you shall be circumcised.",
    "11| You shall be circumcised in the flesh of your foreskins, and it shall be a sign of the covenant between me and you.",
    "12| He who is eight days old among you shall be circumcised. Every male throughout your generations, whether born in your house or bought with your money from any foreigner who is not of your offspring,",
    "13| both he who is born in your house and he who is bought with your money, shall surely be circumcised. So shall my covenant be in your flesh an everlasting covenant.",
    "14| Any uncircumcised male who is not circumcised in the flesh of his foreskin shall be cut off from his people; he has broken my covenant.\"",
    "15| And God said to Abraham, \"As for Sarai your wife, you shall not call her name Sarai, but Sarah shall be her name.",
    "16| I will bless her, and moreover, I will give you a son by her. I will bless her, and she shall become nations; kings of peoples shall come from her.\"",
    "17| Then Abraham fell on his face and laughed and said to himself, \"Shall a child be born to a man who is a hundred years old? Shall Sarah, who is ninety years old, bear a child?\"",
    "18| And Abraham said to God, \"Oh that Ishmael might live before you!\"",
    "19| God said, \"No, but Sarah your wife shall bear you a son, and you shall call his name Isaac. I will establish my covenant with him as an everlasting covenant for his offspring after him.",
    "20| As for Ishmael, I have heard you; behold, I have blessed him and will make him fruitful and multiply him greatly. He shall father twelve princes, and I will make him into a great nation.",
    "21| But I will establish my covenant with Isaac, whom Sarah shall bear to you at this time next year.\"",
    "22| When he had finished talking with him, God went up from Abraham.",
    "23| Then Abraham took Ishmael his son and all those born in his house or bought with his money, every male among the men of Abraham's house, and he circumcised the flesh of their foreskins that very day, as God had said to him.",
    "24| Abraham was ninety-nine years old when he was circumcised in the flesh of his foreskin.",
    "25| And Ishmael his son was thirteen years old when he was circumcised in the flesh of his foreskin.",
    "26| That very day Abraham and his son Ishmael were circumcised.",
    "27| And all the men of his house, those born in the house and those bought with money from a foreigner, were circumcised with him.",
]
let encoded = ` “ ” `
theirs = `1When Abram was ninety-nine years old the Lord appeared to Abram and said to him, “I am God Almighty; walk before me, and be blameless, 2that I may make my covenant between me and you, and may multiply you greatly.” 3Then Abram fell on his face. And God said to him, 4“Behold, my covenant is with you, and you shall be the father of a multitude of nations. 5No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations. 6I will make you exceedingly fruitful, and I will make you into nations, and kings shall come from you. 7And I will establish my covenant between me and you and your offspring after you throughout their generations for an everlasting covenant, to be God to you and to your offspring after you. 8And I will give to you and to your offspring after you the land of your sojournings, all the land of Canaan, for an everlasting possession, and I will be their God.”
9And God said to Abraham, “As for you, you shall keep my covenant, you and your offspring after you throughout their generations. 10This is my covenant, which you shall keep, between me and you and your offspring after you: Every male among you shall be circumcised. 11You shall be circumcised in the flesh of your foreskins, and it shall be a sign of the covenant between me and you. 12He who is eight days old among you shall be circumcised. Every male throughout your generations, whether born in your house or bought with your money from any foreigner who is not of your offspring, 13both he who is born in your house and he who is bought with your money, shall surely be circumcised. So shall my covenant be in your flesh an everlasting covenant. 14Any uncircumcised male who is not circumcised in the flesh of his foreskin shall be cut off from his people; he has broken my covenant.”
15And God said to Abraham, “As for Sarai your wife, you shall not call her name Sarai, but Sarah shall be her name. 16I will bless her, and moreover, I will give you a son by her. I will bless her, and she shall become nations; kings of peoples shall come from her.” 17Then Abraham fell on his face and laughed and said to himself, “Shall a child be born to a man who is a hundred years old? Shall Sarah, who is ninety years old, bear a child?” 18And Abraham said to God, “Oh that Ishmael might live before you!” 19God said, “No, but Sarah your wife shall bear you a son, and you shall call his name Isaac. I will establish my covenant with him as an everlasting covenant for his offspring after him. 20As for Ishmael, I have heard you; behold, I have blessed him and will make him fruitful and multiply him greatly. He shall father twelve princes, and I will make him into a great nation. 21But I will establish my covenant with Isaac, whom Sarah shall bear to you at this time next year.”
22When he had finished talking with him, God went up from Abraham. 23Then Abraham took Ishmael his son and all those born in his house or bought with his money, every male among the men of Abraham’s house, and he circumcised the flesh of their foreskins that very day, as God had said to him. 24Abraham was ninety-nine years old when he was circumcised in the flesh of his foreskin. 25And Ishmael his son was thirteen years old when he was circumcised in the flesh of his foreskin. 26That very day Abraham and his son Ishmael were circumcised. 27And all the men of his house, those born in the house and those bought with money from a foreigner, were circumcised with him.`
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