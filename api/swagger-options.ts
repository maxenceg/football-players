export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Football Player's API",
            version: '1.0.0',
            description:
                'This is a simple CRUD API application made with Express and documented with Swagger',
            contact: {
                name: 'Maxence GILLIOT',
                email: 'maxencegilliot@gmail.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
    },
    apis: ['./controllers/*.ts'],
}
