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
console.log(maxProfit([3,4,1,4,7]))
