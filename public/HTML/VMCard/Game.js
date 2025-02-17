const StartButton=document.getElementById("StartButton");
const MainContainer=document.querySelector(".MainContainer");
const MainSection=document.querySelector(".MainSection");

StartButton.addEventListener("click",()=>
{
    const SecondContainer=document.createElement("div");
    SecondContainer.classList.add("SecondContainer");

    let Word=document.createElement("p");
    Word.classList.add("Word");
    // Word.innerHTML="Smit";

    let SeenButton=document.createElement("button");
    SeenButton.classList.add("SeenButton");
    SeenButton.innerHTML="SEEN";
    
    let NewButton=document.createElement("button");
    NewButton.classList.add("NewButton");
    NewButton.innerHTML="NEW";

    let Boxes=document.createElement("div");
    Boxes.classList.add("Boxes");

    let ScoreText=document.createElement("p");
    ScoreText.classList.add("ScoreText");
    ScoreText.innerHTML="Score:";
    
    let LifeText=document.createElement("p");
    LifeText.classList.add("LifeText");
    LifeText.innerHTML="Life:";
    
    let ScoreBox=document.createElement("div");
    ScoreBox.classList.add("ScoreBox");
    ScoreBox.innerHTML="0";
    
    let LifeBox=document.createElement("div");
    LifeBox.classList.add("LifeBox");
    LifeBox.innerHTML="3";

    let br1=document.createElement("br");
    let br2=document.createElement("br");
    let br3=document.createElement("br");

    SecondContainer.appendChild(Word);
    SecondContainer.appendChild(br1);
    SecondContainer.appendChild(SeenButton);
    SecondContainer.appendChild(br2);
    SecondContainer.appendChild(NewButton);
    SecondContainer.appendChild(br3);
    
    Boxes.appendChild(ScoreText);
    Boxes.appendChild(ScoreBox);
    Boxes.appendChild(LifeText);
    Boxes.appendChild(LifeBox);
    
    SecondContainer.appendChild(Boxes);

    MainContainer.removeChild(MainSection);
    MainContainer.appendChild(SecondContainer);
})