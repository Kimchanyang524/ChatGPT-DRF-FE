function tokencheck() {
    const access = sessionStorage.getItem('access')
    fetch('http://13.209.138.142:8000/accounts/verify/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'token': access,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.code == "token_not_valid") {
                refreshtoken()
            }
        })
}

function refreshtoken() {
    const refresh = sessionStorage.getItem('refresh')
    fetch('http://13.209.138.142:8000/accounts/refresh_token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'token': refresh,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.access) {
                sessionStorage.setItem('access', data.access)
            } else {
                alert('로그인 사용자 정보가 부정확합니다 다시 로그인해주세요.')
                return logout()
            }
        })
}