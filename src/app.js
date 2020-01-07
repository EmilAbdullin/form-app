import {isValid} from './utils'
import './styles.css'


const form = document.getElementById('question-form');
const input = form.querySelector('#question-input');
const buttonSubmit = form.querySelector('#submit-question');

form.addEventListener('submit', submitFormHandler);
input.addEventListener('input',()=>{
    buttonSubmit.disabled = !isValid(input.value)
})

function submitFormHandler (event) {
    event.preventDefault()

    if( isValid(input.value) ) {
        const question = {
            text:input.value.trim(),
            date: new Date().toJSON()
        }
        buttonSubmit.disabled = true
        //Async request to server to save question
        input.value = ''
        input.className = ''
        submitFormHandler.disabled = false
    }
}