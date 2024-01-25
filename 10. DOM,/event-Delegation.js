/*
    Event Delegation
    Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every 
 similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
*/

// const customUI = document.createElement('ul');

// for (var i = 1; i <= 10; i++) {
//     const newElement = document.createElement('li');
//     newElement.textContent = "This is line " + i;
//     newElement.addEventListener('click', () => {
//         console.log('Responding')
//     })
//     customUI.appendChild(newElement);
// }

//



const customUI = document.createElement('ul');

function responding() {
    console.log('Responding')
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    newElement.addEventListener('click', responding)
    customUI.appendChild(newElement);
}