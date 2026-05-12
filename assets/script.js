
// use a function to introduce a new p tag with the plaintext
function addNewText(){
    document.createElement('p').textContent = 'Our JS events are working'
}
// creat Element
// set its Content
// append its content
// const p = document.createElement('p')
// p.textContent = "Our JS events are working"
// document.getElementById('this').appendChild('this')

// function to display value entered
function showValue(){
    let name = document.getElementById("username").value
    alert(name)
}