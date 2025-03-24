const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const logger = require('./config/logger-config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);



app.listen(ServerConfig.PORT, () => {
    logger.info(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
