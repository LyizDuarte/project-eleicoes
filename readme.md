# 🗳️ Sistema Web para Eleição

Este projeto foi feito para o desenvolvimento de um sistema web de processo eleitoral para prefeito. O sistema foi feito com Node.js, Express e EJS, com layout Bootstrap.

## 🛠️ Funcionalidades a serem Implementadas

* **➕ Cadastro de Candidatos:**
    * Criação de um formulário web para cadastrar novos candidatos à prefeitura.
    * O formulário deve coletar as informações necessárias com base na estrutura da tabela `tb_candidato`.
    * Implementação de validação no backend para impedir o cadastro de candidatos com o mesmo número.

* **🗑️ Exclusão de Candidatos:**
    * Integração da interface de listagem de candidatos existente com a funcionalidade de exclusão.
    * Permitir que usuários autenticados removam candidatos cadastrados.

* **✍️ Registro de Votos:**
    * Implementação da lógica no backend para receber o número do candidato selecionado na interface `/votacao`.
    * Registro do voto de forma incremental, atualizando a contagem de votos do candidato correspondente.

* **🏢 Listagem de Partidos:**
    * Criação de uma nova interface acessível através do item "Partidos" no menu.
    * Esta interface deve exibir uma listagem simples dos partidos cadastrados na tabela `tb_partido`, mostrando o código, nome e sigla de cada partido.

* **🔑 Autenticação de Usuários:**
    * Implementação da funcionalidade de login na rota `/login`.
    * A autenticação deve verificar as credenciais (CPF e senha) dos usuários na tabela `tb_usuarioeleicao`.
    * Criação de um middleware para proteger as rotas de gerenciamento de candidatos e listagem de partidos, tornando-as acessíveis apenas a usuários autenticados.
    * As rotas `/login` e `/votacao` devem ser públicas e acessíveis sem autenticação.

## ⚙️ Tecnologias Utilizadas

* **Backend:** Node.js e Express
* **Frontend:** EJS (para renderização das páginas) e Bootstrap (para o layout)
* **Banco de Dados:**
