let MainContainer=document.querySelector(".MainContainer");
let MainSection=document.querySelector(".MainSection");
let Startbutton=document.getElementById("Startbutton");

Startbutton.addEventListener("click",()=>
{
    AdSecondSection();
});

function AdSecondSection()
{
    let SecondSection=document.createElement("div");
    SecondSection.classList.add("SecondContainer");

    MainContainer.removeChild(MainSection);
    MainContainer.appendChild(SecondSection);

    let range=1;
    let level=0;

    function playGame()
    {
        range=range*10;
        let RandomNumber=Math.floor(Math.random()*range);
        
        let NumberElement=document.createElement("p");
        NumberElement.classList.add("NumberElement");

        NumberElement.innerHTML=RandomNumber;
        SecondSection.appendChild(NumberElement);

        setTimeout(()=>
        {
            SecondSection.removeChild(NumberElement);

            let Question=document.createElement("p");
            Question.innerHTML="What Was The Number??";
            Question.classList.add("Question");
            
            let command=document.createElement("p");
            command.innerHTML="Press enter to submit!!";
            command.classList.add("command");
            
            let EnterNumber=document.createElement("input");
            EnterNumber.type="text";
            EnterNumber.focus();            //through this line we don't have to focus on the input field
            EnterNumber.classList.add("EnterNumber");
            
            let SubmitButton=document.createElement("button");
            SubmitButton.classList.add("SubmitButton");
            SubmitButton.innerHTML="Submit!!";
            
            let br1=document.createElement("br");
            let br2=document.createElement("br");
            let br3=document.createElement("br");
            let br4=document.createElement("br");
            
            SecondSection.appendChild(Question);
            SecondSection.appendChild(br1);

            SecondSection.appendChild(command);
            SecondSection.appendChild(br2);
            
            SecondSection.appendChild(EnterNumber);
            SecondSection.appendChild(br3);
            
            SecondSection.appendChild(SubmitButton);
            SecondSection.appendChild(br4);

            SubmitButton.addEventListener("click",()=>{
                let UserGuess = parseInt(EnterNumber.value);
                if(RandomNumber === UserGuess){
                    SecondSection.innerHTML="";
                    level++;
                    playGame();
                }else{
                    AdThirdSection();
                }
            });
        },3000);
    }

    playGame();

    function AdThirdSection()
    {
        MainContainer.removeChild(SecondSection);
        
        let ThirdSection=document.createElement("div");
        ThirdSection.classList.add("ThirdSection");

        let warn=document.createElement("p");
        warn.classList.add("warn");
        warn.innerHTML=("WRONG NUMBER!!");

        let LevelText=document.createElement("p");
        LevelText.classList.add("LevelText");
        LevelText.innerHTML=`BETTER LUCK YOU REACHED TO : ${level} LEVEL !`;

        let retext=document.createElement("p");
        retext.classList.add("retext");
        retext.innerHTML="To play again press Restart Button";

        let retryButton=document.createElement("button");
        retryButton.classList.add("retryButton");
        retryButton.innerHTML="Restart";

        let b1=document.createElement("br");
        let b2=document.createElement("br");
        let b3=document.createElement("br");
        let b4=document.createElement("br");

        ThirdSection.appendChild(warn);
        ThirdSection.appendChild(b1);
        ThirdSection.appendChild(LevelText);
        ThirdSection.appendChild(b3);
        ThirdSection.appendChild(retext);
        ThirdSection.appendChild(b2);
        ThirdSection.appendChild(retryButton);
        ThirdSection.appendChild(b4);

        MainContainer.appendChild(ThirdSection);

        retryButton.addEventListener("click",()=>
        {
            MainContainer.removeChild(ThirdSection);
            MainContainer.appendChild(MainSection);
        })
    }
}