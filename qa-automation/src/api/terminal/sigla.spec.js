import { test, chromium } from '@playwright/test';
import { terminalComSiglaMaiorQue6, terminalComSiglaMenorQue2, terminalComSiglaEspaco, terminalComSiglaCaractereEspecial, terminalComSiglaNumeral,terminalComSiglavazio } from '../../../fixtures/testData.js';
import { postarDados, verificarErro } from '../../../utils/requestUtils.js';

const baseUrl = 'http://localhost:3244/api/criarTerminal';
const token = 'token'; // Insira um token válido aqui

test('não deve criar um terminal com campo sigla contendo menos de 2 caracteres', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const resposta = await postarDados(context, baseUrl, token, terminalComSiglaMenorQue2);
  await verificarErro(resposta, 'Erro: o campo sigla deve ter entre 2 e 6 caracteres');

  await context.close();
  await browser.close();
});

test('não deve criar um terminal com campo sigla contendo mais de 6 caracteres', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const resposta = await postarDados(context, baseUrl, token, terminalComSiglaMaiorQue6);
  await verificarErro(resposta, 'Erro: o campo sigla deve ter entre 2 e 6 caracteres');

  await context.close();
  await browser.close();
});

test('não deve criar um terminal com campo sigla contendo espaço', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
  
    const resposta = await postarDados(context, baseUrl, token, terminalComSiglaEspaco);
    await verificarErro(resposta, 'Erro: o campo sigla deve ter entre 2 e 6 caracteres');
  
    await context.close();
    await browser.close();
  });

test('não deve criar um terminal com campo sigla contendo caractere especial', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
  
    const resposta = await postarDados(context, baseUrl, token, terminalComSiglaCaractereEspecial);
    await verificarErro(resposta, 'Erro: o campo sigla não pode conter caracteres especiais');
  
    await context.close();
    await browser.close();
  });

test('não deve criar um terminal com campo sigla contendo numeral', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
  
    const resposta = await postarDados(context, baseUrl, token, terminalComSiglaNumeral);
    await verificarErro(resposta, 'Erro: o campo sigla não pode conter números');
  
    await context.close();
    await browser.close();
  });

test('não deve criar um terminal com campo sigla vazio', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
  
    const resposta = await postarDados(context, baseUrl, token, terminalComSiglavazio);
    await verificarErro(resposta, 'Erro: o campo sigla no body não pode ser vazio');
  
    await context.close();
    await browser.close();
  });