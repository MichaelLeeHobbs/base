export default handleRequest = function (request, response, next){
  response.writeHead(200, { 'Content-Type': 'text/plain'});
  response.end(Date.now().toString());
}
