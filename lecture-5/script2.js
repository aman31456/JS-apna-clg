const arrowSum = (a,b) => {
    console.log(a + b);
};
arrowSum(3,4);

const arrowSum1 = (x,y) => {
    return x*y;
};
arrowSum1(3,4);
console.log(arrowSum1(3,4));

// Practice Question 1

function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || 
           str[i] === "e" || 
           str[i] === "i" || 
           str[i] === "o" || 
           str[i] === "u"){
            count++;
        }
    }
    return count;
}
countVowels("apnacollege");
console.log(`NO. of Vowels in 'apnacollege' = ${countVowels("apnacollege")}`);