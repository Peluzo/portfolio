# 🚀 Como Enviar para o GitHub

## Passos para enviar o projeto para o GitHub:

### 1. Criar Repositório no GitHub (se ainda não criou)

1. Acesse: https://github.com/new
2. Nome do repositório: `portfolio` (ou outro nome de sua escolha)
3. Marque como **Public** ou **Private**
4. **NÃO** inicialize com README, .gitignore ou licença (já temos)
5. Clique em **Create repository**

### 2. Copiar a URL do repositório

Você verá uma URL tipo:
- `https://github.com/SEU-USUARIO/portfolio.git` (HTTPS)
- `git@github.com:SEU-USUARIO/portfolio.git` (SSH)

### 3. Adicionar o remote e fazer push

Execute os comandos abaixo (substitua a URL pela sua):

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/portfolio.git

# Enviar para o GitHub
git push -u origin main
```

## Ou execute diretamente:

Se você já sabe a URL do seu repositório, posso configurar automaticamente!

---

**Nota:** Se o repositório já existir e tiver conteúdo, você pode precisar fazer:
```bash
git pull origin main --allow-unrelated-histories
```
antes do push.
