//Основні:
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

stringToArray = string => string.split(" ");

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
DNAtoRNA = dna => dna.replaceAll("T", "U");

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
min = list => list.sort((a, b) => a - b)[0];
max = list => list.sort((a, b) => b - a)[0];

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
min = (arr, toReturn) => {
    const minValue = Math.min(...arr);
    return toReturn === 'value' ? minValue : arr.indexOf(minValue)
};

//Додаткові:
    
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
doubleInteger = i => 2 * i;
 
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - 2 * sonYearsOld);
   
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
nthEven = n => 2 * (n - 1);

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
getRealFloor = n => n > 13 ? n - 2 : (n > 0 ? n - 1 : n);

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
past = (h, m, s) => ((h * 3600) + (m * 60) + s) * 1000;

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
