## ❔ Sobre o projeto

Uma plataforma de estudos online que visa conectar alunos e professores de forma rápida e fácil.

O projeto está sendo desenvolvido na [Next Level Week 2](https://nextlevelweek.com/episodios/omnistack/2/edicao/2)

## 📸 Screenshots

<p align="center"><b>Interface Web para Desktop</b></p>
<p align="center">
  <img src="https://repository-images.githubusercontent.com/285049464/92458900-d744-11ea-8a78-36754300c647" alt="Landing Page Proffy in Desktop" />
</p>


## 🛠 Techs

Proffy foi construído com as seguintes techs:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [Node.js](https://nodejs.org/en/)
	
## ⚙ Estrutura
- web	
	* react-router-dom
- server
	* express
	* knex
	* sqlite3
 - mobile
	* expo
	* axios

## ⚙ Instalação e Start

Para instalar e startar a plataforma Proffy em seu ambiente, siga os passos abaixo:

### Instalação

Clone o repositório:
```
git clone https://github.com/aurelios/proffy.git
```

### Start
Instale as dependências e starte 🚀

##### SERVER
```
cd ./proffy/server
yarn install 
yarn start 
```
##### WEB
```
cd ./proffy/web
yarn install 
yarn start 
```
##### MOBILE
Após instalação de emulador de sua preferência:
```
cd ./proffy/mobile
yarn global add expo-cli
expo client:install:android
expo start
```



