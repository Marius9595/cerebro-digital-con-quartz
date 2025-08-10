### Libros
<%*
let dvQuery = `
LIST WITHOUT ID
apellidoAutor + ", " 
+ nombreAutor + ". " 
+ titulo + ". " 
+ editorial + ". " 
+ "(pp. " + paginas + ")" 
FROM "NOTES" 
WHERE contains(file.inlinks.file.name, "${tp.file.title}")
`;
-%>
```dataview
<%- dvQuery %>
```

para usar back links en la bibliografia etc etc
```dataview
TABLE
regexreplace(meta(nombreAutor).path,"TEMPLATES\/(.*?)\.md","$1")
FROM "TEMPLATES" 
WHERE contains(file.outlinks.file.name, "Article-Post Bibliography")
```