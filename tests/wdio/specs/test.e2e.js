const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/Login.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

    })
})

