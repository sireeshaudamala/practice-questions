// sumOf([1, 2, 3, 4]) => 10
const sumOf = (numbers) =>
  numbers.reduce((initial, element) => initial + element);

console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = (numbers) =>
  numbers.reduce((initial, element) => initial * element);

console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = (numbers) =>
  numbers.reduce((initial, element) => initial + element) / numbers.length;

console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = (numbers) =>
  numbers.reduce((initial, element) => (initial < element ? initial : element));

console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = (numbers) =>
  numbers.reduce((initial, element) => (initial > element ? initial : element));

console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = (numbers) =>
  numbers.reduce((initial, element) =>
    element > 0 ? element + initial : initial
  );

console.log(sumPositiveNumbers([1, -2, 3, -4, 5, -1]));

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = (numbers) =>
  numbers.reduce((initial, element) => initial + element * element);

console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = (number) => number % 2 === 1;

const sumOfOddNumbers = (numbers) =>
  numbers.filter(isOdd).reduce((initial, element) => initial + element);

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = (numbers) =>
  numbers.reduce(
    (initial, element) => (element < initial ? initial + 1 : initial, 0)
  );

console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20

const findSumOfEvenSquares = (numbers) =>
  numbers
    .filter((number) => number % 2 === 0)
    .reduce((initial, element) => initial + element * element, 0);

console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = (words) =>
  words.reduce((initial, element) => initial.concat(element), "");

console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = (words) =>
  words.reduce((initial, element) =>
    initial.length >= element.length ? initial : element
  );

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = (words) =>
  words.reduce((initial, element) =>
    initial.length <= element.length ? initial : element
  );

console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = (words) =>
  words.reduce((initial, element) => initial + "," + element);

console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = (words) =>
  words.reduce((initial, element) => element + " " + initial);

console.log(reverseWords(["hello", "world", "siree", "hari"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = (words) =>
  words.reduce((initial, element) => initial + " " + element);

console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = (names) =>
  names.reduce((initial, element) => initial.concat(element), "");

console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const noOfVowels = (initial, char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char) ? initial + char : initial;
};

const countVowelsInWords = (words) => {
  const string = words.join("").split("");
  return string.reduce(noOfVowels, "");
};

console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"])
// => "helloWorldHowAreYou"
const makeCamelWord = (initial, element) =>
  initial === ""
    ? initial + element
    : initial + (element.at(0).toUpperCase() + element.slice(1));

const makeCamelCase = (words) => words.reduce(makeCamelWord, "");

console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reversedString = (initial, element) =>
  initial + element.split("").reverse().join("");

const reverseString = (words) => words.reduce(reversedString, "");

console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = (numbers) =>
  numbers.reduce((initial, element) => {
    initial.push(element, element);
    return initial;
  }, []);

console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = (arrays) =>
  arrays.reduce((initial, element) => initial.concat(element));

console.log(
  concatenateArrays([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = (arrays) =>
  arrays.reduce((initial, element) => {
    initial.push(element);
    return initial.flat();
  }, []);

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = (numbers) =>
  numbers.reduce((init, number) => init.includes(number));

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = (strings) =>
  strings.reduce((lengthOfFruits, fruit) => {
    lengthOfFruits[fruit.length] = lengthOfFruits[fruit.length] || [];
    lengthOfFruits[fruit.length].push(fruit);
    return lengthOfFruits;
  }, {});

console.log(groupByLength(["apple", "banana", "cherry", "date"]));

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = (strings) =>
  strings.reduce((count, fruitName) => {
    count[fruitName] = (count[fruitName] || 0) + 1;
    return count;
  }, {});

console.log(countOccurrences(["apple", "banana", "cherry", "banana"]));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// console.log(mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]));

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {};
