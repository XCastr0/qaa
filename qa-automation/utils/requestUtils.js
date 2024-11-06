import { expect } from '@playwright/test';

export async function postarDados(context, url, token, dados) {
    return await context.request.post(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: dados,
    });
  }
  
  export async function verificarErro(resposta, mensagemEsperada) {
    expect(resposta.status()).toBe(400);
    const respostaJson = await resposta.json();
    expect(respostaJson).toEqual(
      expect.objectContaining({
        error: expect.stringContaining(mensagemEsperada),
      })
    );
  }
  