
# Workout Tracking (React + Vite)

## Structure
```
/ (racine du repo)
├─ package.json
├─ vite.config.js
├─ index.html
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   └─ components/ui/
      ├─ button.jsx
      ├─ card.jsx
      ├─ input.jsx
      ├─ label.jsx
      ├─ select.jsx
      └─ tabs.jsx
```

## Développement
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Le build sort dans le dossier `dist/`.

## Déploiement Vercel
- Build Command: `npm run build`
- Output Directory: `dist`

## Supabase (prod)
Configurer sur Vercel → Project → Settings → Environment Variables :
- `VITE_SUPABASE_URL` = https://<project>.supabase.co
- `VITE_SUPABASE_ANON_KEY` = <publishable anon key>
