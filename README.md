# Ejercicios TypeScript

# Ejercicio 7

- Crea una clase para modelar un animal. Recuerda crear primero la interfaz necesaria.

Un animal tiene las siguientes propiedades:

- Nombre
- Edad
- Peso
- Grado de miedo (números enteros entre 1 y 5) (el objeto instanciado no debería tener esta propiedad)

El constructor debe pedir los cuatro valores y asignarlos a las propiedades.

Un animal tiene los siguientes métodos:

- `eat(food)`: devuelve un string con la comida que come el animal. P.e.: "Come carne"

- Crea una clase para modelar un animal que se desplaza. Recuerda crear primero la interfaz necesaria.

Un animal que se desplaza tiene las siguientes propiedades (además de las que ya tiene por ser animal):

- Modo de desplazamiento
- Velocidad (un número entero del 1 al 10) (el objeto instanciado no debería tener esta propiedad)

Un animal que se desplaza tiene los siguientes métodos (además de los que ya tiene por ser animal):

- `move(distanceInMeters)`: devuelve un string con el movimiento que hace el animal. P.e.: "Se mueve 5 metros"
- `setSpeed(speed)`: establece la velocidad del animal

- Crea un animal para modelar un animal que no se desplaza. Recuerda crear primero la interfaz necesaria.

Un animal que no se desplaza tiene las siguientes propiedades (además de las que ya tiene por ser animal):

- Método de fijación

Un animal que no se desplaza tiene los siguientes métodos (además de los que ya tiene por ser animal):

- `fix(fixation)`: devuelve un string con la fijación del animal. P.e.: "Se fija en el suelo"

- Crea una clase para modelar una tortuga. Recuerda crear primero la interfaz necesaria.

Una tortuga tiene las siguientes propiedades (además de las que ya tiene por ser animal que se desplaza):

- Si está escondida en el caparazón

Una tortuga tiene los siguientes métodos (además de los que ya tiene por ser animal que se desplaza):

- `hideInShell()`: devuelve un string con la acción de esconderse en el caparazón. P.e.: "Se esconde en el caparazón".

El constructor de la tortuga debe comprobar si el grado de miedo es mayor de 3. Si es así, debe esconderse en el caparazón. También debe comprobar si la velocidad recibida es mayor de 5. Si es así, debe establecer la velocidad a 5.
