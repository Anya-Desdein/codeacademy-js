let input = "Put on your war paint Cross walks and crossed hearts and hope to die Seal the clouds with grey lining So we can take the world back from the heart-attacked One maniac at a time we will take it back You know time crawls on when you're waiting for the song to start So dance along to the beat of your heart";

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
let num = 0;
//console.log(input.length);
for (let i = 0; i < input.length; i++) {
    resultArray[num] = input.charAt(i);
    num++;
}

const textLength = resultArray.length;
let iterate = 0;
let counter = 0;
let newResultArray = [];

for (let i = 0; i < textLength; i++) {
    iterate++;

    if (resultArray[i] === vowels[0] || resultArray[i] === vowels[1] || resultArray[i] === vowels[2] || resultArray[i] === vowels[3] || resultArray[i] === vowels[4]) {
        if (resultArray[i] === "a" || resultArray[i] == "u") {
            newResultArray[counter] = resultArray[i];
            counter++;
        }

        newResultArray[counter] = resultArray[i];
        counter++;
    }

    if (resultArray[i] === " ") {
        newResultArray[counter] = " ";
        counter++;
    }

    if (iterate === 4) {
        iterate = 0;
    }
}
newResultArray = newResultArray.join("").toUpperCase();
console.log(newResultArray);
