## Notas
<%*
let dvQuery = `
TABLE
bloque, orden
FROM "NOTES" 
WHERE 
contains(meta(curso).path, "${tp.file.title}")
`;
-%>
```dataview
<%- dvQuery %>
```