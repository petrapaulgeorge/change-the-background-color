
function changeBg() {
    let result = ""
    let characters = "0123456789ABCDEF"

    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.body.style.backgroundColor = "#" + result;    
    document.body.style.transition = "0.3s" ;
}
