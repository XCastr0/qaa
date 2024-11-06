import { test, chromium } from '@playwright/test';
import { terminalComNomeVazio } from '../../../fixtures/testData.js';
import { postarDados, verificarErro } from '../../../utils/requestUtils.js';

const baseUrl = 'http://localhost:3244/api/criarTerminal';
const token = 'token'; // Insira um token válido aqui


test('não deve criar um terminal com campo nome vazio', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const resposta = await postarDados(context, baseUrl, token, terminalComNomeVazio);
  await verificarErro(resposta, 'Erro: o campo nome no body não pode ser vazio');

  await context.close();
  await browser.close();
});

test('não deve criar um terminal com campo nome contenco menos de 3 caracteres', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
  
    const resposta = await postarDados(context, baseUrl, token, terminalComNomeVazio);
    await verificarErro(resposta, 'Erro: o campo nome no body não pode ser vazio');
  
    await context.close();
    await browser.close();
  });
