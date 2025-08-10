## Notes del material del author

```dataview
TABLE 
file.outlinks.file.name as "Fuente",
tags as "Etiquetas"
FROM "BIBLIOGRAPHY/ITEMS"
WHERE contains(file.outlinks.file.name, "<Nombre author>")
```

