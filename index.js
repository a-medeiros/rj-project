const title = document.getElementById("title");

const text = "Rio de Janeiro";
let i = 0

const type = () => {
    const word = text.split("");
    if(i < word.length) {
        title.textContent += word[i];
        i++;
        setTimeout(type, 120);
    }
}

const delay = () => {
    setTimeout(type, 1200);
}

delay();