let input = "And it is not. Put on your war paint Cross walks and crossed hearts and hope to die Seal the clouds with grey lining So we can take the world back from the heart-attacked One maniac at a time we will take it back You know time crawls on when you're waiting for the song to start So dance along to the beat of your heart";

const vowels = ['a', 'e', 'i', 'o', 'u', ' '];
const resultArray = [];

const textLength = input.length;

for (let i = 0; i < textLength; i++) {
    const char = input[i].toLowerCase();
    if (vowels.includes(char)) {
        if (char === "a" || char === "u") {
            resultArray.push(char);
        }
        resultArray.push(char);
    }
}

const result = resultArray.join("").toUpperCase();
console.log(result);
