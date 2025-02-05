fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
.then((response)=>{
    if(!response.ok){
        console.log("THERE IS SOME ERROR TO FETCH THE DATA!!");
    }
    return response.json();
})

.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("THERE IS AN ERROR TO CONNECT THE SERVER!!!1");
})