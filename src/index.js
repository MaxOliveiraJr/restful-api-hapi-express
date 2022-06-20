const Hapi = require('@hapi/hapi');
const { route } = require('@hapi/hapi/lib/cors');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    server.route(routes);

    await server.start();
    console.log('Server runnig on %s', server.info.uri);
}


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});




init();