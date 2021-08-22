
# Observaciones

Caro, felicitaciones por tu TP. Que lindo quedó tu portfolio, qué hermosa la elección de colores y tipografías, que lindos detalles agregaste, y qué impresionante la atención al detalle que ponés en la web, en su aspecto visual y también en el código. 

Tengo, lamentablmemente, pocos comentarios para hacerte, ya que el nivel de este trabajo es realmente muy alto. Pero siempre hay algo que comentar! :) Como dije en clase, este trabajo no se hace para que constates conocimientos, sino para que aprendas: en ese sentido, mi intencion es que estos comentarios te sirvan para aprender, mejorar tu codigo a futuro e ir apreciando mejor qué se espera de nosotras como desarrolladoras front end.

## Estructura correcta de documento HTML

Tu HTML esta realmente excelente. Claro, prolijo, muy bien comentado e identado. 

El lenguaje del documento está en inglés, te comento en la sección de accesibilidad por qué eso es importante.

## Respeta la consigna

- El portfolio cuenta con las secciones solicitadas
- Al clickear en los links de navegación, debe llevar a la sección correspondiente
- Al clickear en los links de contacto, debe llevar a la página externa
  correspondiente
- El portfolio debe tener un diseño responsivo y verse correctamente en distintos dispositivos
- El portfolio debe estar deployado y ser accesible desde una URL
- El repositorio en GitHub debe tener un readme adecuado

Todos estos puntos están cumplidos. Menciono especialmente tu responsive: es increíble lo bien que solucionaste las distintas resoluciones, siguiendo casi a la perfección el modelo y preocupandote para que todo se vea hermoso, veamos tu web desde cualquier dispositivo. 

### Respeta el diseño dado

Cumplido. Lo único a comentar acá es que "mis conocimientos" quiza en tu compu las veas bien, pero en la mia por ejemplo yo veo 4 tarjetas arriba y dos abajo, cuando en el modelo son siempre 3 y 3. Comentamos en clase que una buena solucion para esto es agregar un max-width de tal forma que siempre se vean 3. Consultame si esto te trae dudas. 

### Buena estructura de proyecto

Cumplido. Notá que tenés una carpeta innecesaria, `vscode`, que es agregada a veces automáticamente por Visual Studio. Es buena práctica borrarla antes de una entrega. Ojo con las imagenes que tienen mayusculas, es bueno poner todo en minusculas ya que eso atrae problemas al importarlas. 

### Código bien indentado

Tabulas muy bien, lo cual parece un detalle extra cuando una recien comienza pero ayuda un monton a su legibilidad, y que lo hayas logrado en esta etapa es un gran mérito. 

En las media queries ocasionalmente fallas en el tabulado: todo lo que esta dentro de una media query debe contar con espaciado. 

### Comentarios que permiten mejorar la legibilidad del código

Impecables. 

### Uso correcto de etiquetas semánticas

Usás `header` para la barra de navegación, eso debería sí o sí ser un nav (un lector de pantalla va a buscar el nav para darle opciones de navegación al usuario).

Usas mas de un `h1` en tu web. El h1 es el titulo principal, y debería haber sólo uno por página. El resto deberían estar en orden de jerarquía: h2 para los titulos de secciones, h3 para los títulos dentro de cada subsección, etc. En este caso, "Mis conocimientos", "Mis proyectos" etc deberían ser h2 y los títulos de las cards deberían ser h3. 

Usas excesivamente `article`. Solo tus tarjetas deberian tener esta etiqueta. Todo elemento que sea autocontenido, reusable, repetible y pueda usarse en diferentes contextos, debe ser un article. Ni el formulario debe tenerlo (es un form) ni las distintas secciones de la cita. Sobre ese tema te dejo una lectura: https://www.smashingmagazine.com/2020/01/html5-article-section/

Hay muchos momentos donde tu codigo pide a gritos un `ul`. Todo lo que sea listas pequeñas, como los links de la nav, el footer y el form, deben ser un `ul`. 

### Buenos nombres de clases

En general está cumplido, aunque tenes tendencia a mezclar nombres-con-guiones, nombrestodojunto y nombresConCamelCase. Siempre nombres-con-guiones en html. Ocasionalmente usas ordenes de css o etiquetas de html como nombres de clase ("p-conocimientos", "displayFlex" por ejemplo). Los nombres de clase describen funcionalidades, no codigo: "texto-conocimientos" y "alineacion-horizontal" serian mejores nombres aqui. 

### Código CSS bien estructurado

Cumplido. Noto algunos estilos innecesarios o confusos, que te voy indicando en tu archivo de css.

### Reutilización de estilos

Cumplido en general. 

### Cumple con criterios básicos de accesibilidad

El lenguaje de tu documento de HTML está en inglés, por lo que un lector de pantalla va a tratar de leer todos tus textos en inglés. El efecto es muy feo y confuso: pronuncian en inglés las palabras en español, así que si ven "generador de memes" van a leer "yiniradour di mims". Siempre tratá de que el atributo `lang` de tu HTML refleje el idioma de los textos en tu página.

Las observaciones que te hago en la seccion de etiquetas semánticas tambien van a influir en que tu web sea mas accesible. 

- Los colores tienen un contraste adecuado

No cumplido. Ni colorPrincipal ni colorSecundario deberian tener texto blanco, el contraste no es suficiente. Chequea siempre con https://webaim.org/resources/contrastchecker/ 

- Las imágenes tiene el atributo `alt` que corresponde

Cumplido a nivel formal, pero una persona que necesita de un lector de pantalla va a tener problemas entendiendo muchas de tus imagenes. Para la imagen de presentación decís "presentación" en el alt. El lector va a leerle al usuario: "Imagen: presentación", algo que el usuario no vidente ya sabe: que esta es la primera imagen de tu sitio.

Las imágenes le comunican muchisimas cosas a tus usuarios videntes. No es casualidad que para tu portada hayas elegido una mujer con una web: este es tu portfolio despues de todo, y queres transmitir rapidamente "este es el sitio de una mujer programadora". Si hubieras elegido la imagen de un hombre haciendo malabares la primera impresión de tu sitio sería muy distinta. Esa misma información, tenemos la obligación de transmitirsela a quien no puede ver tus imagenes. "Mujer programadora junto a una pagina web" es una descripción más clara y mejor. Lo mismo vale para las tarjetas de Mis Proyectos: no es casual que elijas una taza de té para ilustrar una web sobre té, así que esa información debe estar en el alt. Los únicos alt vacios son para imagenes decorativas (bordes, firuletes, imagenes que no agregan **informacion** sobre tu producto. Las imagenes ilustrativas -que ejemplifican tu producto- no son decorativas)

Tus `links` tambien necesitan un aria asi el usuario sabe adonde va a ir. Si falta, el lector de pantalla lee la url, lo cual es muy molesto. Algo asi es mucho mejor: `<a href="https://www.linkedin.com/in/carolina-almaraz-8972a9205/" target="_blank" class="link-footer" aria-label="Mi linkedin">`

- Los íconos y elementos que no necesitan ser anunciados por un lector de pantalla tienen la etiqueta aria
  correspondiente

No cumplido. 

- Commits con mensajes adecuados

Cumplido, noto muchos y buenos commits en tu proyecto, lo que siempre se agradece.

- Cuenta con un favicon

No cumplido. 

### Nota: 9
