
## RE-LEER
```dataview
TABLE
num_veces_leida as "Nº de veces leída"
FROM "NOTES"
WHERE num_veces_leida != null
SORT num_veces_leida, file.name ASC
```

## ASIGNAR PROPIEDAD PARA RE-LEER (num_veces_leida)
```dataview
TABLE
FROM "NOTES"
WHERE num_veces_leida = null
```