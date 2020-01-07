import {Question} from './question'
import {isValid} from './utils'
import {createModal} from './utils'
import { getAuthForm, authWithEmailAndPassword } from './auth';
import './styles.css'



const form = document.getElementById('question-form');
const input = form.querySelector('#question-input');
const buttonSubmit = form.querySelector('#submit-question');
const buttonModal = document.getElementById('modal-button');

window.addEventListener('load',Question.renderList)
form.addEventListener('submit', submitFormHandler);
buttonModal.addEventListener('click',openModal)
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
        Question.create(question)
        .then(()=>{
            input.value = ''
            input.className = ''
            buttonSubmit.disabled = false
        })
        
    }
}



function openModal () {
    createModal('Авторизация',getAuthForm())
    document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, {once:true})
}

function authFormHandler(event){
    event.preventDefault()
    const btn = event.target.querySelector('button')
    const email = event.target.querySelector('#auth-email-input').value
    const password = event.target.querySelector('#auth-password-input').value
    btn.disabled = true
    authWithEmailAndPassword(email, password)
    .then(Question.fetch)
    .then(renderModalAfterAuth)
    .then(()=> btn.disabled = false)
}


function renderModalAfterAuth(content){
    if(typeof content === 'string') {
        createModal('Ошибка', content)
    }else{
        createModal('Список вопросов', Question.listToHTML(content))
    }
}