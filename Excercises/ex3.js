/*

Given a word, look it up in a sentence and return how many times it appears in the sentence.

how to do it:
1. create a function that receives a word and a sentence
2. set the word and the sentence to lowercase and clean it up
3. check if the search is in the sentence
4.create an array with the words of the sentence
5. map those words and create a counter
6. return the counter

*/

function matchesCounter(sentence, search){
    let sentenceCleanedUp = sentence.toLowerCase().replace(/['!¿¡.,-]/gi, "");
    let counter = 0;
    if(sentenceCleanedUp.includes(search)){
        let words = sentenceCleanedUp.split(" ");
        let map ={};

        for(let word of words){
            if(map[word]){
                map[word]++;
            }else{
                map[word] = 1;
            }
        }
        
        counter = map[search];

    }else{
        counter=0;
        return `The word ${search} is not in the sentence`;
    }
    return `The word ${search} appears ${counter} times in the sentence`;

}

console.log(matchesCounter('hi', 'victor'));