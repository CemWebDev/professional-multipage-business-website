# Professional Multipage Business Website

[Live Demo →](https://professional-multipage-business-website.vercel.app/)

A modern, fully‑responsive **multi‑page** website built with **React 18**, **Vite 5**, and **Tailwind CSS 3**. Ideal for showcasing a corporate‑style landing + content site in your portfolio.

---

## ✨ Key Features

| Category                    | Details                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Multi‑page Routing**      | Seamless navigation between *Home*, *Sign In*, *Sign Up* and *Forgot Password* pages via `react‑router‑dom@6`. |
| **Responsive Design**       | Mobile‑first Tailwind utility classes with fluid typography.                                                        |
| **Reusable UI Components**  | Atomic `Button`, `Card`, `SectionHeader`, and `CTA` components speed up new‑page creation.                          |
| **Functional Contact Form** | Plug‑and‑play [Formspree](https://formspree.io/) integration (swap with your own endpoint in seconds).              |
| **Vercel Hosting**          | Automatic previews & production deploys for every push (zero‑config Vercel pipeline).                               |



---

## 🔧 Tech Stack

* **Frontend:** React 18, Vite 5, React Router DOM 6
* **Styling:** Tailwind CSS 3, PostCSS, Autoprefixer
* **Deployment:** Vercel (static SPA build)

---

## 🚀 Getting Started

```bash
# 1 – Clone the repository
$ git clone https://github.com/CemWebDev/professional-multipage-business-website.git
$ cd professional-multipage-business-website

# 2 – Install dependencies
$ npm install      # or pnpm / yarn

# 3 – Start the dev server
$ npm run dev      # http://localhost:5173
```

### Available Scripts

| Command            | Purpose                                |
| ------------------ | -------------------------------------- |
| `dev`              | Start Vite dev server with HMR         |
| `build`            | Generate a production build in `dist/` |
| `preview`          | Preview the production build locally   |
| `format`           | Run Prettier for code formatting       |

---

## 📁 Project Structure

```
├── public/               # Static assets & favicons
├── src/
│   ├── assets/           # Images, logos, icons
│   ├── components/       # Reusable UI atoms & molecules
│   ├── constants/        # Static data & config objects
│   ├── hooks/            # Custom React hooks
│   ├── layout/           # Page/layout wrappers
│   ├── pages/            # Route components
│   ├── routes/           # Nested route definitions & helpers
│   ├── App.jsx           # Root component
│   └── main.jsx          # Vite entry point
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```



---

## 🌐 Deployment

Deploying to your own Vercel account takes seconds:

1. **Fork** the repo and push it to GitHub.
2. Go to [Vercel](https://vercel.com) → **New Project**.
3. Select the repository and keep the *Vite → React* preset.
4. Ensure the output directory is `dist` (default).
5. Click **Deploy** – voilà, your own URL is live!

---

## 🙌 Contributing

Contributions are more than welcome! Feel free to **open an issue** for bugs or feature requests, or **create a pull request** with your improvements.

1. Fork the project & create your branch:  `git checkout -b feature/awesome`
2. Commit your changes:  `git commit -m "feat: add awesome feature"`
3. Push to the branch:  `git push origin feature/awesome`
4. Open a Pull Request.

Please follow the existing code style and add relevant tests where applicable.

---



## 📣 Acknowledgements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

---

Made with by [@CemWebDev](https://github.com/CemWebDev)

