var count =1;
const interval = setInterval(function(){
    console.log("set Interval")
    count ++;
    if (count > 5) clearInterval(interval)
},2000)