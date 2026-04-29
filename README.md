---

## INDU PHARMA DECK

A modern, visually-rich AI-powered presentation app for industrial pharma automation, built with React, Vite, TailwindCSS, and motion/react.

### Features
- **Custom branding:** Uses your logo and ABA partner logo from the `public/` directory for perfect Vercel/static hosting compatibility.
- **Animated slides:** Smooth transitions and modern layout.
- **KPI & Chart graphics:** Ready for business/industrial data.
- **Mobile-friendly:** Responsive and accessible.

### Assets
- Place your logo and partner logos in the `public/` directory (e.g. `public/logo.png`, `public/aba.svg`).
- Reference them in your code as `/logo.png` and `/aba.svg`.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set your Gemini API key in `.env.local`:
   ```env
   GEMINI_API_KEY=your-key-here
   ```
3. Run the app locally:
   ```bash
   npm run dev
   ```

### Deployment (Vercel/Netlify/etc)
- All static assets in `public/` are automatically served at the root (`/logo.png`).
- No need to change asset paths for deployment.
- Redeploy after adding or updating images.

### Presentation Tips
- Use your logo in the first and last slides for brand recall.
- Keep slide content focused and visual.
- Use the built-in chart components for KPIs and trends.
- For best results, use high-contrast images and keep text concise.

---

For questions or contributions, open an issue or PR.
