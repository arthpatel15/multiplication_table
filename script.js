function print(){
    var num = Number(document.getElementById("num").value)
    var anwser = ""
    document.getElementById("title").innerHTML = "Table of "+num
    document.getElementById("star").innerHTML = "******************"
    for(let i = 1; i<=10; i++){
        anwser = anwser + "<p>" + num + "x" + i + "=" + num * i + "</p>"
    }
   document.getElementById("tablediv").innerHTML = anwser
}

var input = document.getElementById("num")

input.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById("btn").click()
    }
})