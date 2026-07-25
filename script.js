const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const questionContainer =
document.getElementById("questionContainer");

const resultContainer =
document.getElementById("resultContainer");

let scale = 1;

function moveButton(){

    const buttonsBox =
    document.querySelector(".buttons");

    const maxX =
    buttonsBox.clientWidth -
    noBtn.offsetWidth;

    const maxY =
    buttonsBox.clientHeight -
    noBtn.offsetHeight;

    const x =
    Math.random() * maxX;

    const y =
    Math.random() * maxY;

    noBtn.style.left =
    x + "px";

    noBtn.style.top =
    y + "px";

    scale += 0.08;

    yesBtn.style.transform =
    `scale(${scale})`;
}

noBtn.addEventListener(
"click",
moveButton
);

noBtn.addEventListener(
"click",
moveButton
);

yesBtn.addEventListener(
"click",
()=>{

    questionContainer.style.display =
    "none";

    resultContainer.style.display =
    "block";

    createHearts();
});
    
function createHearts(){

    for(let i=0;i<100;i++){

        const heart =
        document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
        Math.random() *
        window.innerWidth + "px";

        heart.style.top =
        window.innerHeight + "px";

        heart.style.fontSize =
        (20 + Math.random()*40)
        + "px";

        document.body.appendChild(
        heart
        );

        setTimeout(()=>{
            heart.remove();
        },4000);
    }
}