// text typs

let textFirst="I Love Wordpress"
let a=-1
let b=textFirst.length-1
console.log(typeof(b))
function firstText(){
    a=a+1
    if(a<textFirst.length){
        document.querySelector(".home__about--first").innerHTML+=textFirst[a]
    }else{
        document.querySelector(".home__about--first").innerHTML=""
    }
}
setInterval(firstText,100)

