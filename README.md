# Gusu Made Platform

Gusu Made is a custom cultural and creative product platform that mixes AI image generation with handcraft aesthetics. The code base was migrated to **Vue&nbsp;3** using **Vite** for a simpler development experience while the original UniApp resources remain for reference.

## Development

### Install dependencies
```bash
cd vite-app
npm install
```

### Run a development server
```bash
npm run dev
```
This starts the app at `http://localhost:5173`.

### Build for production
```bash
npm run build
```
The compiled files will appear in `vite-app/dist/`.

## Directory Layout
```text
vite-app/
  index.html      # Entry page
  src/
    App.vue       # Root component
    main.js       # Mounts the app
  vite.config.js  # Vite configuration

# Legacy UniApp project (kept for reference)
colorui/
common/
components/
...other directories
```

## Key Features
- WeChat login and user profile management
- Template marketplace with AI‑powered image synthesis
- Finished product store with order management
- Admin system for configuration and analytics

For more background and detailed requirements see the project documentation.

## License
MIT
