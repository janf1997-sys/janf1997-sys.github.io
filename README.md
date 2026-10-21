# Jan Furrer // Developer Portfolio & CV

Moderne, performante Portfolio-Website und interaktiver Werdegang, entwickelt mit Fokus auf saubere semantische HTML-Strukturen, modulare CSS-Architektur und Barrierefreiheit ohne Framework-Overhead.

🔗 **Live Demo:** [janf1997-sys.github.io](https://janf1997-sys.github.io/)

---

## 🛠 Tech Stack & Architektur

* **Core:** Semantic HTML5, Vanilla JavaScript (`main.js`), Modern Vanilla CSS
* **CSS-Architektur:** Modulare Strukturierung nach strikter Funktionstrennung:
  * `css/variables.css`: Zentrale CSS Custom Properties (Colors, Spacing, Typography)
  * `css/base.css`: CSS-Reset, Typografie-Basisstile, Layout-Defaults
  * `css/layout.css`: Responsive Grid- und Flexbox-Breakpoints (Desktop, Tablet, Mobile)
  * `css/components.css`: Isolierte UI-Elemente (Timeline, Cards, Badges, Buttons)
* **Vektor-Grafiken & UI:** Icons aus `assets/icons/` werden direkt als interaktive Inline-SVG-Elemente in das HTML eingebunden. Dies ermöglicht dynamische CSS-Farbanpassungen (`currentColor`), flüssige Hover-/Fokus-Effekte und eliminiert zusätzliche HTTP-Requests.
* **Design-System Workflow:** Figma-Synchronisation via **MCP (Model Context Protocol)**; `design-tokens.tokens.json` fungiert als statisches Referenz-Backup.
* **Hosting & CI/CD:** GitHub Pages via nativen Branch-Deploy (`main`-Branch).

---

## 📌 Features & Implementierungsdetails

* **Zero-Framework-Overhead:** Höchste Ladegeschwindigkeit und geringer Ressourcenverbrauch durch bewussten Verzicht auf externe Client-Libraries oder schwere Build-Pipelines.
* **Responsive Layout-Strategie:**
  * **Desktop:** Zweispaltiges Layout mit Sticky-Profil-Sidebar.
  * **Tablet:** Horizontal gegliederter Profil-Header, der den vertikalen Raum für die Timeline-Karten freigibt.
  * **Mobile:** Kompakte Hero-Ansicht mit einklappbaren Detailbereichen für sofortigen Zugriff auf Kerninhalte.
* **Interaktive Projektkarten:** Strukturierte Übersicht aktueller Schwerpunkte (inkl. TypeScript-Refactoring von JavaScript30 und relationalen Datenmodellen).

---

## 📂 Ordnerstruktur

```text
├── assets/
│   ├── docs/                     # Dokumente (z. B. PDF-Lebenslauf)
│   ├── icons/                    # Vektor-Masterdateien & Vorlagen
│   └── img/                      # Bildressourcen & Profilfoto
├── css/
│   ├── base.css                  # Grundlegende Elementstile & Reset
│   ├── components.css            # Wiederverwendbare UI-Komponenten
│   ├── layout.css                # Breakpoints & Rasterlayouts
│   └── variables.css             # Design Tokens & CSS-Variablen
├── js/
│   └── main.js                   # Interaktionslogik & DOM-Handling
├── .gitignore
├── design-tokens.tokens.json     # Backup der exportierten Design-Tokens
├── index.html                    # HTML5-Dokument mit Inline-SVGs
├── SPEC.md                       # Spezifikationsdokumentation & Designrichtlinien
└── README.md
```

---

## 🚀 Lokale Entwicklung

Das Projekt setzt vollständig auf native Web-Standards und benötigt keine zusätzlichen Build-Tools oder Node-Packages.

1. **Repository klonen:**
   ```bash
   git clone https://github.com/janf1997-sys/janf1997-sys.github.io.git
   cd janf1997-sys.github.io
   ```

2. **Lokal bereitstellen:**
   * **VS Code:** Rechtsklick auf `index.html` → *Open with Live Server*
   * **Python:** 
     ```bash
     python -m http.server 8000
     ```
   * Anschließend im Browser unter `http://localhost:8000` aufrufen.

---

## 📬 Kontakt

* **Live-Website:** [janf1997-sys.github.io](https://janf1997-sys.github.io/)
* **GitHub:** [@janf1997-sys](https://github.com/janf1997-sys)
* **E-Mail:** [janf.1997@gmail.com](mailto:janf.1997@gmail.com)