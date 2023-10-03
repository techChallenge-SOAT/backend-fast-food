const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Backend Fase 01',
    description:
      'Documentação das APIs criadas para o sistema de gerenciamento de fast food',
  },
  host: 'localhost:8000',
  schemes: ['http'],
};

const outputFile = './path/swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('../index.js');
});
