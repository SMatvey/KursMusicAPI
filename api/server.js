var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Music = require('./models/musicModel'), //created model loading here
  swaggerJSDoc = require('swagger-jsdoc'),
  swaggerUiExpress = require('swagger-ui-express');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/musicdb'); 

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Music API",
      description: "This is using our music library API on a web page.",
      servers: ['https://127.0.0.1:3000/']
    },
  }, 
  apis: ["./routes/*.js"],
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require('./routes/musicRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Music list RESTful API server started on: ' + port);