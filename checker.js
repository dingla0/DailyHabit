mine = [
    "1| This is the book of the generations of Adam. When God created man, he made him in the likeness of God.",
    "2| Male and female he created them, and he blessed them and named them Man when they were created.",
    "3| When Adam had lived 130 years, he fathered a son in his own likeness, after his image, and named him Seth.",
    "4| The days of Adam after he fathered Seth were 800 years; and he had other sons and daughters.",
    "5| Thus all the days that Adam lived were 930 years, and he died.",
    "6| When Seth had lived 105 years, he fathered Enosh.",
    "7| Seth lived after he fathered Enosh 807 years and had other sons and daughters.",
    "8| Thus all the days of Seth were 912 years, and he died.",
    "9| When Enosh had lived 90 years, he fathered Kenan.",
    "10| Enosh lived after he fathered Kenan 815 years and had other sons and daughters.",
    "11| Thus all the days of Enosh were 905 years, and he died.",
    "12| When Kenan had lived 70 years, he fathered Mahalalel.",
    "13| Kenan lived after he fathered Mahalalel 840 years and had other sons and daughters.",
    "14| Thus all the days of Kenan were 910 years, and he died.",
    "15| When Mahalalel had lived 65 years, he fathered Jared.",
    "16| Mahalalel lived after he fathered Jared 830 years and had other sons and daughters.",
    "17| Thus all the days of Mahalalel were 895 years, and he died.",
    "18| When Jared had lived 162 years, he fathered Enoch.",
    "19| Jared lived after he fathered Enoch 800 years and had other sons and daughters.",
    "20| Thus all the days of Jared were 962 years, and he died.",
    "21| When Enoch had lived 65 years, he fathered Methuselah.",
    "22| Enoch walked with God after he fathered Methuselah 300 years and had other sons and daughters.",
    "23| Thus all the days of Enoch were 365 years.",
    "24| Enoch walked with God, and he was not, for God took him.",
    "25| When Methuselah had lived 187 years, he fathered Lamech.",
    "26| Methuselah lived after he fathered Lamech 782 years and had other sons and daughters.",
    "27| Thus all the days of Methuselah were 969 years, and he died.",
    "28| When Lamech had lived 182 years, he fathered a son",
    "29| and called his name Noah, saying, \"Out of the ground that the Lord has cursed, this one shall bring us relief from our work and from the painful toil of our hands.\"",
    "30| Lamech lived after he fathered Noah 595 years and had other sons and daughters.",
    "31| Thus all the days of Lamech were 777 years, and he died.",
    "32| After Noah was 500 years old, Noah fathered Shem, Ham, and Japheth."
]
let encoded = ` “ ” `
theirs = `1This is the book of the generations of Adam. When God created man, he made him in the likeness of God. 2Male and female he created them, and he blessed them and named them Man when they were created. 3When Adam had lived 130 years, he fathered a son in his own likeness, after his image, and named him Seth. 4The days of Adam after he fathered Seth were 800 years; and he had other sons and daughters. 5Thus all the days that Adam lived were 930 years, and he died.
6When Seth had lived 105 years, he fathered Enosh. 7Seth lived after he fathered Enosh 807 years and had other sons and daughters. 8Thus all the days of Seth were 912 years, and he died.
9When Enosh had lived 90 years, he fathered Kenan. 10Enosh lived after he fathered Kenan 815 years and had other sons and daughters. 11Thus all the days of Enosh were 905 years, and he died.
12When Kenan had lived 70 years, he fathered Mahalalel. 13Kenan lived after he fathered Mahalalel 840 years and had other sons and daughters. 14Thus all the days of Kenan were 910 years, and he died.
15When Mahalalel had lived 65 years, he fathered Jared. 16Mahalalel lived after he fathered Jared 830 years and had other sons and daughters. 17Thus all the days of Mahalalel were 895 years, and he died.
18When Jared had lived 162 years, he fathered Enoch. 19Jared lived after he fathered Enoch 800 years and had other sons and daughters. 20Thus all the days of Jared were 962 years, and he died.
21When Enoch had lived 65 years, he fathered Methuselah. 22Enoch walked with God after he fathered Methuselah 300 years and had other sons and daughters. 23Thus all the days of Enoch were 365 years. 24Enoch walked with God, and he was not, for God took him.
25When Methuselah had lived 187 years, he fathered Lamech. 26Methuselah lived after he fathered Lamech 782 years and had other sons and daughters. 27Thus all the days of Methuselah were 969 years, and he died.
28When Lamech had lived 182 years, he fathered a son 29and called his name Noah, saying, "Out of the ground that the Lord has cursed, this one shall bring us relief from our work and from the painful toil of our hands." 30Lamech lived after he fathered Noah 595 years and had other sons and daughters. 31Thus all the days of Lamech were 777 years, and he died.
32After Noah was 500 years old, Noah fathered Shem, Ham, and Japheth.`
theirs = theirs.split("\n").join(" ")
theirs = theirs.split("“").join("")
theirs = theirs.split("”").join("")
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