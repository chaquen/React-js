# React.js
La libreria craeda por facebook para crear UI basada en componenetes, este repositorio tiene base tomada del [sitio oficial](https://es.reactjs.org/docs/getting-started.html) y su docuemntación
lo invito a leer dicha documentación para mantenerse actualizado en los cambios de versiones  
## Primer juego creado con React.js [triqui](https://es.reactjs.org/tutorial/tutorial.html)
Este ejemplo es tomado del tutorial, aqui se desarrolla un juego comunmente llamado en colombia triqui el ejemplo se encuentra en la carpeta my-app
# ¿Cómo creo un proyecto en react.js?
Lo primero que debes tener en cuenta es teenr instalado [node.js](https://nodejs.org/es/), asi como [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) que son gestores de paquetes o dependencias con los que podras instalar los paquetes necesarios para cada proyecto

## Comando para crear un proyecto react.js

	npx create-react-app nombre-del-proyecto

El código creado estara en un subdirectorio llamado igual que la app (nombre-del-proyecto), para ello debes acceder a esta carpeta, y luego acceder de igual manera a la carpeta src/

## ¿Cómo inizializo un archivo react.js?

Los archivos que contienen los componentes deben importar los paquetes necesarios para ello debemos incluir las siguientes lineas 

	import React from 'react';
	import ReactDOM from 'react-dom';
	import './index.css';--ejemplo de .css

## ¿Cómo inizializo una app crearda con react.js y por que puerto puedo acceder?

Debes utilizar el comando 

	npm start 

Una vez inizializada la aplicación, el puerto al que puedes acceder es al puerto 3000 desde tu [localhost](http://localhost:3000)

	http://localhost:3000
 
