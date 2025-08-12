| Dossier            | Utilité principale                                                                                 |
|--------------------|----------------------------------------------------------------------------------------------------|
| **`pages/`**       | Contains the application pages. Each `.vue` file automatically becomes a route.                    |
| **`components/`**  | Contains reusable View components (buttons, cards, etc.).                                          |
| **`composables/`** | Reusable functions based on Vue's Composition API (e.g., custom hooks, business logic).            |
| **`layouts/`**     | Layout templates (e.g. layout with header/footer common to several pages).                         |
| **`plugins/`**     | Initializing external plugins or libraries                                                         |
| **`middleware/`**  | Functions that run before a page is rendered (e.g. authentication, redirects).                     |
| **`assets/`**      | Static files to transform (images, styles, fonts, SCSS files, etc.).                               |
| **`public/`**      | Static files served directly (images, favicons, robots.txt, etc.).                                 |
| **`server/api/`**  | Backend API Endpoints (serverless functions) — server-side, perfect for building an API in Nuxt 3. |
