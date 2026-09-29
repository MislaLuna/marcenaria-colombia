# Como abrir o site da Marcenaria Colômbia no seu computador (Windows)

Este guia é para quem **nunca usou React**. Siga os passos na ordem, sem pular nenhum.
Você vai precisar de **internet** (para baixar os programas e para carregar as fontes do site).

---

## Passo 0 — Descompactar a pasta

O projeto veio em um arquivo `.zip`. **Não dá para rodar de dentro do .zip.**

1. Clique com o botão direito no arquivo `marcenaria-colombia.zip`.
2. Clique em **Extrair Tudo...**
3. Escolha um lugar simples, por exemplo `C:\` (o resultado será `C:\marcenaria-colombia`).
4. Clique em **Extrair**.

Dentro da pasta extraída você deve ver os arquivos `package.json`, `index.html` e a pasta `src`.
Se você não vê o `package.json`, abra mais uma pasta: ele está dentro de outra `marcenaria-colombia`.

---

## Passo 1 — Instalar o Node.js

O Node.js é o programa que faz o site funcionar no seu computador.

1. Abra o navegador e acesse **https://nodejs.org**
2. Clique no botão grande escrito **LTS** (é a versão recomendada).
3. Abra o arquivo baixado e clique em **Next** (Avançar) até o fim, deixando tudo como está.
4. Clique em **Install** e depois em **Finish**.
5. **Reinicie o computador** (isso evita erros no passo 5).

---

## Passo 2 — Instalar o VS Code

O VS Code é um programa para abrir e ver os arquivos do projeto. Ele ajuda, mas o site roda mesmo sem ele (veja a dica do Passo 4).

1. Acesse **https://code.visualstudio.com**
2. Clique em **Download for Windows**.
3. Abra o arquivo baixado e aceite o contrato.
4. Quando aparecerem as caixinhas de opções, marque **"Adicionar ao PATH"** e as opções **"Abrir com Code"**.
5. Clique em **Instalar** e depois em **Concluir**.

---

## Passo 3 — Abrir a pasta do projeto

1. Abra o **VS Code**.
2. Clique em **Arquivo** > **Abrir Pasta...**
3. Escolha a pasta **marcenaria-colombia** (a que tem o `package.json` dentro) e clique em **Selecionar Pasta**.
4. Se aparecer uma pergunta "Você confia nos autores?", clique em **Sim, eu confio**.

---

## Passo 4 — Abrir o terminal

O terminal é uma janela onde você digita comandos.

- **No VS Code:** clique em **Terminal** (menu de cima) > **Novo Terminal**. Uma janela vai abrir na parte de baixo.

> **Dica sem VS Code:** abra a pasta `marcenaria-colombia` no Explorador de Arquivos, clique na barra de endereço (onde aparece o caminho), apague o texto, digite `cmd` e aperte **Enter**. Vai abrir uma janela preta já na pasta certa.

---

## Passo 5 — Instalar o projeto

No terminal, digite o comando abaixo e aperte **Enter**:

```
npm install
```

- Vai demorar de 1 a 3 minutos. Aparecem várias linhas: é normal.
- Avisos em amarelo (`npm warn`) **podem ser ignorados**.
- Termina quando você volta a ver o cursor piscando, com o caminho da pasta na frente.
- Você só precisa fazer este passo **uma vez**.

---

## Passo 6 — Ligar o site

Digite este comando e aperte **Enter**:

```
npm run dev
```

Vai aparecer algo assim:

```
  VITE v5.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
```

---

## Passo 7 — Ver o site

O navegador deve abrir sozinho. Se não abrir, abra o navegador e digite na barra de endereço:

```
http://localhost:5173/
```

(Se o terminal mostrar outro número depois dos dois pontos, use o que aparece lá.)

Pronto! Você deve ver a Home da Marcenaria Colômbia.

**Para desligar o site:** clique no terminal e aperte **Ctrl + C**.
**Para ligar de novo outro dia:** abra a pasta no terminal e rode só `npm run dev` (não precisa repetir o `npm install`).

---

## Se algo der errado

| O que aparece | O que fazer |
|---|---|
| `npm não é reconhecido como um comando` | O Node.js não foi instalado ou o computador não foi reiniciado. Refaça o Passo 1 e reinicie. |
| Erro vermelho falando de **scripts desabilitados** / `PSSecurityException` (no PowerShell) | Use o **Prompt de Comando**: no terminal do VS Code, clique na setinha ao lado do **+** e escolha **Command Prompt**. Ou use a dica do `cmd` no Passo 4. |
| `Could not read package.json` ou `ENOENT` | Você está na pasta errada. Abra a pasta que contém o arquivo `package.json` (Passo 0). |
| A página abre em branco | Aperte **F12** no navegador, clique na aba **Console** e me envie uma foto (print) do que estiver em vermelho. |
| O texto aparece com fonte diferente | As fontes vêm da internet. Confira se você está conectado. |
| Outro programa já usa a porta 5173 | O Vite escolhe outra porta sozinho. Use o endereço que ele mostrar no terminal. |

Nesta primeira etapa, apenas a **Home** está pronta. Os outros links do menu mostram "Em construção" de propósito.
