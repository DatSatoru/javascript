## APP Frases miticas de chuck norris

 - Para este ejercicio vamos a usar la api de chuck norris  
                  - https://api.chucknorris.io/
                  - https://api.chucknorris.io/jokes/random

 - Montar un interfaz con un boton y parrafo maquetado como querais, donde se cargue la frase de chucknorris 
 - Un boton que tenga un evento de click y cada vez que cliquemos nos saque una frase nueva consultada a la api.
 - esta api tiene un endPoint que ejecutado sobre GET me devuelve un json y de ahi estraigo en el campo value la frase.
            https://api.chucknorris.io/jokes/random

- paso 1: captura los elementos del html que vamos a usar, parrafos, botones, etc 
- paso 2: Lanzar un evento de click sobre el boton correspodiente. 
- paso 3: llamar a una funcion que cargue la frase de la api y me la devuelva. (FETCH) 
- paso 4: Cuando tengamos la frase la pintamos en el html, ojo recordar que antes tenemos  una frase y luego cargamos otra.