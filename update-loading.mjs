import fs from "fs";
import path from "path";

const pagesDir = "d:/Development/Web/pmb-s3-stie-mahardhika/frontend/src/pages/publics";
const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".page.tsx"));

files.forEach((file) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  let originalContent = content;

  // 1. Replace useState(true) with useState(!sessionStorage.getItem('hasVisited'))
  content = content.replace(/const\s+\[isLoading,\s*setIsLoading\]\s*=\s*useState\(true\);/g, "const [isLoading, setIsLoading] = useState(!sessionStorage.getItem('hasVisited'));");

  // 2. Modify useEffect to check isLoading and set hasVisited
  // This is tricky because the useEffect content varies.
  // Instead of replacing the whole useEffect, we can just inject an early return.
  // Actually, wait, the simplest way is to replace `setIsLoading(false)` with `setIsLoading(false); sessionStorage.setItem('hasVisited', 'true');`
  content = content.replace(/setIsLoading\(false\);/g, "setIsLoading(false);\n        sessionStorage.setItem('hasVisited', 'true');");

  // 3. Inject early return in useEffect if already loaded?
  // We want to skip the 1 second delay entirely if it's not initial load.
  // The useEffect looks like:
  // useEffect(() => {
  //   ...
  // }, []);
  // We can change the useEffect dependency to `[isLoading]` and add an early return.
  // Let's use string manipulation to find useEffect.

  // Or even simpler:
  /*
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem('hasVisited'));

  // If already visited, we don't even need to run the slow image loading effect for rendering,
  // but it's safe to run it, just don't delay the render. Wait, if isLoading is false, the `if (isLoading)` block is skipped immediately!
  // So the page renders immediately. The useEffect STILL runs, does `setIsLoading(false)` again, which is harmless, and sets sessionStorage again, which is harmless.
  */

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Updated", file);
  } else {
    console.log("No changes in", file);
  }
});
