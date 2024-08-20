export function formatWat(wat: string): string {
  const lines = wat.split("\n");
  let indentLevel = 0;
  const blockKeywords = ["module", "func", "if", "loop", "then", "else"];

  const indentedLines = lines.map((line) => {
    line = line.trim();

    // Decrease indent for closing parenthesis
    if (line.startsWith(")")) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    const indentedLine = "  ".repeat(indentLevel) + line;

    // Increase indent for block-carrying s-expressions
    if (blockKeywords.some((keyword) => line.includes(`(${keyword}`))) {
      indentLevel++;
    }

    return indentedLine;
  });

  return indentedLines.join("\n");
}
