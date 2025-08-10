## Notas
<%*
let dvQuery = `
TABLE
capítulo, paginas
FROM "NOTES" 
WHERE 
contains(meta(libro).path, "${tp.file.title}")
`;
-%>
```dataview
<%- dvQuery %>
```