let h1=document.createElement('h1')
h1.innerText="Welcome" // this dooesnt allow html tags , displays them as text 
h1.innerHTML="<span>welcome</span>"
h1.setAttribute('id','heading')
// document.body.append(h1)
let div=document.getElementById("alert")
div.append(h1)

// create a immage from js and attributes src, height,width,alt

let img=document.createElement('img')
img.setAttribute('src','./pexels.jpg')
img.setAttribute('alt','landsape image')
// img.setAttribute('height','200px')
// img.setAttribute('width','200px')
// img.style.height='100px'
// img.style.width='100px'
img.style.cssText +='height:200px;width:200px'
document.body.append(img)

let list=document.querySelectorAll(".welcome")
 let list1=document.querySelector('.welcome')
console.log(list1)
for(var i=0;i<=list.length;i++){
    list[i].style.backgroundColor='green'
}

let heading=document.createElement('h1')
let span=document.createElement('span')
heading.append(span)
// heading.append("welcome")
// heading.appendChild("welcome") // this doesnt work append child doesnot allow text to be appended
// append allows multiple elemts to append example
// heading.append('welcome',span,span1)
document.body.append(heading)


let 