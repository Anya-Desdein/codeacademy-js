let input = "Put on your war paint Cross walks and crossed hearts and hope to die Seal the clouds with grey lining So we can take the world back from the heart-attacked One maniac at a time we will take it back You know time crawls on when you're waiting for the song to start So dance along to the beat of your heart";

const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

const textLength = input.length;

for (let i = 0; i < textLength; i++) {
    if (input[i] === vowels[0] || input[i] === vowels[1] || input[i] === vowels[2] || input[i] === vowels[3] || input[i] === vowels[4] || input[i] === " ") {
        if (input[i] === "a" || input[i] == "u") {
            resultArray.push(input[i]);
        }

        resultArray.push(input[i]);
    }
}
const result = resultArray.join("").toUpperCase();
console.log(result);
