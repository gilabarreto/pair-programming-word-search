const wordSearch = (letters, word) => {

    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
        console.log(reverseWord);
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) {
            return true
        }

    }

    const verticalCheck = letters[0].map((column, c) => letters.map((row, r) => letters[r][c]))

    const verticalJoin = verticalCheck.map(myString => myString.join(''));

    for (let letter of verticalJoin) {
        if (letter.includes(word) || letter.includes(reverseWord)) {
            return true
        }
    }

    return false

}

module.exports = wordSearch