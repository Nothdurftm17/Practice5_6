var maxProfit = function(prices) {
    var buyDay = 0;
    var sellDay = 1;
    var mProfit = 0;

    while(sellDay < prices.length){
        // console.log(buy)
        if (prices[buyDay] < prices[sellDay]){
            let profit = prices[sellDay] - prices[buyDay]
            mProfit = Math.max(mProfit, profit)
        }
        else{
            buyDay = sellDay
        }
        sellDay++
    };
    if (mProfit <= 0 ){
        return "No transactions are done" 
    }

    return "Max Profit: " + mProfit
}
// console.log(maxProfit([3,4,1,4,7]))


// go through each character of a string 
// there are no duplicates allowed in substring 
// check if there are any sub strings in the string 
// store substring as maxSubstring and continue through string 
// compare current maxSubString to the potential substrings that follow
var lengthOfLongestSubstring = function(s) {
    var maxSub = 0;
    var sub = "";
    var l = 0;

    for(var l = 0; l < s.length;l++){
        for(var r = l; r < s.length; r++){
            if(!sub.includes(s[r])){
                sub += s[r]
                console.log(sub)
                maxSub = Math.max(maxSub, sub.length)
            }
            else{
                sub = ""
                break
            }
        }
    }
    
    return "Longest Substring: ", maxSub;
};
console.log(lengthOfLongestSubstring("dvdf"))

// var lengthOfLongestSubstring = function(s) {
//     const sub = new Set();
//     l = 0
//     res = 0

//     for (var r = 0; r < s.length; r++){
//         console.log(sub)
//         if (sub.includes(s[r])){
//             sub.delete(s[l])
//             l++
//         }
//         sub.add(s[r])
//         res = Math.max(res, r - l)
//     }
//     return res
// }

// console.log(lengthOfLongestSubstring("abcabcbb"))