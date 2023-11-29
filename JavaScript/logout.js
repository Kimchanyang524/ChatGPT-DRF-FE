function logout() {
    const logoutConfirm = confirm('정말로 로그아웃 하시겠습니까?')
    if (logoutConfirm) {
        fetch('http://13.209.138.142:8000/accounts/auth/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert('로그아웃에 성공하였습니다!')
                    sessionStorage.removeItem('access')
                    sessionStorage.removeItem('refresh')
                    window.location.href = "http://43.200.125.52/"
                } else {
                    alert('로그아웃에 실패하였습니다!')
                    window.location.href = "http://43.200.125.52/"
                }
            })
            .catch(error => {
                console.error('로그아웃 중 오류 발생:', error);
            });
    }
}