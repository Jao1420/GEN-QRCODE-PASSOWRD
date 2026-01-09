# 🚀 Gerador de QR Code e Senhas

Este projeto foi desenvolvido como parte do curso de Node.js da plataforma **DIO.ME**. A aplicação é uma ferramenta de linha de comando (CLI) funcional, focada em arquitetura de software organizada e na aplicação de conceitos de **Clean Code**.

---

## 💡 Sobre o Projeto

O objetivo principal foi criar uma aplicação robusta que reforçasse a experiência prática com o ecossistema Node.js, garantindo um código modular, escalável e de fácil manutenção.

### 🛠️ Habilidades e Conceitos Trabalhados

* **Modularização:** Divisão de responsabilidades em módulos distintos, facilitando a manutenção e a legibilidade.
* **Scripts Node.js:** Criação e automação de comandos via `npm scripts` para agilizar o desenvolvimento.
* **Segurança & Configuração:** Uso de arquivos `.env` para proteção de dados sensíveis e variáveis de ambiente.
* **Gestão de Dependências:** Domínio sobre o gerenciamento de pacotes (`npm`) e versionamento.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Javascript.
* **Dotenv**: Gerenciamento de variáveis de ambiente.
* **QRCode-Terminal**: Geração de códigos QR diretamente no console.
* **Chalk**: Estilização e cores para uma melhor experiência no terminal.

---

## 🏁 Como Iniciar

Siga os passos abaixo para rodar o projeto localmente:
---
1. **Clone o repositório:**
  ```Bash
  git clone https://github.com/Jao1420/GEN-QRCODE-PASSOWRD.git
  ```
  --- 
2. **Instale as dependências:**
  ```Bash
  npm install
  ```
---
3. **Configure as variáveis de ambiente: Modifique o arquivo .env na raiz do projeto para mudar a configuração do gerador de sennhas.**
---
4. **Execute a aplicação:**
  ````Bash
    npm start
  ````
---
# 📂 Estrutura de Pastas
````
src/
 ├── prompts-schema/    # Definições de esquemas para as entradas
 │   ├── prompt-main.js
 │   └── prompt-qrCode.js
 ├── services/          # Lógica de negócio dividida por domínio
 │   ├── password/      # Funções de criação e tratamento de senhas
 │   │   ├── create.js
 │   │   └── handlePassword.js
 │   └── qr-code/       # Funções de geração e tratamento de QR Codes
 │       ├── create.js
 │       └── handleQRCode.js
 └── index.js           # Ponto de entrada da aplicação
.env                    # Variáveis de ambiente
.gitignore              # Arquivos ignorados pelo Git
package.json            # Manifesto do projeto

````
