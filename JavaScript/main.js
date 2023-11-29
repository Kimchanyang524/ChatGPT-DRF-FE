const quiz = document.querySelector('#quiz')
const count = document.querySelector('.test')

quiz.addEventListener('click', () => {
    tokencheck()
    const access = sessionStorage.getItem('access')
    if (access) {
        window.location.href = "http://43.200.125.52/quiz/"
    } else {
        alert('로그인이 필요합니다.')
        window.location.href = "http://43.200.125.52/accounts/login"
    }
})

personal_quiz = 5
count.innerHTML = "남은횟수 " + personal_quiz + "/5"

