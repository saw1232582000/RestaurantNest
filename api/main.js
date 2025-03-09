// This file is the entry point for Vercel serverless functions
// It imports the compiled NestJS application from the dist directory

// Import the serverless handler from the compiled NestJS application
const { default: handler } = require('../dist/main');

// Export the handler for Vercel
module.exports = handler; 