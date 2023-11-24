const request = require('supertest');
const { areaTriangulo } = require('../modulo.js')
let app = 'http://localhost:8080';


describe('Pruebas de rutas', () => {
    it('Estatus 200 rutas de farmacias', () => {
        request(app)
            .get('/farmacias')
            .end((err, res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});