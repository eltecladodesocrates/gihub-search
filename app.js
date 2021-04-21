// Init Github
const github = new GitHub

// Init UI
const ui = new UI

// Search Input
const searchUser = document.querySelector('#searchUser')
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value
    if (userText !== '') {
        github.getUser(userText).then((data) => {
            if (data.profile.message === 'Not Found') {
                alert('User Not Found')
            } else {
                ui.showProfile(data.profile)
            }
        })
    }
})