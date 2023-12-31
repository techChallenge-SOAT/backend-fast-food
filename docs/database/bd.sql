CREATE DATABASE bd-clientes-pedidos;

USE bd-clientes-pedidos;

CREATE TABLE clientes (
    id UUID PRIMARY KEY,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE itens (
    id UUID PRIMARY KEY,
    categoria VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE pedidos (
    id UUID PRIMARY KEY,
    cliente_cpf VARCHAR(14),
    data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(14) NOT NULL, 
    FOREIGN KEY (cliente_cpf) REFERENCES clientes(cpf)
);

CREATE TABLE pedidos_itens (
    pedido_id UUID,
    item_id UUID,
    quantidade INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (item_id) REFERENCES itens(id)
);