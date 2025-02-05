let StartButton = document.getElementById("StartButton");
let MainContainer = document.querySelector(".MainContainer");
let MainSection = document.querySelector(".MainSection");

StartButton.addEventListener("click", () => {
    let SecondContainer = document.createElement("div");
    SecondContainer.classList.add("SecondContainer");
    
    //this is the container where the all the boxes will be appear
    let Gamecontainer=document.createElement("div");
    Gamecontainer.classList.add("Gamecontainer");

    //this is the elements in which the level and lives will be shown

    //this is the level box
    let InfoDiv=document.createElement("div");
    InfoDiv.classList.add("InfoDiv");

    let LevelBox=document.createElement("div");
    LevelBox.classList.add("LevelBox");

    let LevelText=document.createElement("p");
    LevelText.classList.add("LevelText");
    LevelText.innerHTML="Level : ";

    let LevelNumber=document.createElement("p");
    LevelNumber.classList.add("LevelNumber");
    LevelNumber.innerHTML="0";

    

    //from this the Live container will be start
    let LivesBox=document.createElement("div");
    LivesBox.classList.add("LivesBox");

    let LivesText=document.createElement("p");
    LivesText.classList.add("LivesText");
    LivesText.innerHTML="Lives : ";
    
    let heart1=document.createElement("i");
    let heart2=document.createElement("i");
    let heart3=document.createElement("i");

    heart1.classList.add("bi", "bi-suit-heart-fill");
    heart2.classList.add("bi", "bi-suit-heart-fill");
    heart3.classList.add("bi", "bi-suit-heart-fill");

    let BoxesContainer=document.createElement("div");
    BoxesContainer.classList.add("BoxesContainer");

    let row1=document.createElement("div");
    row1.classList.add("row");
    let row2=document.createElement("div");
    row2.classList.add("row");
    let row3=document.createElement("div");
    row3.classList.add("row");

    let box1=document.createElement("button");
    box1.classList.add("box");
    let box2=document.createElement("button");
    box2.classList.add("box");
    let box3=document.createElement("button");
    box3.classList.add("box");
    let box4=document.createElement("button");
    box4.classList.add("box");
    let box5=document.createElement("button");
    box5.classList.add("box");
    let box6=document.createElement("button");
    box6.classList.add("box");
    let box7=document.createElement("button");
    box7.classList.add("box");
    let box8=document.createElement("button");
    box8.classList.add("box");
    let box9=document.createElement("button");
    box9.classList.add("box");














    //this is the appended process

    LevelBox.appendChild(LevelText);
    LevelBox.appendChild(LevelNumber);

    LivesBox.appendChild(LivesText);
    LivesBox.appendChild(heart1);
    LivesBox.appendChild(heart2);
    LivesBox.appendChild(heart3);
    
    InfoDiv.appendChild(LevelBox);
    InfoDiv.appendChild(LivesBox);
    
    BoxesContainer.appendChild(row1);
    row1.appendChild(box1);
    row1.appendChild(box2);
    row1.appendChild(box3);
    BoxesContainer.appendChild(row2);
    row2.appendChild(box4);
    row2.appendChild(box5);
    row2.appendChild(box6);
    BoxesContainer.appendChild(row3);
    row3.appendChild(box7);
    row3.appendChild(box8);
    row3.appendChild(box9);

    Gamecontainer.appendChild(InfoDiv);
    Gamecontainer.appendChild(BoxesContainer);
    SecondContainer.appendChild(Gamecontainer);

    MainContainer.removeChild(MainSection);
    MainContainer.appendChild(SecondContainer);
})




/* this is the code for the loose the one chance of the game

heart1.classList.add("bi", "bi-heartbreak-fill");
heart1.style.opacity="0.5";


*/