var a=0;
var b=1;
var c=0;
var sum=0;

while(c<4000000){
    if(a%2===0){
        sum=sum+a;
        a=b+c;
        b=c;
        c=a;
    }else{
        a=b+c;
        b=c;
        c=a;
    }
}
console.log(a);
console.log(b);
console.log(c);
console.log(sum);