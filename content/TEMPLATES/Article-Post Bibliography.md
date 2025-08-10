---
nombreAutor: jkj
---


```dataview
TABLE
regexreplace(meta(nombreAutor).path,"TEMPLATES\/(.*?)\.md","$1")
FROM "TEMPLATES" 
WHERE contains(file.outlinks.file.name, "Article-Post Bibliography")
```


[Article-Post Bibliography](app://obsidian.md/TEMPLATES/Article-Post%20Bibliography.md)HOLA