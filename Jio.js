var a = 4
for(var i=0;i<100;i++) {
    fetch(`https://api.mathjs.org/v4/?expr=${i*i}`).then((res) => {
     console.log(res.text().then((data)=>{
           console.log(`squares for`,data);
     }))
})}
