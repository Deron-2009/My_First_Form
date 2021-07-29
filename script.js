window.alert("This is an very impotant webpage. It cntains a form. If you really want to continue, Click on 'OK'.")
const body=document.querySelector("body")
const style=document.querySelector("#style")
const fvrt=document.querySelector("#fvrtcolor")
const submit=document.querySelector("#submit")
const form=document.querySelector(".form")
const hidden=document.querySelector(".hidden")
const firstname=document.querySelector("#firstname")
const hiddentwo=document.querySelector(".hiddentwo")
style.addEventListener("click",
function(){
    body.style.backgroundColor=fvrt.value
})
submit.addEventListener("click",
function(){
    form.innerText="Thanks, You're response has been recorded!!! See that the background color is the color you chose before 😀 And your name is displayed here:"
    form.style.backgroundColor=fvrt.value
    form.className="submittime"
    hidden.innerText=firstname.value
    hiddentwo.innerText="Bye!!!"
    hidden, hiddentwo .className="hiddenpeople"
    hidden, hiddentwo .style.backgroundColor=fvrt.value
})