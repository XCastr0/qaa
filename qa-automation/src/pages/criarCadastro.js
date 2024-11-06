/*pageObjects/Cadastro.js

class Cadastro {
    constructor(page) {
        this.page = page;
        this.firstNameInput = 'input[name="firstname"]';
        this.lastNameInput = 'input[name="lastname"]';
        this.emailInput = 'input[name="email"]';
        this.passwordInput = 'input[name="password"]';
        this.confirmPasswordInput = 'input[name="password_confirmation"]';
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.successMessageLocator = '.message-success';
    }

    async goToRegisterPage() {
        await this.page.goto('https://magento.softwaretestingboard.com');
        await this.page.locator('.register-link').first().click(); // Acesse a página de registro
    }

    async fillRegistrationForm(firstName, lastName, email, password) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.fill(this.confirmPasswordInput, password); // Assumindo que a confirmação é igual à senha
    }

    async submitRegistration() {
        await this.registerButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyRegistrationSuccess(expectedMessage) {
        const successMessage = this.page.locator(this.successMessageLocator);
        await expect(successMessage).toHaveText(expectedMessage);
    }
}

module.exports = Cadastro;*/
