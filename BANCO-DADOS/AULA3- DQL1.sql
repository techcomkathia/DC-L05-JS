use biblioteca_cleitinho;

select * from autores;
select * from clientes;

select idCliente, nome, cpf, dataNascimento, cidade 
from clientes
where idCliente > (2+2) and idCliente !=10 ;