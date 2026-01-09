<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/11g0ssBjDBMIYKFqfDo4rqpJnW41lLswN

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

## Deployment to GitHub Pages

**Important Note on Case Sensitivity:**

GitHub Pages, running on a Linux-based server, is case-sensitive when serving files. This means `Image.png` and `image.png` are treated as different files. Ensure all file references in your code (HTML, CSS, JavaScript/TypeScript) precisely match the case of the actual filenames in your repository. Mismatched casing is a common cause of broken images and assets on GitHub Pages.

Additionally, when deploying to a subpath (e.g., `your-username.github.io/your-repo-name/`), ensure your `vite.config.ts` has the `base` property set correctly (e.g., `base: '/your-repo-name/'`). All asset paths (images, CSS, JS) should be relative to this base path, typically handled by Vite's build process. Avoid leading `/` in asset paths within your source code unless you intend them to be relative to the domain root (which is usually not the case for subpath deployments).