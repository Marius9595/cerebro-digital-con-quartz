---
curso: "[[Agents Course]]"
bloque: "U1: ¿Qué son los LLMs?"
orden: "4"
tags: 
num_veces_leida: 0
---
## ¿Qué son?

Cada [[Modelo de Lenguaje Grande|LLM]] tiene algunos **[[Token]]s especiales** específicos del modelo. El [[Modelo de Lenguaje Grande|LLM]] usa estos tokens [[Token]]s abrir y cerrar los componentes estructurados de su generación. Por ejemplo, para indicar el inicio o fin de una secuencia, mensaje o respuesta. Además, los prompts de entrada que pasamos al modelo también están estructurados con tokens especiales. El más importante de ellos es el ****[[Token]] de Fin de secuencia** (EOS). Las formas de los [[Token]]s especiales son muy diversas entre los proveedores de modelos.

La siguiente tabla ilustra la diversidad de tokens especiales.

|**Modelo**|**Proveedor**|**Token EOS**|**Funcionalidad**|
|---|---|---|---|
|**GPT4**|OpenAI|`<\|endoftext\|>`|Fin del texto del mensaje|
|**Llama 3**|Meta (Facebook AI Research)|`<\|eot_id\|>`|Fin de secuencia|
|**Deepseek-R1**|DeepSeek|`<\|end_of_sentence\|>`|Fin del texto del mensaje|
|**SmolLM2**|Hugging Face|`<\|im_end\|>`|Fin de instrucción o mensaje|
|**Gemma**|Google|`<end_of_turn>`|Fin de turno de conversación|

> No tiene sentido memorizar estos tokens especiales, pero es importante apreciar su diversidad y el papel que desempeñan en la generación de texto de los LLMs. Se suelen poder consultar como los compartidos en Hugging Face:  por ejemplo, el modelo SmolLM2 en su [tokenizer_config.json](https://huggingface.co/HuggingFaceTB/SmolLM2-135M-Instruct/blob/main/tokenizer_config.json).