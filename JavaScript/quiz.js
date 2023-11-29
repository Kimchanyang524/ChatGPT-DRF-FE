const quiz_title = document.querySelector('#quiz_title')
const question = document.querySelector('#question')
const answer = document.querySelector('#answer')
const submit = document.querySelector('#submit')

let correct = ''

submit.addEventListener('click', function () {
    tokencheck()
    const access = sessionStorage.getItem('access')
    let distinction = correct == answer.value
    if (distinction) {
        alert('정답입니다!')
    } else {
        alert('오답입니다! 정답은 ' + correct + '입니다!')
    }
    fetch('http://13.209.138.142:8000/quiz/chat/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'access': access,
            'question': question.textContent,
            'answer': answer.value,
            'correct': distinction,
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.redirect) {
                return quizend()
            } else {
                return nextquiz()
            }
        })
        .catch(error => {
            console.error('퀴즈 로드중 오류 발생:', error);
        });
})

function nextquiz() {
    fetch('http://13.209.138.142:8000/quiz/chat/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.content)
            const text = data.content
            quiz_title.innerHTML = '문제'
            question.innerHTML = text.split('*')[1]
            answer.value = ''
            correct = text.split('#')[1]
        })
        .catch(error => {
            console.error('퀴즈 로드중 오류 발생:', error);
        });
}
nextquiz()

function quizend() {
    alert('5문제 모두 풀었습니다!')
    window.location.href = "http://43.200.125.52/"
}