// `types: ["node"]` in tsconfig keeps @types packages from being picked up
// automatically, and we import react-syntax-highlighter by deep path (one
// grammar at a time) rather than through the package root — so pull its
// declarations, which cover those deep paths, in explicitly.
/// <reference types="react-syntax-highlighter" />
