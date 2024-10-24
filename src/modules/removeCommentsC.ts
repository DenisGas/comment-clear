export function removeCommentsC(text: string): string {
  const singleLineComment = /\/\/.*$/gm;
  const multiLineComment = /\/\*[\s\S]*?\*\//g;

  text = text.replace(singleLineComment, '');
  text = text.replace(multiLineComment, '');
  return text;
}
