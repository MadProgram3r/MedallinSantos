const OpenAPISnippet = require('openapi-snippet')

fetch('http://localhost:8080/api-docs.json')
    .then(respuesta => respuesta.json())
        .then(desc =>
            {
              // define input:
const openApi = desc // Open API document
const targets = ['javascript_xhr','go'] // array of targets for code snippets. See list below...
console.log(openApi)

try {
  // either, get snippets for ALL endpoints:
  const results = OpenAPISnippet.getSnippets(openApi, targets) // results is now array of snippets, see "Output" below.
  console.log(results)

} catch (err) {
  // do something with potential errors...
  console.log(err);
}
            })

