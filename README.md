# XSS-Injection-Sample

A Sample to Understand how XSS Injection is done.

In the Sample,

A NodeJS Server is run locally which has two routes
1. /search - Get Request which returns html "No search results found for" + queryString sent in the request
2. * - For all other requests (Can be ignored)

To Test the attack
1. Run the server using "node start.js" command
2. Launch "http://localhost:4040/search.html" in your browser
3. Enter text "<script> alert(10) </script>"
4. We can see the alert 10 being displayed once Enter is Pressed.

This is simple alert triggering script.
Can be Updated with code that can run an external script too.
