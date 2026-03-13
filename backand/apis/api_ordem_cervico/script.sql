create table usuarios(
  id_usuario SERIAL primary key,
  nome varchar(100) not null,
  email varchar(150) not null,
  senha varchar(255) not null
);

create table departamentos (
  id_departamento serial primary key,
  nome varchar(100) not null,
  descricao varchar(300)
);

create table ordem_servicos (
  id_ordem serial primary key,
  nr_ordem int unique,
  titulo varchar(100) not null,
  descricao varchar(255) not null,
  prioridade varchar(100) not null,
  status varchar(100) not null,
  data date not null,
  id_usuario int not null references usuarios(id_usuario),
  id_departamento int not null references departamentos(id_departamento)
);

insert into usuarios(nome, email, senha) values('Ana Silva', 'ana.silva@gmail.com', 'senha123');
insert into usuarios(nome, email, senha) values('Ana Beatriz', 'ana.beatriz@gmail.com', 'beatriz123');
insert into departamentos(nome, descricao) values('sala 3', 'entre e vire a direita');
insert into departamentos(nome, descricao) values('sala 4', 'entre e vire a esqueda');

insert into ordem_servicos(nr_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento)
values
(1001, 'trocar cabo de rede', 'ponto de rede da sala 203 esta sem conexão', 'media', 'aberta', '2026-02-26', 1,1),
(1002, 'consertar ar-condicionado', 'unidade do laboratiorio parou de gelar', 'alta', 'em_andamento', '2026-02-26', 2,2)
