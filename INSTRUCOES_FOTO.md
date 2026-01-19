# 📸 Como Adicionar Sua Foto

## Passo 1: Prepare sua imagem
- Formato: JPG, PNG ou WebP
- Tamanho recomendado: 600x600 pixels (quadrada)
- Peso: máximo 500KB (recomendado)
- Nome do arquivo: `profile.jpg` (ou `profile.png`)

## Passo 2: Coloque a imagem na pasta
1. Copie sua foto para a pasta: `src/assets/images/`
2. Renomeie para: `profile.jpg` (ou mantenha o formato original, mas ajuste o código)

## Passo 3: Atualize o componente (se necessário)
Se sua imagem tiver outro nome ou extensão, edite o arquivo `src/components/Hero/Hero.jsx`:

**Linha 11:** Altere o caminho da imagem:
```javascript
const image = await import('../../assets/images/profile.jpg')
```

Para:
```javascript
const image = await import('../../assets/images/seu-arquivo.png')
```

## ✅ Pronto!
Após adicionar a imagem, o componente Hero irá exibir sua foto automaticamente. Se a imagem não for encontrada, um placeholder SVG será exibido.

## 📝 Observações
- A imagem será exibida em formato circular
- O componente tem animação de hover
- Se a imagem não carregar, o placeholder será mostrado automaticamente


