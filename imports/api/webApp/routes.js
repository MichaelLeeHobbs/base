import handleRequestTime from './time/time.js'

if (Meteor.isServer) {
  console.log('Loading API routes.');
  // Listen to incoming HTTP requests, can only be used on the server
  WebApp.connectHandlers.use("/api/time", handleRequestTime);
}
