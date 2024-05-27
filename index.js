function* fib(n){
    var a=0;
    var b=1;
    var i=0;
    while(b<=n){
        var c=b+a;
        a=b;
        b=c;
        yield a;
    }
}
var n=10;
var ans=fib(n)
for(var i=0;i<n;i++){
   var result=ans.next();
   if(result.done)
   break;
    console.log(result.value);
}