/*

given a text and a search, censor all matches of the search in the text with "[-CENSORED-]".



how to do it:
1. create a function that receives the text and the search.
2.conditions in case any of the parameters is empty.
3. replace all matches of the search with [-CENSORED-].

*/

function censor(text=false, search=false){

    let result = "";
    if(!text && !search){
        result = "Cannot read text or search";
    }else if(!text && search){
        result = "Cannot read text";
    }else if(text && !search){      
        result = "Cannot read search";
    }else if(text && search){
        result = text.replace(new RegExp(search, "gi"), "[-CENSORED-]");
    }
    return result;
}

console.log(censor("this is a test", "is"));