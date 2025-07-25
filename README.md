# Smart Documentation Assistant (Visual Search Demo)

This project is a self-contained demo that simulates a **Smart Documentation Assistant** inside a developer's code editor (like **Windsurf**). It demonstrates how developers can use **AI-powered visual search** to find media assets and insert them into documentation **without leaving the editor**.

---

## 🧠 Core Workflow

1. A developer is writing a Markdown file.
2. They drag and drop a local image (e.g., a rough sketch or screenshot) into a search panel.
3. The system uses AI to find visually similar, official assets from a **Cloudinary** media library.
4. The developer clicks a result, and the correctly formatted **Markdown** for that image is inserted into their document.

---

## ▶️ How to Run the Demo

This is a **simple front-end demo** — no installation or build steps required.

1. Clone or download the project files.
2. Open `index.html` directly in your web browser.
3. You'll see the simulated editor. Drag any image from your computer onto the **Drag & Drop** zone to trigger the visual search.

---

## 🛠 Tech Stack (Simulated)

* **Editor Environment**: Windsurf
* **AI & Media Backend**: Cloudinary MCP Servers

  * `@cloudinary/asset-management` – for uploads and searching
  * `@cloudinary/analysis` – for AI-powered visual feature extraction
* **Frontend**: HTML, CSS, Vanilla JavaScript

> **Note**: The calls to the Cloudinary MCP servers are **simulated** in the `app.js` file. Results are mocked to showcase the intended workflow.
