
export function translatePigLatin(str) {
    const beginWithCons = /^([b-df-hj-np-tv-z]+)(.*)/gi
    const beginWithVowel = /^[aeiou]+/gi

    if (beginWithVowel.test(str)) {
        return str + "way"
    }

    if (beginWithCons.test(str)) {
        return str.replace(beginWithCons, "$2$1ay")
    }
}



