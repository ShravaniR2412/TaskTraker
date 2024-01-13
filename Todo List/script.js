
function displayMessage() {
    let message = document.getElementById('message')
    if (localStorage.length == 0) {
        message.innerHTML = '<h1> No Taks to display </h1>'
    }
    else {
        message.innerHTML = ""
    }
}



function displayTodo() {

    displayMessage()

    // console.log(localStorage.length)
    document.getElementById('todos-container').innerHTML = '';

    for (i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i)
        // console.log(key)
        // console.log(localStorage.getItem(key))

        let container = document.createElement('div')
        container.className = 'container'

        let heading = document.createElement('div')
        heading.className = 'heading';
        heading.innerHTML = '<h2>' + key + '</h2>';

        let description = document.createElement('div')
        description.className = 'description';
        description.innerHTML = '<p>' + localStorage.getItem(key) + '<p>';

        let deleteButton = document.createElement('div')
        deleteButton.className = 'btn-delete';
        deleteButton.innerHTML = '<button>' + 'DELETE' + '</button>';

        deleteButton.onclick = function () {
            deleteTodo(heading.textContent);
        };

        container.appendChild(heading)
        container.appendChild(description)
        container.appendChild(deleteButton)

        document.getElementById('todos-container').appendChild(container)

    }


}


displayTodo()


function getTodo() {
    let input_heading = document.getElementsByClassName('input-heading')[0].value
    console.log("INPUT-HEADING: ", input_heading)

    let input_description = document.getElementsByClassName('input-description')[0].value
    console.log("INPUT DESCRIPTION: ", input_description)

    localStorage.setItem(input_heading, input_description)
    
    let newTodo = {
        heading: input_heading,
        description: input_description
    }
    
    localStorage.setItem(input_heading, input_description)
    
    displayTodo()
    console.log("todo added in local storage successfully")

}

function deleteTodo(key) {
    console.log("delte btn")

    displayMessage()

    localStorage.removeItem(key)
    displayTodo()

}