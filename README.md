# ChatGPT Clone

Este é um projeto de clone do ChatGPT, desenvolvido em JavaScript usando Node.js e algumas tecnologias adicionais. 

## Descrição

O ChatGPT Clone é uma implementação simplificada e personalizável de um modelo de linguagem baseado no GPT-3.5 para criar assistentes de chat. Este projeto foi inspirado pelo modelo da OpenAI, mas não tem conexão direta com eles.

## Funcionalidades Principais

- **Conversação Interativa:** Interaja com o modelo em uma conversa por meio de mensagens de entrada.
- **Personalização:** Adapte o comportamento do modelo de acordo com suas necessidades específicas.
- **API Simples:** Utilize uma API amigável para integrar o modelo em seu próprio aplicativo ou serviço.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Express:** Framework web para construir aplicativos web e APIs.
- **CORS:** Middleware para habilitar o controle de acesso HTTP.
- **Dotenv:** Carrega variáveis de ambiente de um arquivo `.env`.
- **OpenAI:** API da OpenAI para integração com o modelo GPT.

## Requisitos

- Node.js
- Dependências do projeto (verifique o arquivo `package.json`)

## Instalação server - Backend

Serguir os passos da documentação de instalação do servidor:
https://github.com/NatanaeLuiz/chatgpt-clone/tree/main/server

## Instalação client - Frontend

Serguir os passos da documentação de instalação do client:


## Configuração do .env

Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `.env`. Você precisará de uma chave de API válida da OpenAI.

```env
OPENAI_API_KEY=SuaChaveDeAPIOpenAI
PORT=5555
