import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const protectReactFromTranslatedDom = () => {
  if (typeof window === "undefined") return;

  const originalRemoveChild = Node.prototype.removeChild;
  const originalInsertBefore = Node.prototype.insertBefore;

  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      return child;
    }

    return originalRemoveChild.call(this, child) as T;
  };

  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      return this.appendChild(newNode) as T;
    }

    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };
};

protectReactFromTranslatedDom();

createRoot(document.getElementById("root")!).render(<App />);
