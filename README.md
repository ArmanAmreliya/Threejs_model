# Three.js 3D Pokéball Viewer

A modern web application to display and interact with a 3D Pokéball model using [Three.js](https://threejs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). This project demonstrates loading GLTF models, HDRI environments, and interactive camera controls.

## Features

- ⚡️ Fast development with Vite
- 🎨 Utility-first styling with Tailwind CSS
- 🌀 3D rendering with Three.js
- 🌅 Realistic lighting using HDRI environment maps
- 🕹️ OrbitControls for interactive camera movement
- 📦 Loads GLTF 3D models (Pokéball example)

---
- 📦 Loads GLTF 3D models (Pokéball example)

</td>
<td>

<img src="./"" alt="3D Pokéball Preview" width="300"/>

</td>
</tr>
</table>

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Three.js
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your 3D model:**
   - Place your `pokemon_basic_pokeball.glb` file in the project root (or update the path in `main.js`).

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run build:css` — Watch and build Tailwind CSS

---

## Project Structure

```
Three.js/
├── index.html           # Main HTML file
├── main.js              # Three.js app entry point
├── index.css            # Tailwind CSS input
├── style.css            # Tailwind CSS output
├── pokemon_basic_pokeball.glb # 3D model (add your own)
├── package.json         # Project scripts and dependencies
└── ...
```

---

## Customization

- **Change the 3D model:**
  - Replace `pokemon_basic_pokeball.glb` with your own GLTF/GLB file and update the path in `main.js`.
- **Change the HDRI environment:**
  - Update the `hdriUrl` in `main.js` to use a different HDRI image.
- **Styling:**
  - Edit `index.css` and use Tailwind utility classes in your HTML.

---

## Troubleshooting

- **Model not loading?**
  - Ensure the `.glb` file path is correct and the file is present in the project directory.
- **Port already in use?**
  - Change the Vite dev server port in `vite.config.js` (if present).
- **Tailwind CSS not updating?**
  - Make sure `npm run build:css` is running in watch mode.

---

## Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
- [GLTF Overview](https://github.com/KhronosGroup/glTF)
- [Poly Haven HDRIs](https://polyhaven.com/hdris)

---

## License

This project is for educational and demonstration purposes. Please check individual asset licenses if you use your own models or HDRIs.
