/*
3. Longest Substring Without Repeating Characters
    Given a string s, find the length of the longest 
    substring
    without repeating characters.
*/

/*
Time Complexity
    O(n^2) 
*/



var lengthOfLongestSubstring = function(s){
    // store the maximum found length
    let maxLength = 0;
    // the begin of of unique substring
    let begin = 0;
    // store previous characters
    //Set data type MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    let set = new Set()
    // loop through the string
    for(let end = 0 ; end<s.length ; end++){
        // if set has the char start removing at the beginning 
        /*  assume
             set = {0:"a",1:"b",2:"c"}
             and you want to add c
             1- check if set has "c"
             2- if yes remove first cher and check
             3- continue checking and removing until you don't find c
             4- then add "c"
        */
        while(set.has(s[end])){
            set.delete(s[begin])
            begin = begin +1;
        }
        set.add(s[end])
        maxLength = Math.max(maxLength,end-begin+1)
    }
    console.log(set);
    return maxLength

}



console.log(lengthOfLongestSubstring("abcabcbb"));