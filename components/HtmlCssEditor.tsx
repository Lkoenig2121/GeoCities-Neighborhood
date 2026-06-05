"use client";

import { useState } from "react";

interface HtmlCssEditorProps {
  html: string;
  css: string;
  onHtmlChange: (html: string) => void;
  onCssChange: (css: string) => void;
}

export function HtmlCssEditor({
  html,
  css,
  onHtmlChange,
  onCssChange,
}: HtmlCssEditorProps) {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "preview">(
    "html",
  );

  const previewDoc = `<!DOCTYPE html><html><head><style>
    body { margin: 0; padding: 16px; }
    blink { animation: blink 1s step-end infinite; }
    @keyframes blink { 50% { opacity: 0; } }
    ${css}
  </style></head><body>${html}</body></html>`;

  return (
    <div className="editor">
      <div className="editor__tabs">
        {(["html", "css", "preview"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            className={`editor__tab ${activeTab === tab ? "editor__tab--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="editor__panes">
        {activeTab === "html" && (
          <textarea
            className="editor__textarea"
            value={html}
            onChange={(e) => onHtmlChange(e.target.value)}
            spellCheck={false}
            placeholder="<div>Your chaotic HTML here...</div>"
          />
        )}
        {activeTab === "css" && (
          <textarea
            className="editor__textarea"
            value={css}
            onChange={(e) => onCssChange(e.target.value)}
            spellCheck={false}
            placeholder="body { background: #ff00ff; }"
          />
        )}
        {activeTab === "preview" && (
          <iframe
            className="editor__preview"
            srcDoc={previewDoc}
            title="Site preview"
            sandbox="allow-same-origin"
          />
        )}
      </div>
    </div>
  );
}
