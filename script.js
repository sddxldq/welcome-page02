var bg = document.getElementById('bg')
var loading = document.getElementById('loading')

var int = setInterval(count, 30)

var num = 0
var blurrate
function count(){
    num++
    // blurrate = (100-num)*0.3
    num>100 ? clearInterval(int): loading.innerText = `${num}%`
    bg.style.filter = `blur(${(100-num)*0.3}px)`
    loading.style.opacity = `${1-num/100}`
} 



