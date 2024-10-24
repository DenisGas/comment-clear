export function removeCommentsHTML(text: string): string {
  const singleLineComment = /<!--[\s\S]*?-->/g;

  text = text.replace(singleLineComment, '');
  return text;
}
