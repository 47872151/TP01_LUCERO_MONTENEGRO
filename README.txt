
Diseño de la interfaz del formulario
El formulario está diseñado para ser lo más limpio posible. Tiene campos para el nombre, el correo, la contraseña y la confirmación de la contraseña. Todo está centrado en la pantalla para que sea fácil de usar en cualquier dispositivo, ya sea una computadora o un celular. El diseño usa colores modernos y una tipografía simple para que se vea atractivo. Además, cuando el usuario hace clic en un campo, los bordes se ponen con sombra, lo que hace que se vea más profesional. Usamos Flexbox para que todo se acomode de manera perfecta en cualquier tamaño de pantalla.

Validaciones implementadas en JavaScript
El formulario está validado con JavaScript. Verifica si el nombre tiene al menos tres caracteres, si el email tiene un formato válido, si la contraseña tiene al menos 8 caracteres, un número y una letra, y si la contraseña y la confirmación coinciden. Si alguna validación falla, se muestra un mensaje de error en rojo. Si todo está correcto, entonces se muestra un mensaje verde y el formulario se envía pasados los 5 segundos.

Desafíos enfrentados y soluciones
Uno de los mayores desafíos fue que las alertas de error y éxito no aparecían bien en la parte de arriba de la página. Esto lo solucionamos usando `position: fixed` en el CSS para que siempre estén arriba, sin importar en qué parte del formulario se encuentre el usuario, y con el estilo de Bootstrap. También nos costó hacer que las validaciones funcionaran sin usar el atributo `required` en los campos, pero lo resolvimos con JavaScript para hacer las validaciones en tiempo real, mientras el usuario escribe. Además, tuvimos que asegurarnos de que el formulario fuera responsivo, es decir, que se vea bien tanto en celulares como en computadoras. Eso lo logramos con Flexbox.

Mejoras posibles
Si tuvieramos más tiempo, asociaríamos el proyecto con una base de datos SQL para poder almacenar la información de los usuarios en una base de datos.
