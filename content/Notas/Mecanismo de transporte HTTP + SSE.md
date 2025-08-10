---
curso: "[[MCP Course]]"
bloque: "U1: Architectural Components"
orden: "4"
tags: 
num_veces_leida: 0
---


## ¿Qué es?

El transporte HTTP+SSE se utiliza para la comunicación remota, donde el Cliente y el Servidor pueden estar en diferentes máquinas:

La comunicación ocurre a través de HTTP, con el Servidor utilizando Server-Sent Events (SSE) para enviar actualizaciones al Cliente mediante una conexión persistente.

**Casos de uso** para este transporte incluyen la conexión a APIs remotas, servicios en la nube o recursos compartidos.

Las principales **ventajas** de este transporte son que funciona a través de redes, permite la integración con servicios web y es compatible con entornos serverless.

Las actualizaciones recientes al estándar MCP han introducido o perfeccionado el “HTTP Streamable”, que ofrece mayor flexibilidad al permitir que los servidores actualicen dinámicamente a SSE para transmisión cuando sea necesario, manteniendo la compatibilidad con entornos serverless.