let SeenWord=[];

StartButton.addEventListener("click",()=>{
    FetchNewWord();

    let NewButton=document.querySelector(".NewButton");
    
    NewButton.addEventListener("click",HandleNew);
    let SeenButton=document.querySelector(".SeenButton");
    
    SeenButton.addEventListener("click",HandleSeen);
    
});

async function FetchNewWord(){
    // let newWord;
    // if(SeenWord.length > 0 && Math.random() < 0.3){
    //     newWord = SeenWord[Math.floor(Math.random() * SeenWord.length)];
    // }else{
    //     await fetch("https://random-word-api.herokuapp.com/word")
    //     .then((response)=>{
    //         if(!response.ok){
    //             console.log("THERE IS SOME ERROR THE FETCH THE DATA !!");
    //         }
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         newWord=data[0];
    //     })
    //     .catch((error)=>{
    //         console.log("THERE IS AN ERROR TO CONNECT PLEASE TRY AGAIN LATER!!");
    //     })
    // }
    // document.querySelector(".Word").innerHTML=newWord;

    let newWord;

    // Decide randomly whether to pick from SeenWord or fetch from the API
    if (SeenWord.length > 0 && Math.random() < 0.3) { // 30% chance to pick from SeenWord
        newWord = SeenWord[Math.floor(Math.random() * SeenWord.length)]; // Pick a random word from SeenWord
    } else {
        // Fetch a new word from the API
        try {
            const response = await fetch("https://random-word-api.herokuapp.com/word");
            if (!response.ok) {
                console.log("THERE IS SOME ERROR FETCHING THE DATA!");
                return;
            }
            const data = await response.json();
            newWord = data[0];
        } catch (error) {
            console.log("THERE IS AN ERROR CONNECTING. PLEASE TRY AGAIN LATER!");
            return;
        }
    }
    document.querySelector(".Word").innerHTML = newWord;
};

function HandleNew(){
    let currentWord=document.querySelector(".Word").innerHTML;
    if(SeenWord.includes(currentWord)){
        ManageLife();
    }else{
        SeenWord.push(currentWord);
        ManageScore();
        FetchNewWord();
    }
}

function HandleSeen(){
    let currentWord=document.querySelector(".Word").innerHTML;

    if(SeenWord.includes(currentWord)){
        ManageScore();
        FetchNewWord();
    }else{
        ManageLife();
    }
}

function ManageScore(){
    let ScoreBox=document.querySelector(".ScoreBox");
    let ScoreText=parseInt(ScoreBox.innerHTML);

    let NewScore=ScoreText+1;
    ScoreBox.innerHTML=NewScore;
}

function ManageLife(){
    let LifeBox=document.querySelector(".LifeBox");
    if(LifeBox.innerHTML=="3"){
        LifeBox.innerHTML="2";
        FetchNewWord();
    }else if(LifeBox.innerHTML=="2"){
        LifeBox.innerHTML="1";
        FetchNewWord();
    }else if(LifeBox.innerHTML=="1"){
        LifeBox.innerHTML="0";
        alert("GAME OVER");
        let ScoreText=document.querySelector(".ScoreBox").innerHTML;
        Restart(ScoreText);
    }

}

function Restart(ScoreText){
    SeenWord.length=0;
    let LifeBox=document.querySelector(".LifeBox");
    let ScoreBox=document.querySelector(".ScoreBox");
    LifeBox.innerHTML="3";
    ScoreBox.innerHTML="0";
    
    AppendResult(ScoreText);
}

function AppendResult(ScoreText){
    let SecondContainer=document.querySelector(".SecondContainer");

    MainContainer.removeChild(SecondContainer);

    let ResultContainer=document.createElement("div");
    ResultContainer.classList.add("ResultContainer");
    
    let result=document.createElement("p");
    result.classList.add("result");
    result.innerHTML=`YOU REMEMBER ${ScoreText} WORD`;


    let RetryButton=document.createElement("button");
    RetryButton.classList.add("RetryButton");
    RetryButton.innerHTML="Retry";

    RetryButton.addEventListener("click",()=>{
        MainContainer.removeChild(ResultContainer);
        MainContainer.appendChild(MainSection);
    })
    ResultContainer.appendChild(result);
    ResultContainer.appendChild(RetryButton);
    MainContainer.appendChild(ResultContainer);
};

