# Gusu Made Platform

This repository contains the source code for **Gusu Made**, a custom cultural and creative goods platform. The project integrates AI generated content with traditional handicraft aesthetics. Users can create personalised souvenirs and order finished products online.

The code base has been migrated to **Vue 3** with **Vite** for a modern development experience. The original UniApp resources are kept for reference, while a new Vite project is located under `vite-app/`.

## Getting Started

```bash
# install dependencies
cd vite-app && npm install

# start local dev server
npm run dev
```

The development server runs at `http://localhost:5173` by default.

## Project Structure

```
vite-app/
  index.html          -- Application entry
  src/
    App.vue           -- Root Vue component
    main.js           -- Mounts the Vue application
  vite.config.js      -- Vite configuration
```

All legacy UniApp pages and components are kept in the repository for future reference.

## Troubleshooting

- **Sass compilation errors** – The project relies on the `sass:math` module for
  division operations. Ensure your environment uses **Dart Sass 1.33+**. Older
  versions will report `There is no module with the namespace "math"`. If
  updating is not possible, replace calls to `math.div` with the traditional `/`
  operator (which will emit deprecation warnings).
- **WeChat Developer Tools not launching** – Running `npm run dev:mp-weixin`
  requires a local installation of the WeChat Developer Tools. If the CLI
  reports `Fail to open IDE`, confirm the tool is installed and that no other
  instance is already running. You can manually open the tool and import the
  generated `dist/build/mp-weixin` directory.
  The port number printed in the log (for example `57018` or `57550`) is
  selected automatically by the tool and is **not** configured by this
  project.

## License

This project is released under the MIT License.
