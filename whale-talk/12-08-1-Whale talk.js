
const vowels = ['A', 'E', 'I', 'O', 'U', ' '];
const repeated = ['A', 'U'];

function toWhaleSpeak(input) {
    input = input.toUpperCase();
    const resultArray = [];
    for (let char of input) {
        if (vowels.includes(char)) {
            if (repeated.includes(char)) {
                resultArray.push(char);
            }
            resultArray.push(char);
        }
    }
    return resultArray.join('');
}

function toWhaleSpeak2(input) {
    return Array.from(input.toUpperCase())
        .filter(char => vowels.includes(char))
        .map(char => repeated.includes(char) ? `${char}${char}` : char)
        .join('');
}

function toWhaleSpeak3(input) {
    return input
        .replace(/[^aiueo ]/ig, "")
        .replace(/([au])/ig, "$1$1");
}

let input = "And it is not. Put on your war paint Cross walks and crossed hearts and hope to die. Seal the clouds with grey lining. So we can take the world back from the heart-attacked. One maniac at a time we will take it back You know time crawls on when you're waiting for the song to start, so dance along to the beat of your heart.";

console.log("Method 1:", toWhaleSpeak(input));
console.log("Method 2:", toWhaleSpeak2(input));
console.log("Method 3:", toWhaleSpeak3(input));
