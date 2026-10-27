---
status: pending
title: Change the title to "Hello"
---

A small text change in two places: the on-page headline and the browser tab title.

1. In `src/routes/index.tsx`, change the large home-page headline text from "Hello, World!" to "Hello" — keep all existing styling (gradient text, responsive sizes, theme transitions) and the theme switcher untouched. Expected outcome: the home page displays "Hello" as its headline in every theme.
2. In `index.html`, change the browser tab title from "App" to "Hello". Expected outcome: the browser tab shows "Hello".
3. Run a typecheck and confirm the page renders with no errors in each of the five themes (Midnight, Sunrise, Ocean, Forest, Sunset). Expected outcome: the app builds cleanly and the new title appears on screen and in the tab.
