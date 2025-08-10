---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "45.53"
minutoFin: "46.57"
tags: 
num_veces_leida: 0
---
## ¿Qué es?
Es una de las [[Estrategias para gestionar dependencias]] donde [[Mark Seeman]] enuncia lo siguiente:

>No tener dependencias en el código puro core

La ventaja de esto es que es fácil de comprender y de testear. Y aunque [[Scott Wlaschin]] expone como desventaja la necesidad de crear código (enum y records) para exponer las decisiones para que le el código Shell imperativo sepa que operación IO ejecutar, para él es una ventaja porque genera documentación viva y hace más fácil de entender el código