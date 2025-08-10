---
curso: "[[Agents Course]]"
bloque: "U1: Acciones, Habilitando al Agente para Interactuar con su Entorno"
orden: "2"
tags: 
num_veces_leida: 0
---

## ¿Qué es?

Es un método clave para implementar [[Acciones (Agente IA)]] porque  asegura que la salida del agente sea estructurada y predecible:

1. **Generación en un Formato Estructurado**:
	El agente produce su acción prevista en un formato claro y predeterminado (JSON o código).

2. **Deteniendo la Generación Adicional**:
	Una vez que la acción está completa, **el agente deja de generar tokens adicionales**. Esto previene salidas adicionales o erróneas.

3. **Analizando la Salida**:
	Un analizador externo lee la acción formateada, determina qué Herramienta llamar y extrae los parámetros requeridos.