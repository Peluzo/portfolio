# 📸 Como Adicionar Sua Foto de Perfil

## 📋 Passo a Passo

### 1. Prepare sua imagem
- **Formato recomendado**: JPG, PNG ou WebP
- **Tamanho ideal**: 600x600 pixels (quadrada)
- **Peso**: máximo 500KB (recomendado)
- **Nome do arquivo**: `profile.jpg` (ou `profile.png`, `profile.webp`)

### 2. Coloque a imagem na pasta
1. Copie sua foto para a pasta: `src/assets/images/`
2. Renomeie para: `profile.jpg` (ou mantenha o formato original, mas ajuste o código)

### 3. Atualize o componente Hero
1. Abra o arquivo: `src/components/Hero/Hero.jsx`
2. Encontre a linha 9-12:
   ```javascript
   // import profilePhoto from '../../assets/images/profile.jpg'
   const profilePhoto = null
   ```
3. Descomente a linha de import e comente a linha null:
   ```javascript
   import profilePhoto from '../../assets/images/profile.jpg'
   // const profilePhoto = null
   ```

### 4. Se usar outro nome ou extensão
Se sua imagem tiver outro nome ou extensão, ajuste o import:
```javascript
import profilePhoto from '../../assets/images/seu-arquivo.png'
```

### 5. Salve e teste
- Salve o arquivo
- A foto será exibida automaticamente no site
- Se a imagem não carregar, o placeholder SVG será mostrado

## ✅ Pronto!
Após adicionar a imagem e atualizar o código, sua foto será exibida automaticamente no site.

## 📝 Observações
- A imagem será exibida em formato circular
- O componente tem animação de hover
- Se a imagem não carregar, o placeholder será mostrado automaticamente
- A imagem será otimizada pelo Vite durante o build

## 🖼️ Exemplo de Estrutura
```
src/
  assets/
    images/
      profile.jpg  ← Sua foto aqui
      README.md
  components/
    Hero/
      Hero.jsx     ← Arquivo que precisa ser atualizado
```

## 🔧 Troubleshooting
- **Imagem não aparece**: Verifique se o caminho está correto
- **Erro de import**: Verifique se o nome do arquivo está correto (case-sensitive)
- **Imagem muito grande**: Redimensione a imagem antes de adicionar
- **Formato não suportado**: Use JPG, PNG ou WebP


