 for(x=1;x<10;x++)
 {
    var list=[]
    for(y=1;y< 10;y++)
    {
        
        ans=x*y;
        list.push(y+"*"+x+"="+ans+'\t');
    }
    console.log(list.join());
 }
