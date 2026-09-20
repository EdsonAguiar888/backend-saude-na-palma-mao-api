# 🩺 API Backend — Saúde na Palma da Mão

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-blue" alt="Status do Projeto">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

Repositório oficial do **Back-end (API REST)** da aplicação **"Saúde na Palma da Mão"**, desenvolvido como artefato do Projeto Integrador do 3º período do curso de Análise e Desenvolvimento de Sistemas da **Faculdade Senac Pernambuco**.

---

## 🎯 Sobre o Projeto

O projeto **"Saúde na Palma da Mão"** é uma plataforma digital voltada a mitigar barreiras de acesso e longas filas presenciais no atendimento médico. Esta API em **Nest.js** serve como o núcleo de integração Client-Server, oferecendo suporte robusto para gerenciamento de usuários, clínicas parceiras, profissionais de saúde (com foco inicial nas especialidades de **Ortopedia e Fisioterapia**) e o fluxo completo de agendamento de consultas para o público idoso e seus cuidadores.

---

## 🛠️ Tecnologias Utilizadas

O ecossistema do back-end foi estruturado com ferramentas modernas de mercado para garantir escalabilidade, tipagem estrita e facilidade de deploy:

* **[Nest.js](https://nestjs.com/)** — Framework Node.js progressivo para a construção de aplicações server-side eficientes e escaláveis.
* **[TypeScript](https://www.typescriptlang.org/)** — Superset JavaScript que adiciona tipagem estática ao código.
* **[Docker](https://www.docker.com/)** — Conteinerização dos serviços e do banco de dados para total paridade de ambiente entre os desenvolvedores.
* **API RESTful** — Padrão arquitetural para comunicação com o front-end em Angular e o futuro app em React Native, utilizando formato **JSON**.

---

## 👥 Equipe de Desenvolvimento

* Danilo Henrique
* Edson Aguiar
* Estevão Enoque
* Evencio Neto
* Igor Barbosa
* José Paulo Coutinho
* Mayara M. da Silva

**Docente Responsável:** Prof. Dr. Geraldo Gomes da Cruz Júnior  
**Professora de UX:** Profa. Ms. Samantha Pimentel  

---

## 📋 Requisitos do Sistema (MVP - 1ª Entrega)

Conforme a Especificação de Requisitos de Software (SRS), esta API contempla os seguintes módulos principais:

1. **Autenticação e Usuários (RF-001, RF-002):** Cadastro seguro com criptografia de senha (`hash`) e controle de acesso baseado em perfis (Paciente, Profissional, Administrador).
2. **Clínicas e Especialidades (RF-003, RF-004):** Gestão de clínicas parceiras e catálogo restrito a Ortopedia e Fisioterapia.
3. **Profissionais de Saúde (RF-005):** Cadastro vinculado a conselhos profissionais (CRM/CREFITO) e clínicas.
4. **Disponibilidade e Agendamentos (RF-006, RF-007, RF-008, RF-009):** Gestão de horários livres, efetivação de marcações e histórico/cancelamento de consultas.
5. **Painel Administrativo (RF-010):** Área restrita para manutenção global dos cadastros.

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 18+ recomendada)
* [Docker](https://www.docker.com/) e Docker Compose
* Gerenciador de pacotes `npm` ou `yarn`

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/paulodccoutinho/backend-saude-na-palma-mao-api.git](https://github.com/paulodccoutinho/backend-saude-na-palma-mao-api.git)
   cd backend-saude-na-palma-mao-api

   Instale as dependências:

Bash


npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto baseado no .env.example (ou configure as credenciais de conexão com o banco de dados via Docker).

Suba o ambiente conteinerizado (Banco de Dados / Infraestrutura):

Bash


docker-compose up -d
Execute a aplicação em modo de desenvolvimento:

Bash


npm run start:dev
A API estará rodando por padrão na porta configurada (geralmente http://localhost:3000).

🧪 Executando Testes
Bash


# Testes unitários
npm run test

# Testes e2e (end-to-end)
npm run test:e2e

# Cobertura de testes
npm run test:cov
📅 Cronograma de Entregas (Acadêmico)
1ª Entrega (14/10/2026): MVP Web (Front-end em Angular + API Nest.js + Banco de Dados conteinerizado via Docker)[cite: 6].

2ª Entrega (09/12/2026): Aplicação Mobile (React Native) integrada com Inteligência Artificial para pré-triagem[cite: 6].

📄 Licença
Este projeto é desenvolvido para fins acadêmicos no âmbito da Faculdade Senac Pernambuco.
