// This problem was asked by Palantir.

// Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

// More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

// If you can only fit one word on a line, then you should pad the right-hand side with spaces.

// Each word is guaranteed not to be longer than k.

// For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

// ["the  quick brown", # 1 extra space on the left
// "fox  jumps  over", # 2 extra spaces distributed evenly
// "the   lazy   dog"] # 4 extra spaces distributed evenly

const spaces = 16;
const words = [
  'the',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
];

//approach: look at each element's length and add 1 to the length(accounts for the space), if added to a total of element's length and the total element's length is less than k, add it to the justified element. if k minus the element's length is an even number, divide that by two and join the elements by that many spaces. if it is an odd number, add one space after the first word.

function justifyText(k, arr) {
  let elemLenCount = 0;
  let justifiedArr = [];
  let finalArr = [];
  while (arr.length > 0) {
    const currElem = arr[0];
    if (elemLenCount === 0) {
      elemLenCount += currElem.length;
      justifiedArr.push(arr.shift());
    } else if (elemLenCount + currElem.length + justifiedArr.length < k) {
      elemLenCount += currElem.length;
      justifiedArr.push(arr.shift());
    } else {
      finalArr.push(addPadding(k, elemLenCount, justifiedArr));
      elemLenCount = 0;
      justifiedArr = [];
    }
  }
  finalArr.push(addPadding(k, elemLenCount, justifiedArr));
  return finalArr
}

console.log(justifyText(spaces, words));

function addPadding(k, elLenCount, justifiedArr) {
  let spaceNum = k - elLenCount;
  let addPad = 0;
  if (spaceNum % 2 === 1) {
    addPad = 1;
  }
  let spaceForJoin = ' '.repeat(spaceNum / 2);
  let spaceForElem0 = ' '.repeat(addPad);
  justifiedArr[0] = justifiedArr[0] + spaceForElem0;
  let justElement = [justifiedArr.join(spaceForJoin)];
  return justElement;
}
