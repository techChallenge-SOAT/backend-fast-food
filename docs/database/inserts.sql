INSERT INTO clientes (id, cpf, nome, email, senha) 
VALUES 
('0871955b-8707-410d-a069-69673cc3a735', '111.222.333-00', 'João', 'joao@example.com', 'senha123'),
('af39a9ee-a6f0-42f0-b2d6-15aed6c8e894', '444.555.666-00', 'Maria', 'maria@example.com', 'outrasenha456');

INSERT INTO itens (id, categoria, nome, descricao, preco_unitario) 
VALUES 
('401e97d9-0065-4f30-bf0f-ac471d33a0c1', 'Hambúrgueres', 'Hambúrguer de Carne', 'Hambúrguer de carne bovina com queijo e vegetais', 5.99),
('670d7b97-e82e-47f4-bb4a-cd3f05865c90', 'Batatas', 'Batata Frita', 'Batata frita crocante', 2.49),
('21d0a7d2-88ad-4d98-81d0-2fab0ce8ede8', 'Bebidas', 'Refrigerante', 'Refrigerante de cola ou guaraná', 1.99);

INSERT INTO pedidos (id, cliente_cpf, status) 
VALUES 
('371a1359-37fe-468c-9f36-b2509fed34e7', '111.222.333-00', 'recebido'),
('cfa427e9-021c-4e85-b9b5-26ea1fa42855', '444.555.666-00', 'em preparação');

INSERT INTO pedidos_itens (pedido_id, item_id, quantidade) 
VALUES 
('371a1359-37fe-468c-9f36-b2509fed34e7', '401e97d9-0065-4f30-bf0f-ac471d33a0c1', 2),
('cfa427e9-021c-4e85-b9b5-26ea1fa42855', 2, 3);
