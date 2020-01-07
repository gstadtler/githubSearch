

## Tutorial de instalação e uso do app

`Essa aplicação foi desenvolvida com o create-react-app`

Para sua utilização é necessário ter instalado em sua máquina o Nodejs e com ele o Node Package Manager (NPM).
Através do NPM serão instalados e gerenciados os pacotes necessários para rodar a aplicação React.

### `Instalando o Nodejs`

- #### Para Windows OS

Acessando o site do [NodeJS](https://nodejs.org/en/) para fazer o download. 
Após baixado e instalado, basta abrir o próprio cmd do Windows ou alguma outra ferramenta de linha de comando
e seguir o restante dos passos desse tutorial a partir de *Clonando repositório*. 
*Para mais informações sobre o NPM, basta digitar o comando `npm`*

Para mais detalhes de instalação no Windows [DevMedia tutorial](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329).

- #### Para OS baseado em Linux

No terminal, basta rodar os comandos `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash`
e `sudo apt-get install -y nodejs`, atualizar o NPM com o comando `sudo npm install npm@latest -g` (recomendado),
e então seguir o restante dos passos desse tutorial.
*Para mais informações sobre o NPM, basta digitar o comando `npm`*

Para mais detalhes de instalação no Ubuntu [Tutorial](https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-ubuntu-18-04-1/).

- #### Para Mac OS

[Tutorial de instalação e setup do ReactJS para MacOS](https://www.techomoro.com/how-to-install-and-set-up-react-on-macos-x/).

### `Clonando repositório`

Após ter instalado o Nodejs ou caso já o tenha instalado, basta clonar este repositório (git clone + url do repositório) ou se preferir fazer um Fork e então clonar o seu próprio Fork para um diretório local.

### `Instalando pacotes (NPM Install)`

Com o repositório devidamente clonado, basta acessar o diretório em que o repositório foi clonado
e rodar o comando `npm install`. Este comando vai instalar todos os pacotes necessários para rodar a aplicação.

### `Iniciando o servidor de desenvolvimento (NPM Start)`

O comando utilizado para iniciar o servidor localmente, no ambiente de desenvolvimento, é o `npm start`.
Quando o servidor for iniciado, automaticamente será aberta a página *http://localhost:3000* no browser,
onde a aplicação estará rodando em modo de desenvolvimento.


### Mais sobre React.js

- Mais sobre o *create-react-app* em [Documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

- Mais informações sobre React.js [Documentação do React](https://reactjs.org/).

### Cypress

- A ferramenta cypress foi utilizada para fazer testes automatizados para a aplicação, para instalar e rodar os testes basta checar esse [tutorial](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements).

