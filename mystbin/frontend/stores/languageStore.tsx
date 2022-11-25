const languageIndex = {
  py: "python",
  python: "python",
  pyi: "python",
  js: "javascript",
  javascript: "javascript",
  jsx: "javascript",
  ts: "typescript",
  typescript: "typescript",
  tsx: "typescript",
  html: "html",
  swift: "swift",
  json: "json",
  rs: "rust",
  rust: "rust",
  ex: "elixir",
  elixir: "elixir",
  md: "markdown",
  markdown: "markdown",
  go: "go",
  cpp: "cpp",
  c: "cpp",
  h: "cpp",
  cs: "csharp",
  css: "css",
  hs: "haskell",
  perl: "perl",
  pl: "perl",
  pm: "perl",
  bash: "bash",
  zsh: "bash",
  sh: "bash",
  sql: "sql",
  nginx: "nginx",
  ini: "ini",
  toml: "toml",
  xml: "xml",
  yml: "yml",
  yaml: "yml",
  ino: "arduino",
  arduino: "arduino",
};

export default function getLanguage(language: string) {
  return languageIndex[language] ?? "none";
}
