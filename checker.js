mine = [
    "1| These are the generations of the sons of Noah, Shem, Ham, and Japheth. Sons were born to them after the flood.",
    "2| The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras.",
    "3| The sons of Gomer: Ashkenaz, Riphath, and Togarmah.",
    "4| The sons of Javan: Elishah, Tarshish, Kittim, and Dodanim.",
    "5| From these the coastland peoples spread in their lands, each with his own language, by their clans, in their nations.",
    "6| The sons of Ham: Cush, Egypt, Put, and Canaan.",
    "7| The sons of Cush: Seba, Havilah, Sabtah, Raamah, and Sabteca. The sons of Raamah: Sheba and Dedan.",
    "8| Cush fathered Nimrod; he was the first on earth to be a mighty man.",
    "9| He was a mighty hunter before the Lord. Therefore it is said, \"Like Nimrod a mighty hunter before the Lord.\"",
    "10| The beginning of his kingdom was Babel, Erech, Accad, and Calneh, in the land of Shinar.",
    "11| From that land he went into Assyria and built Nineveh, Rehoboth-Ir, Calah, and",
    "12| Resen between Nineveh and Calah; that is the great city.",
    "13| Egypt fathered Ludim, Anamim, Lehabim, Naphtuhim,",
    "14| Pathrusim, Casluhim (from whom the Philistines came), and Caphtorim.",
    "15| Canaan fathered Sidon his firstborn and Heth,",
    "16| and the Jebusites, the Amorites, the Girgashites,",
    "17| the Hivites, the Arkites, the Sinites,",
    "18| the Arvadites, the Zemarites, and the Hamathites. Afterward the clans of the Canaanites dispersed.",
    "19| And the territory of the Canaanites extended from Sidon in the direction of Gerar as far as Gaza, and in the direction of Sodom, Gomorrah, Admah, and Zeboiim, as far as Lasha.",
    "20| These are the sons of Ham, by their clans, their languages, their lands, and their nations.",
    "21| To Shem also, the father of all the children of Eber, the elder brother of Japheth, children were born.",
    "22| The sons of Shem: Elam, Asshur, Arpachshad, Lud, and Aram.",
    "23| The sons of Aram: Uz, Hul, Gether, and Mash.",
    "24| Arpachshad fathered Shelah; and Shelah fathered Eber.",
    "25| To Eber were born two sons: the name of the one was Peleg, for in his days the earth was divided, and his brother's name was Joktan.",
    "26| Joktan fathered Almodad, Sheleph, Hazarmaveth, Jerah,",
    "27| Hadoram, Uzal, Diklah,",
    "28| Obal, Abimael, Sheba,",
    "29| Ophir, Havilah, and Jobab; all these were the sons of Joktan.",
    "30| The territory in which they lived extended from Mesha in the direction of Sephar to the hill country of the east.",
    "31| These are the sons of Shem, by their clans, their languages, their lands, and their nations.",
    "32| These are the clans of the sons of Noah, according to their genealogies, in their nations, and from these the nations spread abroad on the earth after the flood."
]
let encoded = ` “ ” `
theirs = `1These are the generations of the sons of Noah, Shem, Ham, and Japheth. Sons were born to them after the flood.
2The sons of Japheth: Gomer, Magog, Madai, Javan, Tubal, Meshech, and Tiras. 3The sons of Gomer: Ashkenaz, Riphath, and Togarmah. 4The sons of Javan: Elishah, Tarshish, Kittim, and Dodanim. 5From these the coastland peoples spread in their lands, each with his own language, by their clans, in their nations.
6The sons of Ham: Cush, Egypt, Put, and Canaan. 7The sons of Cush: Seba, Havilah, Sabtah, Raamah, and Sabteca. The sons of Raamah: Sheba and Dedan. 8Cush fathered Nimrod; he was the first on earth to be a mighty man. 9He was a mighty hunter before the Lord. Therefore it is said, “Like Nimrod a mighty hunter before the Lord.” 10The beginning of his kingdom was Babel, Erech, Accad, and Calneh, in the land of Shinar. 11From that land he went into Assyria and built Nineveh, Rehoboth-Ir, Calah, and 12Resen between Nineveh and Calah; that is the great city. 13Egypt fathered Ludim, Anamim, Lehabim, Naphtuhim, 14Pathrusim, Casluhim (from whom the Philistines came), and Caphtorim.
15Canaan fathered Sidon his firstborn and Heth, 16and the Jebusites, the Amorites, the Girgashites, 17the Hivites, the Arkites, the Sinites, 18the Arvadites, the Zemarites, and the Hamathites. Afterward the clans of the Canaanites dispersed. 19And the territory of the Canaanites extended from Sidon in the direction of Gerar as far as Gaza, and in the direction of Sodom, Gomorrah, Admah, and Zeboiim, as far as Lasha. 20These are the sons of Ham, by their clans, their languages, their lands, and their nations.
21To Shem also, the father of all the children of Eber, the elder brother of Japheth, children were born. 22The sons of Shem: Elam, Asshur, Arpachshad, Lud, and Aram. 23The sons of Aram: Uz, Hul, Gether, and Mash. 24Arpachshad fathered Shelah; and Shelah fathered Eber. 25To Eber were born two sons: the name of the one was Peleg, for in his days the earth was divided, and his brother’s name was Joktan. 26Joktan fathered Almodad, Sheleph, Hazarmaveth, Jerah, 27Hadoram, Uzal, Diklah, 28Obal, Abimael, Sheba, 29Ophir, Havilah, and Jobab; all these were the sons of Joktan. 30The territory in which they lived extended from Mesha in the direction of Sephar to the hill country of the east. 31These are the sons of Shem, by their clans, their languages, their lands, and their nations.
32These are the clans of the sons of Noah, according to their genealogies, in their nations, and from these the nations spread abroad on the earth after the flood.`
theirs = theirs.split("\n").join(" ")
theirs = theirs.split("“").join('"')
theirs = theirs.split("”").join('"')
theirs = theirs.split("’").join("'")
theirs = theirs.split("—").join("-")
console.log(mine.map(v => v.split("| ").join("")).join(" ") === theirs)

let sample = ""
let real = ""
let counter = 0
for (let i = 0; i < theirs.length; i++) {

    if (mine.map(v => v.split("| ").join("")).join(" ")[i] == theirs[i]) {
        sample += theirs[i]
        real += theirs[i]

    } else {
        console.log(mine.map(v => v.split("| ").join("")).join(" ")[i])
        break;
    }
}
console.log(sample)
console.log(real)