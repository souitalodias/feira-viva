-- V4__senha_cliente_em_bcrypt.sql
-- Migra a senha da cliente de teste para BCrypt (Aula 14)
-- Substitua o hash abaixo pelo gerado no passo anterior
UPDATE clientes
SET senha_hash = '$2a$10$81wLxChEQkLBw7xjqT6khOTLKh04ftlMUwnNsi59LNZxwZ2ureO0K'
WHERE email = 'maria@email.com';