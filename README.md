# Workout Tracker – Push / Pull / Full (Vite + Tailwind)

## Démarrer
```bash
npm install
npm run dev
```
Puis ouvre http://localhost:5173.

## Build
```bash
npm run build
npm run preview
```

## Pourquoi ton design devenait "vieux HTML" ?
Parce que Tailwind n'était pas chargé. Cette version inclut Tailwind (via PostCSS) et des composants minimalistes
avec des classes utilitaires. Tant que `src/index.css` est bien importé par `src/main.jsx`, le rendu sera comme
dans la prévisualisation.

## Déploiement GitHub Pages
- Modifie `vite.config.js` et dé-commente `base: '/<nom-du-repo>/'`.
- `npm run build`
- Publie le dossier `dist` sur Pages.
