class GitHub {
    constructor() {
        this.client_id = 'bab853d8b1da4896c687'
        this.client_secret = 'e7f68d6438ec8b2d0b0e7c527ab06f3ccaf2c111'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json()
        return {
            profile
        }
    }
}