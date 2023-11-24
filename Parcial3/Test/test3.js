const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const { areaTriangulo } = require('./modulo.js')

chai.use(chaiHttp)

describe('Pruebas de validacion', () => {
    it('Deberia retornar 3', () => {
        const resultado = areaTriangulo();
        expect(resultado).to.equal(3);
    });
});

let app = 'http://localhost:8080';

describe('Pruebas de rutas', () => {
    it('Estatus 200 rutas de farmacias', () => {
        chai.request(app)
            .get('/farmacias')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.be.status(200);
            });
    });
});