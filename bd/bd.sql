-- Criação do banco de dados
CREATE DATABASE sistema_pedidos;

-- Seleciona o banco de dados
USE sistema_pedidos;

-- Tabela de Clientes com CPF como Primary Key e Senha Not Null
CREATE TABLE clientes (
    cpf VARCHAR(14) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Tabela de Itens
CREATE TABLE itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

-- Tabela de Pedidos com UUID como ID
CREATE TABLE pedidos (
    id UUID PRIMARY KEY,
    cliente_cpf VARCHAR(14),
    data_pedido DATE,
    status VARCHAR(14) NOT NULL, 
    FOREIGN KEY (cliente_cpf) REFERENCES clientes(cpf)
);

-- Tabela de Relacionamento entre Pedidos e Itens (1:N)
CREATE TABLE pedidos_itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id UUID,
    item_id INT,
    quantidade INT NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (item_id) REFERENCES itens(id)
);