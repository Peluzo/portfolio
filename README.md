# React Portfolio - João Vitor Peluzo Cardoso

Personal portfolio built with React, featuring a modern design and multilingual support (Portuguese, English, French).

## English

### Technologies

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Modern and responsive styling
- **React Hooks** - State and side-effect management

### Installation

1. Clone the repository:
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:3000`

### Project Structure

```
src/
├── components/          # Organized React components
│   ├── Navbar/          # Main navigation
│   ├── Hero/            # Hero/intro section
│   ├── About/           # About me
│   ├── Skills/          # Skills
│   ├── Experience/      # Professional experience
│   ├── Education/       # Education
│   ├── TechStack/       # Technology stack
│   ├── Contact/         # Contact form
│   ├── Footer/          # Footer
│   └── ScrollToTop/     # Back-to-top button
├── contexts/            # React contexts
│   └── LanguageContext.jsx  # Language management
├── locales/             # Translation files
│   ├── pt.json          # Portuguese
│   ├── en.json          # English
│   └── fr.json          # French
├── styles/              # Global styles
│   └── global.css       # Global CSS and variables
├── App.jsx              # Main component
└── main.jsx             # Entry point
```

### Customization

#### Add Your Profile Photo

1. Place your photo in `src/assets/images/profile.jpg` or `public/profile.jpg`
2. See `COMO_ADICIONAR_FOTO.md` for detailed instructions

#### Change Language

The site supports 3 languages: Portuguese, English, and French. The language selector is in the navbar.

#### Change Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
    --primary-color: #0066CC;      /* Cruzeiro blue */
    --primary-dark: #0052A3;
    --secondary-color: #0080FF;
}
```

### Responsiveness

The site is fully responsive and adapts to different screen sizes:

- **Desktop**: Full layout with multiple columns
- **Tablet**: Adapted layout for medium screens
- **Mobile**: Single-column layout with hamburger menu

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build
- `npm run lint` - Runs the linter

### Features

- Smooth navigation between sections
- Responsive animated menu
- Multilingual support (PT, EN, FR)
- Scroll animations (Intersection Observer)
- Functional contact form
- Back-to-top button
- Modern and responsive design
- Component-based architecture
- React Hooks for state management

### Deploy

To deploy, you can use:

- **Vercel**: Connect your Git repository
- **Netlify**: Drag and drop the `dist` folder after build
- **GitHub Pages**: Configure GitHub Actions

To create the production build:
```bash
npm run build
```

The `dist` folder will contain optimized production files.

## Francais

### Technologies

- **React 18** - Bibliotheque JavaScript pour creer des interfaces utilisateur
- **Vite** - Outil de build et serveur de developpement rapide
- **CSS3** - Style moderne et responsive
- **React Hooks** - Gestion de l'etat et des effets

### Installation

1. Clonez le depot :
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. Installez les dependances :
```bash
npm install
```

3. Lancez le serveur de developpement :
```bash
npm run dev
```

4. Ouvrez votre navigateur sur `http://localhost:3000`

### Structure du projet

```
src/
├── components/          # Composants React organises
│   ├── Navbar/          # Navigation principale
│   ├── Hero/            # Section hero/intro
│   ├── About/           # A propos de moi
│   ├── Skills/          # Competences
│   ├── Experience/      # Experience professionnelle
│   ├── Education/       # Formation
│   ├── TechStack/       # Stack technologique
│   ├── Contact/         # Formulaire de contact
│   ├── Footer/          # Pied de page
│   └── ScrollToTop/     # Bouton retour en haut
├── contexts/            # Contextes React
│   └── LanguageContext.jsx  # Gestion des langues
├── locales/             # Fichiers de traduction
│   ├── pt.json          # Portugais
│   ├── en.json          # Anglais
│   └── fr.json          # Francais
├── styles/              # Styles globaux
│   └── global.css       # CSS global et variables
├── App.jsx              # Composant principal
└── main.jsx             # Point d'entree
```

### Personnalisation

#### Ajouter votre photo de profil

1. Placez votre photo dans `src/assets/images/profile.jpg` ou `public/profile.jpg`
2. Consultez `COMO_ADICIONAR_FOTO.md` pour les instructions detaillees

#### Changer la langue

Le site prend en charge 3 langues : portugais, anglais et francais. Le selecteur de langue se trouve dans la navbar.

#### Changer les couleurs

Modifiez les variables CSS dans `src/styles/global.css` :

```css
:root {
    --primary-color: #0066CC;      /* Bleu Cruzeiro */
    --primary-dark: #0052A3;
    --secondary-color: #0080FF;
}
```

### Responsive

Le site est totalement responsive et s'adapte a differentes tailles d'ecran :

- **Desktop** : Mise en page complete avec plusieurs colonnes
- **Tablet** : Mise en page adaptee aux ecrans moyens
- **Mobile** : Mise en page en colonne unique avec menu hamburger

### Scripts disponibles

- `npm run dev` - Demarre le serveur de developpement
- `npm run build` - Cree un build de production
- `npm run preview` - Previsualise le build de production
- `npm run lint` - Execute le linter

### Fonctionnalites

- Navigation fluide entre les sections
- Menu responsive avec animation
- Support multilingue (PT, EN, FR)
- Animations au scroll (Intersection Observer)
- Formulaire de contact fonctionnel
- Bouton retour en haut
- Design moderne et responsive
- Code organise en composants
- React Hooks pour la gestion de l'etat

### Deploiement

Pour le deploiement, vous pouvez utiliser :

- **Vercel** : Connectez votre depot Git
- **Netlify** : Glissez le dossier `dist` apres le build
- **GitHub Pages** : Configurez GitHub Actions

Pour creer le build de production :
```bash
npm run build
```

Le dossier `dist` contiendra les fichiers optimises pour la production.

## Author

**Joao Vitor Peluzo Cardoso**
- AI-Focused Developer | Full-Stack | Machine Learning Engineer
- LinkedIn: [linkedin.com/in/joão-vitor-peluzo-cardoso-data-scientist](https://www.linkedin.com/in/jo%C3%A3o-vitor-peluzo-cardoso-data-scientist/)
- GitHub: [github.com/Peluzo/git](https://github.com/Peluzo/git)
- Email: jvpeluzo@gmail.com

## License

This project is open source and available under the MIT License.
