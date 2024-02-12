# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CSS Convention

BEM (Block Element Modifier) Naming Convention:

BEM is a methodology for naming CSS classes that promotes modularity and reusability by dividing them into blocks, elements, and modifiers.

- **Block**: A standalone, independent component or module (e.g., `.card`, `.navbar`).
- **Element**: A part of a block that has no meaning outside of that block (e.g., `.card__title`, `.navbar__logo`).
- **Modifier**: A variation or state of a block or element (e.g., `.card--highlighted`, `.navbar__logo--small`).

Example:

```css
/* Block */
.card {
  /* Styles for the card block */
}

/* Element */
.card__title {
  /* Styles for the title inside the card */
}

/* Modifier */
.card--highlighted {
  /* Modifier styles for a highlighted card */
}
```

Using the BEM naming convention helps maintain a clear structure, enhances code readability, and makes CSS classes more predictable and reusable within your project.
