# PRINCIPIOS REST
![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*9xsOnmz5hC4IVOLixlvMLg.png)
**Arquitectura Cliente-Servidor:**

-   La arquitectura cliente-servidor es un modelo de diseño de software que distribuye las funciones de una aplicación en dos partes distintas: el cliente y el servidor. Cada una de estas partes cumple con roles y responsabilidades específicos en el procesamiento y la gestión de la información.

**Sin Estado (Stateless):**

-   Cada solicitud del cliente al servidor debe contener toda la información necesaria para entender y procesar la solicitud. El servidor no debe almacenar información sobre el estado del cliente entre las solicitudes.

**Cacheabilidad:**

-   Las respuestas del servidor deben indicar si la información puede ser almacenada en caché por el cliente. Esto ayuda a mejorar la eficiencia y la velocidad de las aplicaciones.

**Interfaz Uniforme:**

-   Las API REST deben tener una interfaz uniforme para simplificar la arquitectura y mejorar la comprensión. Esto incluye recursos identificables (URIs), manipulación de recursos mediante representaciones, y autodescriptivas (los recursos llevan consigo suficiente información para describir cómo deben ser procesados).

**Sistema de Capas (Layered System):**

-   La arquitectura puede estar compuesta por capas, donde cada capa solo conoce sobre la capa con la que está interactuando directamente. Esto mejora la escalabilidad y la flexibilidad.

**Manipulación de Recursos a través de Representaciones:**

-   Los recursos, que son identificados por URIs, deben ser manipulados a través de representaciones. Estas representaciones pueden ser en formato JSON, XML, HTML, entre otros.

**Operaciones CRUD (Create, Read, Update, Delete):**

-   Utilizar los métodos HTTP de manera semántica. Por ejemplo, GET para obtener recursos, POST para crear recursos, PUT o PATCH para actualizar recursos, y DELETE para eliminar recursos.

**Seguridad:**

-   Implementar mecanismos de seguridad, como autenticación y autorización, para proteger las API y los recursos.

**Versionamiento:**

-   Proporcionar un mecanismo de versionamiento para las API para manejar cambios y actualizaciones sin afectar a los clientes existentes.

**HATEOAS (Hypermedia As The Engine Of Application State):**

-   Los clientes interactúan con la aplicación enteramente a través de hipermedios proporcionados dinámicamente por las aplicaciones servidores de las aplicaciones RESTful.
