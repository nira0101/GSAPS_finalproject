const { resolve } = require('path')

module.exports = {
    base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        service:resolve(__dirname, 'service.html'),
        contact:resolve(__dirname, 'contact.html'),
        job:resolve(__dirname, 'job.html'),
       
      }
    }
  }
}