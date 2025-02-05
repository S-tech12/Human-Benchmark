const StartButton=document.getElementById("StartButton");
const MainContainer=document.querySelector(".MainContainer");
const MainSection=document.querySelector(".MainSection");

StartButton.addEventListener("click",()=>{
    const SecondContainer=document.createElement("div");
    SecondContainer.classList.add("SecondContainer");

    const WaitText=document.createElement("p");
    WaitText.classList.add("WaitText");
    WaitText.innerHTML="Wait For Green!!";

    SecondContainer.appendChild(WaitText);

    MainContainer.removeChild(MainSection);
    MainContainer.appendChild(SecondContainer);

    const RandomTime=Math.floor(Math.random()*9000)+1000;
    setTimeout(()=>{
        greenTime = Date.now();
        // console.log(greenTime);
        SecondContainer.removeChild(WaitText);

        const ClickText=document.createElement("p");
        ClickText.classList.add("ClickText");
        ClickText.innerHTML="Click!!";

        SecondContainer.style.backgroundColor="#3EC70B";
        SecondContainer.appendChild(ClickText);

        SecondContainer.addEventListener("click",()=>{
            // console.log(Date.now());
            const reactionTime = Date.now() - greenTime;
            SecondContainer.removeChild(ClickText);

            SecondContainer.style.backgroundColor="#0F6292";

            const result=document.createElement("p");
            result.classList.add("result");
            result.innerHTML=`YOUR REACTION TIME IS: ${reactionTime} ms`;

            const RetryButton=document.createElement("button");
            RetryButton.classList.add("retryButton");
            RetryButton.innerHTML="Restart";

            const RetryText=document.createElement("p");
            RetryText.classList.add("RetryText");
            RetryText.innerHTML="To play once agin click on the Restart Button";


            SecondContainer.appendChild(result);
            SecondContainer.appendChild(RetryText);
            SecondContainer.appendChild(RetryButton);

            RetryButton.addEventListener("click",()=>{
                MainContainer.removeChild(SecondContainer);
                MainContainer.appendChild(MainSection);
            })
        })
    },RandomTime);
})