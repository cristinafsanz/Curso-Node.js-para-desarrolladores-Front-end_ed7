# CLASE 1

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/blob/master/clase1/README.md

Cloud9 
https://aws.amazon.com/es/cloud9/getting-started/
https://signin.aws.amazon.com/signin

- Acceder:
ID Cuenta: 523464854713
User5 / Contraseña la de siempre

- Buscar en aws services

- Compartido conmigo y Open IDE

Git
git clone https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7.git
cd Curso-Node.js-para-desarrolladores-Front-end_ed7

(Contraseña GitHub: trabajo + última mayúscula)

git status
git diff README.md
git add README.md 
git commit -m "Changed title"

git merge newbranch

control x para quitar nano

Fork del repo para hacer push: https://github.com/cristinafsanz/Curso-Node.js-para-desarrolladores-Front-end_ed7.git (en botón clone)
Rama remote: hacia donde apunta
git remote -v
git remote remove origin
git remote add origin https://github.com/cristinafsanz/Curso-Node.js-para-desarrolladores-Front-end_ed7.git

git reset --hard origin/master

git push

Primera vez: git push --set-upstream origin master

Eslint
Ejercicio "Arregla todos los errores de eslint"

Hay paquetes estándar de eslint, ejemplo de AirBnb, para no tener que configurarlo tú mismo. Así todos siguen las mismas reglas.

Repaso JavaScript
https://github.com/cristinafsanz/Curso-Node.js-para-desarrolladores-Front-end_ed7/blob/master/clase1/javascript.md

Abrir consola para ir probando

4 === '4': compara valor y tipo

"use strict";: no hace falta si usamos bien eslint

Operador ternario solo para condiciones simples

Librería Moment.js para trabajar con Date

Documentación Mozilla JS

Slice: deja array original igual. Splice lo modifica

[1,2,3,4].map(function (value){return value + 1}); //Devuelve nuevo array, no modifica el original

Filter crea un nuevo array a partir de otro cumpliendo una condición

const para objeto sí permite modificar el contenido, un string no

Arrow function const test = () => ({a: 1}); //entre paréntesis en el objeto para que no pete

await fetch es el valor de la promesa, fetch sería la promesa
