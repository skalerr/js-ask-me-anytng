export function getAuthForm() {
  return `
    <form class="mui-form" id="auth-form"> 
    <div
    class="mui-textfield mui-textfield--float-label">
      <input type="email" id="email">
      <label for="email">Email</label>
    </div>
    <div
    class="mui-textfield mui-textfield--float-label">
      <input type="password" id="password">
      <label for="password">Ваш пароль</label>
    </div>

    <!--   КНОПОЧКА -->

    <button type="submit"
    class="mui-btn mui-btn--raised button12" 
    // mui-btn--primary
    >
      Войти
    </button>
  </form>`
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = "AIzaSyCJzY2KUzg3OtiTbnKPMsAtNnXs4EUHrFk"
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.idToken)
}
