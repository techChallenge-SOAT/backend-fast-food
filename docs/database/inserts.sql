INSERT INTO clientes (cpf, nome, email, senha) 
VALUES 
('111.222.333-00', 'João', 'joao@example.com', 'senha123'),
('444.555.666-00', 'Maria', 'maria@example.com', 'outrasenha456');

INSERT INTO itens (categoria, nome, descricao, preco_unitario) 
VALUES 
('Hambúrgueres', 'Hambúrguer de Carne', 'Hambúrguer de carne bovina com queijo e vegetais', 5.99),
('Batatas', 'Batata Frita', 'Batata frita crocante', 2.49),
('Bebidas', 'Refrigerante', 'Refrigerante de cola ou guaraná', 1.99);

INSERT INTO pedidos (id, cliente_cpf, status) 
VALUES 
('371a1359-37fe-468c-9f36-b2509fed34e7', '111.222.333-00', 'recebido'),
('cfa427e9-021c-4e85-b9b5-26ea1fa42855', '444.555.666-00', 'em preparação');

INSERT INTO pedidos_itens (pedido_id, item_id, quantidade) 
VALUES 
('371a1359-37fe-468c-9f36-b2509fed34e7', 1, 2),
('cfa427e9-021c-4e85-b9b5-26ea1fa42855', 2, 3);
