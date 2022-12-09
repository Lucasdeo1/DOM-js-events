var a = window.document.getElementById('area')

a.addEventListener( 'click',clicked )
a.addEventListener('mouseenter',enter)
a.addEventListener('mouseout', exit)


function clicked() {
    a.innerText = 'Clicked!'
    a.style.background = 'orange'
}

function enter() {
    a.innerText = 'Entered!'
    a.style.background = 'green'

}

function exit() {
    a.innerText = 'Exited!' 
    a.style.background = 'red'
}