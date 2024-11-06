// tests/home.spec.js

const { test, expect } = require('@playwright/test');
const Login = require('../src/pages/login');
const RedefinirSenha = require('../src/pages/redefinirSenha');

test('Verificar usuário logado', async ({ page }) => {
    const loginPage = new Login(page);
    
    await loginPage.goToLoginPage();
    await loginPage.fillCredentials('luana.castro@sinart.com.br', '270204@vc');
    await loginPage.signIn();
    await loginPage.verifyUserLoggedIn('Welcome, luana beatriz!');
});

test('Redefinir senha', async ({ page }) => {
    const redefinirSenhaPage = new RedefinirSenha(page);
    
    await redefinirSenhaPage.goToForgotPasswordPage();
    await redefinirSenhaPage.fillEmail('luana.castro@sinart.com.br');
    await redefinirSenhaPage.resetPassword();
    await redefinirSenhaPage.verifyConfirmationMessage('If there is an account associated with');
});
