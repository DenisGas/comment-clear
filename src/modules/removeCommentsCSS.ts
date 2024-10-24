export function removeCommentsCSS(text: string): string {
  const singleLineComment = /\/\*.*?\*\//g;
  const multiLineComment = /\/\*[\s\S]*?\*\//g;

  text = text.replace(singleLineComment, '');
  text = text.replace(multiLineComment, '');
  return text;
}
