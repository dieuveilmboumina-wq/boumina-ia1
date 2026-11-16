# MBOUMINA IA

**L’excellence avant tout.** Application React/Vite avec API Express et base SQLite, transférée dans le dépôt public `boumina-ia1`.

## Démarrer en local

- Node.js 20+ et npm
- `npm install`
- `cp .env.example .env` puis configurez au minimum `SESSION_SECRET` (générez-le avec `openssl rand -hex 32`). Pour créer l’administrateur initial, configurez `ADMIN_EMAIL` et un `ADMIN_PASSWORD` de 12 caractères minimum.
- `npm run dev`, puis ouvrez `http://localhost:5173`.
- Vérification : `npm test` puis `npm run build`.

## Déploiement

Le Dockerfile et `render.yaml` fournissent une base de déploiement avec disque persistant SQLite. Autorisez le dépôt dans votre hébergeur, renseignez les secrets et déclenchez le service depuis son tableau de bord. Aucun déploiement public n’est lancé automatiquement par ce dépôt. Une URL publique n’existera qu’après un build et un déploiement réussis.

## Fonctions incluses

Authentification serveur (bcrypt, cookies HttpOnly, SQLite), conversations personnelles, console admin protégée, génération de texte dans le navigateur via Transformers.js et modèle open source (téléchargement à la demande), statistiques CSV simples, import/export documents localement (TXT/MD/CSV/PDF numérique/DOCX, PDF/TXT/DOCX export), clip WebM typographique local (30–300 secondes), interface responsive.

La vidéo est une animation de texte, non une génération vidéo réaliste par IA. Les PDF image nécessitent OCR qui n’est pas inclus. Le modèle compact peut produire des résultats imparfaits ; vérifier les contenus importants. Les traitements et imports nécessitent les ressources du navigateur. Les paramètres de quotas/abonnements, OCR, audit de production, sauvegardes testées et gestion avancée de projets ne sont pas inclus.
