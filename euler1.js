var sum = 0;
var i =1;

while(i<1000){
    if(i%3===0 || i%5===0){
        sum += i;
        i+=1;
    }else{
        i+=1;
    }
}
console.log(sum);