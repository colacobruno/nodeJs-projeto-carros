# Cadastro de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro.

**Requisitos não funcionais**
Não tem.

**Regras de negócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
*O usuário responsável pelo cadastro deve ser o usuário administrador.

# Listagem de carros

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Requisitos de negócio**
O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**Requisitos de negócio**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser o usuário administrador.

# Cadastro de imagens no carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**Requisitos não funcionais**
Utilizar o multer para upload dos arquivos

**Requisitos de negócio**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser o usuário administrador.

# Aluguel de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel.

**Requisitos de negócio**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
