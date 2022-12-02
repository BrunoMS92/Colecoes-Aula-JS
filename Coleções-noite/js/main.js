let title = document.getElementsByTagName("h1")
let subtitles = document.getElementsByClassName("subtitles")
// Veio no ES6
let paragraphs = document.querySelectorAll("p+h2+p")

console.log(title,subtitles,paragraphs,)

// Pegando elementos
title.item(0).innerText = "Título modificado via JS"

// Quando não existe a função foreach
for(const element of subtitles){
    element.style = "color:red;"    
}
paragraphs.forEach(
    (element, _,parent) => {
        element.style = "color:blue;"
        console.log(parent)
    }
)