module.exports = uri => {

    const mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', () => {
        console.log('Connectado ao MongoDB: ' + uri);
    });

    mongoose.connection.on('error', error => {
        console.log("Erro na conexão: " + error);
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Desconectado ao MongoDB");
    });

    process.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("Conexão fechada pelo término da aplicação");
            process.exit(0);
        });
    });
}