import { createGlobalStyle } from "styled-components";
// import { createGlobalStyle, css, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
`

// const logoSpin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

// const reset = css`
//   /* reset mínimo e consistente */
//   *, *::before, *::after { box-sizing: border-box; }
//   html, body, #root { height: 100%; }
//   body { margin: 0; }
// `;

// export const GlobalStyles = createGlobalStyle`
//   ${reset}

//   body {
//     background: hsl(${({ theme }) => theme.colors.background});
//     color: hsl(${({ theme }) => theme.colors.foreground});
//     font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
//     line-height: 1.5;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   /* Container equivalente ao que você usava no #root do app.css */
//   #root {
//     max-width: 1280px;
//     margin: 0 auto;
//     padding: 2rem;
//     text-align: center;
//   }

//   /* Utilitários que você tinha no app.css */
//   .logo {
//     height: 6em;
//     padding: 1.5em;
//     will-change: filter;
//     transition: filter 300ms;
//   }
//   .logo:hover { filter: drop-shadow(0 0 2em rgba(100,108,255,0.67)); }
//   .logo.react:hover { filter: drop-shadow(0 0 2em rgba(97,218,251,0.67)); }

//   @media (prefers-reduced-motion: no-preference) {
//     a:nth-of-type(2) .logo { animation: ${logoSpin} infinite 20s linear; }
//   }

//   .card { padding: 2em; }
//   .read-the-docs { color: #888; }

//   /* borda/input/ring globais inspirados nos tokens */
//   :root {
//     --radius: ${({ theme }) => theme.radius};
//   }

//   * { border-color: hsl(${({ theme }) => theme.colors.border}); }
//   input, textarea, select {
//     border: 1px solid hsl(${({ theme }) => theme.colors.input});
//     outline: none;
//   }
//   :focus-visible {
//     outline: 2px solid hsl(${({ theme }) => theme.colors.ring});
//     outline-offset: 2px;
//   }
// `;
