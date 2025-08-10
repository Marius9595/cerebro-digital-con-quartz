## Notas
<%*
let dvQuery = `
TABLE
minutoInicio, minutoFin
FROM "NOTES" 
WHERE 
	contains(meta(video).path, "${tp.file.title}")
`;
-%>
```dataview
<%- dvQuery %>
```