# Portfolio React

Portfolio pessoal desenvolvido em React com componentes organizados e design moderno.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server rápido
- **CSS3** - Estilização moderna e responsiva
- **React Hooks** - Gerenciamento de estado e efeitos

## 📦 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React organizados
│   ├── Navbar/         # Navegação principal
│   ├── Hero/           # Seção hero/intro
│   ├── About/          # Sobre mim
│   ├── Skills/         # Habilidades
│   ├── Experience/     # Experiência profissional
│   ├── TechStack/      # Stack tecnológico
│   ├── Contact/        # Formulário de contato
│   ├── Footer/         # Rodapé
│   └── ScrollToTop/    # Botão de voltar ao topo
├── styles/             # Estilos globais
│   └── global.css      # CSS global e variáveis
├── App.jsx             # Componente principal
└── main.jsx            # Ponto de entrada
```

## 🎨 Personalização

### Adicionar Sua Foto de Perfil

1. Coloque sua foto em `src/assets/images/profile.jpg`
2. Abra `src/components/Hero/Hero.jsx`
3. Descomente a linha: `import profilePhoto from '../../assets/images/profile.jpg'`
4. Comente a linha: `const profilePhoto = null`
5. Salve e sua foto aparecerá automaticamente!

Veja `COMO_ADICIONAR_FOTO.md` para instruções detalhadas.

### Alterar Informações Pessoais

Edite os componentes para personalizar com suas informações:

- **Hero** (`src/components/Hero/Hero.jsx`): Nome, título e descrição
- **About** (`src/components/About/About.jsx`): Texto sobre você
- **Experience** (`src/components/Experience/Experience.jsx`): Experiências profissionais
- **Education** (`src/components/Education/Education.jsx`): Educação e formação
- **TechStack** (`src/components/TechStack/TechStack.jsx`): Tecnologias que você usa
- **Contact** (`src/components/Contact/Contact.jsx`): Informações de contato

### Alterar Idioma

O site suporta 3 idiomas: Português, Inglês e Francês. O seletor de idioma está no navbar.

### Alterar Cores

Edite as variáveis CSS em `src/styles/global.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #8b5cf6;
    /* ... outras variáveis */
}
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com múltiplas colunas
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Layout em coluna única com menu hamburger

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 📝 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Menu responsivo com animação
- ✅ Animações de scroll (Intersection Observer)
- ✅ Formulário de contato funcional
- ✅ Botão de voltar ao topo
- ✅ Design moderno e responsivo
- ✅ Código organizado em componentes
- ✅ Hooks React para gerenciamento de estado

## 🚀 Deploy

Para fazer deploy, você pode usar:

- **Vercel**: Conecte seu repositório Git
- **Netlify**: Arraste a pasta `dist` após o build
- **GitHub Pages**: Configure GitHub Actions

Para criar o build de produção:
```bash
npm run build
```

A pasta `dist` conterá os arquivos otimizados para produção.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 👨‍💻 Desenvolvido com

- React
- Vite
- CSS3
- JavaScript ES6+

---

Feito com ❤️ usando React

