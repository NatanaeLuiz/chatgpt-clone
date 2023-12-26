# ChatGPT Clone

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

1. Clone o repositório: `git clone https://github.com/NatanaeLuiz/chatgpt-clone.git`
2. Entre no diretorio do servidor com o comando: `cd server`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente no arquivo `.env`
5. Execute o aplicativo: `npm start`

## Configuração do .env

Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `.env`. Você precisará de uma chave de API válida da OpenAI.

```env
OPENAI_API_KEY=SuaChaveDeAPIOpenAI
PORT=5555

