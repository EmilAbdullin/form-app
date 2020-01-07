export function getAuthForm () {
    return `
    <form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
              <input type="email" id="auth-email-input" required>
              <label for="auth-email-input">Email</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
              <input type="password" id="auth-password-input" required>
              <label for="auth-password-input">Password</label>
            </div>
            <button type="submit" class="mui-btn mui-btn--primary">Авторизоваться</button>
    </form>
    `
}


export function authWithEmailAndPassword (email, password) {
    const apiKey = 'AIzaSyAY86TSIX5-TzIO1r_b1p684d16QUeaFeo';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
        method:'POST',
        body:JSON.stringify({
            email, password,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data.idToken)
}