const isPalindrome = (str) => {
if (str.length <= 1) {
return true;
}
let mid = Math.floor(str.length / 2);
let left = mid - 1;
let right = str.length - mid;

while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) {
        return false;
    }
    
    left--;
    right++;
} 
return true; 
};
const checkPalindrome = (word) => {
if (isPalindrome(word)) {
console.log(`Слово ${word} является палиндромом`);
} else {
console.log(`Слово ${word} не является палиндромом`);
}
};
checkPalindrome("довод");
checkPalindrome("сантимент");