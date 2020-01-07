export class Question {
    static create(question){
        return fetch(`https://simple-form-app-54511.firebaseio.com/question.json`,{
            method:'POST',
            body:JSON.stringify(question),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(r => r.json())
        .then(r => {
            question.id = r.name
            return question
        })
        .then(addToLocalStorage)
        .then(Question.renderList)
    }

    static renderList () {
        const questions = getQuestionsFromLocalStorage();
        const html = questions.length
        ? questions.map(toCard).join('')
        : `<div class="mui--text-headline">Вопросы отсутствуют</div>`
        const list = document.getElementById('list-questions');
        list.innerHTML = html
    }

    static fetch (token){
        if(!token){
            return Promise.resolve('<p class="error">Отсутствует токен</p>')
        }
        return fetch(`https://simple-form-app-54511.firebaseio.com/question.json?auth=${token}`)
            .then(response => response.json())
            .then(res => {
                if(res.error && res) {
                    return `<p class="error">${res.error}</p>`
                }
                return res ? Object.keys(res).map(key => ({
                    ...res[key],
                    id: key
                })) : []
            })
    }

    static listToHTML(questions) {
        return questions.length
        ? `<ol>${questions.map( q => `<li>${q.text}</li>`).join('')}</ol>`
        : `<p>Вопросов пока нет</p>`
    }
}

   

function addToLocalStorage (question) {
    const allQuestions = getQuestionsFromLocalStorage();
    allQuestions.push(question);
    localStorage.setItem('questions',JSON.stringify(allQuestions));
}

function getQuestionsFromLocalStorage () {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard (question) {
    return `
    <div class="mui--text-black-54">
      ${new Date(question.date).toLocaleDateString()}
      ${new Date(question.date).toLocaleTimeString()}
    </div>
    <div>${question.text}</div>
    `
}