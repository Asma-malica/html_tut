//select popupbox popupoverlay button

var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbut=document.getElementById("popup")

addpopupbut.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelbut=document.getElementById("cancel-pop")
cancelbut.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

//select conatiner,add-book,book-tit,book-aut,book-des

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktit=document.getElementById("book-tit")
var bookaut=document.getElementById("book-aut")
var bookdes=document.getElementById("book-des")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${booktit.value}</h2>
    <h5>${bookaut.value}</h5>
    <p>${bookdes.value}</p>
    <button onclick="deletebook(event)">DELETE</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}