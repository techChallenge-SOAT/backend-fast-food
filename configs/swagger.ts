import swaggerAutogenFactory from 'swagger-autogen';

const swaggerAutogen = swaggerAutogenFactory();

const doc = {
  info: {
    title: 'Backend Fase 01',
    description:
      'Documentação das APIs criadas para o sistema de gerenciamento de fast food',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['../src/index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('../src/index.ts');
});
