# 📸 Como Adicionar Sua Foto de Perfil

## 🎯 Instruções Rápidas

### Passo 1: Prepare sua foto
- Formato: JPG, PNG ou WebP
- Tamanho: 600x600 pixels (quadrada) - recomendado
- Peso: máximo 500KB
- Nome: `profile.jpg` (ou `profile.png`)

### Passo 2: Coloque a foto na pasta
1. Copie sua foto para: `src/assets/images/`
2. Renomeie para: `profile.jpg`

### Passo 3: Atualize o código
1. Abra: `src/components/Hero/Hero.jsx`
2. Encontre as linhas 11-18:
   ```javascript
   // import profilePhoto from '../../assets/images/profile.jpg'
   const profilePhoto = null
   ```
3. Altere para:
   ```javascript
   import profilePhoto from '../../assets/images/profile.jpg'
   // const profilePhoto = null
   ```
4. Salve o arquivo

### Passo 4: Teste
- Execute: `npm run dev`
- Sua foto aparecerá automaticamente no site!

## ✅ Pronto!
Sua foto será exibida automaticamente após seguir esses passos.

## 🔧 Se usar outro nome ou extensão

Se sua foto tiver outro nome (ex: `minha-foto.png`), ajuste o import:

```javascript
import profilePhoto from '../../assets/images/minha-foto.png'
```

## 📝 Observações
- A foto será exibida em formato circular
- Se a foto não carregar, um placeholder SVG será exibido
- A foto será otimizada pelo Vite durante o build

## 🆘 Problemas?
- **Foto não aparece**: Verifique se o caminho está correto
- **Erro de import**: Verifique se o nome do arquivo está correto (case-sensitive)
- **Foto muito grande**: Redimensione antes de adicionar

## 📁 Estrutura de Pastas
```
src/
  assets/
    images/
      profile.jpg  ← Sua foto aqui
  components/
    Hero/
      Hero.jsx     ← Arquivo a atualizar
```


