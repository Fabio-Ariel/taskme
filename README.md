# ✅ TaskMe

Um gerenciador de tarefas simples e intuitivo desenvolvido com **Django**.  
Permite criar, editar, listar e visualizar tarefas com **status coloridos** (Pendente, Concluída, Em Atraso).  
Ideal para organizar seu dia de forma leve e prática.

---

## 🚀 Tecnologias

- 🐍 **Python 3.10+**
- 🌐 **Django 4.2+**
- 🎨 **HTML / CSS / JavaScript**
- ⚙️ **SQLite** (banco de dados padrão do Django)

---

## 🧩 Funcionalidades

✅ Criar novas tarefas  
✅ Editar e atualizar tarefas existentes  
✅ Visualizar detalhes de uma tarefa  
✅ Exibir lista de tarefas com status coloridos  
✅ Interface simples e responsiva  

---

## 📦 Instalação e execução

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/Fabio-Ariel/taskme.git
cd taskme
````
###2️⃣ Crie e ative o ambiente virtual
```bash
python -m venv venv
# Ativar no Windows
venv\Scripts\activate
# Ativar no Linux/Mac
source venv/bin/activate
```
### 3️⃣ Instale as dependências
```bash
pip install -r requirements.txt
```
### 4️⃣ Configure a chave secreta do Django
Crie um arquivo chamado .env na raiz do projeto e adicione:
```bash

DJANGO_SECRET_KEY=sua_chave_secreta_aqui
```
⚠️ Importante: nunca compartilhe sua chave secreta.
O .gitignore já impede que esse arquivo seja enviado ao GitHub.

### 5️⃣ Aplique as migrações do banco
```bash
python manage.py migrate
```
### 6️⃣ Inicie o servidor local
```bash
python manage.py runserver
```
Acesse no navegador:
👉 http://127.0.0.1:8000

📁 Estrutura do projeto
```bash

taskme/
│
├── tasks/                 # App principal
│   ├── templates/         # HTMLs (listagem, criação, edição)
│   ├── static/            # Arquivos CSS e JS
│   ├── models.py          # Modelos de dados
│   ├── views.py           # Lógica de visualização
│   └── urls.py            # Rotas do app
│
├── taskme_project/        # Configurações do Django
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── db.sqlite3             # Banco de dados local (ignorado no Git)
├── manage.py
├── .env                   # Variáveis de ambiente (não subir)
├── .gitignore
├── requirements.txt
└── README.md
```
🖼️ Visual do Projeto
A listagem de tarefas exibe os status com cores:

Status	Cor
🟢 Concluída	Verde
🟡 Pendente	Amarelo
🔴 Atrasada	Vermelho

💡 Autor
👤 Fabio Ariel
📂 GitHub: @Fabio-Ariel

🛡️ Licença
Este projeto está sob a licença MIT.
Sinta-se livre para usar e modificar.

💬 “Organize seu tempo. Gerencie suas tarefas. Simplifique sua rotina com o TaskMe.”
