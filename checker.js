mine = [
    "1| But God remembered Noah and all the beasts and all the livestock that were with him in the ark. And God made a wind blow over the earth, and the waters subsided.",
    "2| The fountains of the deep and the windows of the heavens were closed, the rain from the heavens was restrained,",
    "3| and the waters receded from the earth continually. At the end of 150 days the waters had abated,",
    "4| and in the seventh month, on the seventeenth day of the month, the ark came to rest on the mountains of Ararat.",
    "5| And the waters continued to abate until the tenth month; in the tenth month, on the first day of the month, the tops of the mountains were seen.",
    "6| At the end of forty days Noah opened the window of the ark that he had made",
    "7| and sent forth a raven. It went to and fro until the waters were dried up from the earth.",
    "8| Then he sent forth a dove from him, to see if the waters had subsided from the face of the ground.",
    "9| But the dove found no place to set her foot, and she returned to him to the ark, for the waters were still on the face of the whole earth. So he put out his hand and took her and brought her into the ark with him.",
    "10| He waited another seven days, and again he sent forth the dove out of the ark.",
    "11| And the dove came back to him in the evening, and behold, in her mouth was a freshly plucked olive leaf. So Noah knew that the waters had subsided from the earth.",
    "12| Then he waited another seven days and sent forth the dove, and she did not return to him anymore.",
    "13| In the six hundred and first year, in the first month, the first day of the month, the waters were dried from off the earth. And Noah removed the covering of the ark and looked, and behold, the face of the ground was dry.",
    "14| In the second month, on the twenty-seventh day of the month, the earth had dried out.",
    "15| Then God said to Noah,",
    "16| \"Go out from the ark, you and your wife, and your sons and your sons' wives with you.",
    "17| Bring out with you every living thing that is with you of all flesh-birds and animals and every creeping thing that creeps on the earth-that they may swarm on the earth, and be fruitful and multiply on the earth.\"",
    "18| So Noah went out, and his sons and his wife and his sons' wives with him.",
    "19| Every beast, every creeping thing, and every bird, everything that moves on the earth, went out by families from the ark.",
    "20| Then Noah built an altar to the Lord and took some of every clean animal and some of every clean bird and offered burnt offerings on the altar.",
    "21| And when the Lord smelled the pleasing aroma, the Lord said in his heart, \"I will never again curse the ground because of man, for the intention of man's heart is evil from his youth. Neither will I ever again strike down every living creature as I have done.",
    "22| While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease.\""
]
let encoded = ` “ ” `
theirs = `1But God remembered Noah and all the beasts and all the livestock that were with him in the ark. And God made a wind blow over the earth, and the waters subsided. 2The fountains of the deep and the windows of the heavens were closed, the rain from the heavens was restrained, 3and the waters receded from the earth continually. At the end of 150 days the waters had abated, 4and in the seventh month, on the seventeenth day of the month, the ark came to rest on the mountains of Ararat. 5And the waters continued to abate until the tenth month; in the tenth month, on the first day of the month, the tops of the mountains were seen.
6At the end of forty days Noah opened the window of the ark that he had made 7and sent forth a raven. It went to and fro until the waters were dried up from the earth. 8Then he sent forth a dove from him, to see if the waters had subsided from the face of the ground. 9But the dove found no place to set her foot, and she returned to him to the ark, for the waters were still on the face of the whole earth. So he put out his hand and took her and brought her into the ark with him. 10He waited another seven days, and again he sent forth the dove out of the ark. 11And the dove came back to him in the evening, and behold, in her mouth was a freshly plucked olive leaf. So Noah knew that the waters had subsided from the earth. 12Then he waited another seven days and sent forth the dove, and she did not return to him anymore.
13In the six hundred and first year, in the first month, the first day of the month, the waters were dried from off the earth. And Noah removed the covering of the ark and looked, and behold, the face of the ground was dry. 14In the second month, on the twenty-seventh day of the month, the earth had dried out. 15Then God said to Noah, 16“Go out from the ark, you and your wife, and your sons and your sons’ wives with you. 17Bring out with you every living thing that is with you of all flesh—birds and animals and every creeping thing that creeps on the earth—that they may swarm on the earth, and be fruitful and multiply on the earth.” 18So Noah went out, and his sons and his wife and his sons’ wives with him. 19Every beast, every creeping thing, and every bird, everything that moves on the earth, went out by families from the ark.
20Then Noah built an altar to the Lord and took some of every clean animal and some of every clean bird and offered burnt offerings on the altar. 21And when the Lord smelled the pleasing aroma, the Lord said in his heart, “I will never again curse the ground because of man, for the intention of man’s heart is evil from his youth. Neither will I ever again strike down every living creature as I have done. 22While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease.”`
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