// Фильтрация строки

const string = "Привет! Как дела?";

const vowels = ["и", "е", "а"]

const getVowels = stringToFilter => {
 let extractedVowels = "";

 for (let i = 0; i < stringToFilter.length; i++) {
  const currentLetter = stringToFilter[i];

    if (vowels.indexOf(currentLetter) !== -1) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels
}



console.log(getVowels(string));