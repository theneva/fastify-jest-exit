test('repro', () => {
    const fastify = require('fastify')
    app = fastify();

    app.inject({
        method: 'GET',
        url: 'http://url',
        path: 'http://path',
    })
})
