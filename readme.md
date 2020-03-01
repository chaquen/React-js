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
 
# Ciclo de vida del componente 

Cada componente tiene varios "métodos de ciclo de vida", que se pueden sobreescribir para ejectar un código en un momento en particular del proceso, puedes usar esta [guía](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) para orientarte 

En la lista de abajo, los métodos de ciclo de vida comúnmente usados están marcados en **negrita**. El resto de ellos existen para casos de uso relativamente raros.

## Montaje
_ _*[constructor()](https://es.reactjs.org/docs/react-component.html#constructor)**
* [static getDerivedStateFromProps()](https://es.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
_ _*[render()](https://es.reactjs.org/docs/react-component.html#render)**
_ _*[componentDidMount()](https://es.reactjs.org/docs/react-component.html#componentdidmount)**

## Actualización

* [static getDerivedStateFromProps()](https://es.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)
* [shouldComponentUpdate()](https://es.reactjs.org/docs/react-component.html#shouldcomponentupdate)
_ _*[render()](https://es.reactjs.org/docs/react-component.html#render)**
* [getSnapshotBeforeUpdate()](https://es.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)
_ _*[componentDidUpdate()](https://es.reactjs.org/docs/react-component.html#componentdidupdate)**	

## Desmontaje

_ _*[componentWillUnmount()](https://es.reactjs.org/docs/react-component.html#componentwillunmount)**

### Para ampliar la información puedes ver el siguiente [link](https://es.reactjs.org/docs/react-component.html) 

# Funciones del ciclo de vida usadas comúnmente
## [render()](https://es.reactjs.org/docs/react-component.html#render)

El método render() es el único método requerido en un **componente de clase**.
Cuando se llama, debe examinar a _ _this.props_ _ y _ _this.state_ _ y devolver uno de los siguientes tipos:

_ _*Elementos de React.** normalmente creados a través de JSX. Por ejemplo, <div /> y <MyComponent /> son elementos de React que enseñan a React a renderizar un nodo DOM, u otro componente definido por el usuario, respectivamente.
_ _*Arrays y fragmentos.** Permiten que puedas devolver múltiples elementos desde el render. Consulta la documentación sobre fragmentos para más detalles.
_ _*Portales.** Te permiten renderizar hijos en otro subárbol del DOM. Consulta la documentación sobre portales para más detalles.
String y números. Estos son renderizados como nodos de texto en el DOM.
_ _*Booleanos o nulos.** No renderizan nada. (Principalmente existe para admitir el patrón return test && <Child />, donde test es booleano.)

La función **render()** debe ser pura, lo que significa que no modifica el estado del componente, devuelve el mismo resultado cada vez que se invoca y no interactúa directamente con el navegador.

Si necesitas interactuar con el navegador, realiza tu trabajo en **componentDidMount()** o en los demás métodos de ciclo de vida. Mantener **render()** pure hace que los componentes sean más fáciles de considerar.

## [constructor()](https://es.reactjs.org/docs/react-component.html#constructor)
Si no inicializas el estado y no enlazas los métodos, no necesitas implementar un constructor para tu componente React.

El constructor para un componente React es llamado antes de ser montado. Al implementar el constructor para una subclase React.Component, deberías llamar a super(props) antes que cualquier otra instrucción. De otra forma, this.props no estará definido en el constructor, lo que puede ocasionar a errores.

Normalmente, los constructores de React sólo se utilizan para dos propósitos:

* Para inicializar un estado local asignando un objeto al _ _this.state_ _.

* Para enlazar manejadores de eventos a una instancia.

No debes llamar _ _setState()_ _ en el _ _constructor()_ _. En su lugar, si su componente necesita usar el estado local, asigna directamente el estado inicial al _ _this.state_ _ directamente en el constructor:

**El constructor es el único lugar donde debes asignar this.state directamente. En todos los demás métodos, debes usar this.setState() en su lugar.**

## [componentDidMount()](https://es.reactjs.org/docs/react-component.html#componentdidmount)

componentDidMount() se invoca inmediatamente después de que un componente se monte (se inserte en el árbol). La inicialización que requiere nodos DOM debería ir aquí. Si necesita cargar datos desde un punto final remoto, este es un buen lugar para instanciar **la solicitud de red**.

Este método es un buen lugar para establecer cualquier suscripción. Si lo haces, no olvides darle de baja en _ _componentWillUnmount()_ _.

## [componentDidUpdate()](https://es.reactjs.org/docs/react-component.html#componentdidupdate)

componentDidUpdate() se invoca inmediatamente después de que la actualización ocurra. Este método no es llamado para el renderizador inicial.

Use esto como una oportunidad para operar en DOM cuando el componente se haya actualizado. Este es también un buen lugar para hacer solicitudes de red siempre y cuando compare los accesorios actuales con los anteriores (por ejemplo, una solicitud de red puede no ser necesaria si los props no han cambiado).

## [componentWillUnmount()](https://es.reactjs.org/docs/react-component.html#componentwillunmount)

componentWillUnmount() se invoca inmediatamente antes de desmontar y destruir un componente. Realiza las tareas de limpieza necesarias en este método, como la invalidación de temporizadores, la cancelación de solicitudes de red o la eliminación de las suscripciones que se crearon en _ _componentDidMount()_ _.