# Woovi Pix+Credit Challenge
This is the repository for the Frontend Developer Challenge for Woovi.
The challenge is to replicate 3 pages of Woovi Checkout process, as designed in the following [Figma project](https://www.figma.com/design/hv1LgD7oNrtlmfWgKBG6PF/Woovi-Desafio-Front).

## Getting Started
Since this project is done using React and Vite, simply clone the repository and run the following command to start the development server.
```bash
npm ci
npm run dev
```

## Pages
The pages replicated are:
1. Payment Method
2. Pix
3. Credit Card
4. Confirmation

## Technologies
- React
- Vite
- TypeScript

## Libraries
Apart from Material-UI/Icons, no other external libraries were used in this project.
QR Code generation was done using my own implementation, which can be found in the `src/qr.ts` file.

## Structure
All pages are located in the `src/steps` directory, with each page having its own directory containing the components and styles for that page. Common components are located in the `src/components` directory.

## Styling
Styling is done with custom CSS. No CSS frameworks were used in this project.
The base styles such as colors and font definitions are located in the `src/index.css` file, with each component having its own styles in the `src/{component}/styles.css` file.
