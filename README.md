# 🧠 Psicólogo de Bolso com IA — Backend

Este repositório contém o **servidor backend** da aplicação "Psicólogo de Bolso com IA". Ele é responsável por intermediar a comunicação com a OpenAI, controlar os limites de uso e conectar-se ao banco de dados Supabase.

---

## 🔧 Funcionalidades

- Envia mensagens para o modelo GPT da OpenAI
- Verifica o limite diário de sessões por usuário
- Registra o uso de sessões no Supabase
- Serve como backend REST para o frontend em Next.js

---

## 🚀 Endpoints da API

| Método | Endpoint              | Descrição                                 |
|--------|-----------------------|-------------------------------------------|
| POST   | `/chat`               | Envia mensagens para a IA                 |
| GET    | `/api/check-usage`    | Verifica se o usuário atingiu o limite    |
| POST   | `/api/log-usage`      | Registra o uso de sessão no Supabase      |

---

## 📁 Estrutura de Pastas

