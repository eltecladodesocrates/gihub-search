class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
    }
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card">
                <div>
                    <img src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
                </div>
                <div class="baches">
                    <span>Public Repos: ${user.public_repos}</span>
                    <span>Public Gists: ${user.gists}</span>
                    <span>Followers: ${user.followers}</span>
                    <span>Following: ${user.following}</span>
                </div>
                <ul class="list-group">
                    <li>Company: ${user.company}</li>
                    <li>Website-Blog: ${user.blog}</li>
                    <li>Location: ${user.location}</li>
                    <li>Member Since: ${user.created_at}</li>
                </ul>
            </div>
        `
    }

    showAlert(message, className) {

        this.clearAlert()
        const searchContainer = document.querySelector('.search-container')
        const searchCard = document.querySelector('.search-card')

        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))

        searchContainer.insertBefore(div, searchCard)
        // Timeout after 3 secs
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
        
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }

    clearProfile() {
        this.profile.innerHTML = ''
    }
}