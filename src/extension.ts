import * as vscode from 'vscode';

import { removeCommentsJS } from './modules/removeCommentsJS';
import { removeCommentsPython } from './modules/removeCommentsPython';
import { removeCommentsCSS } from './modules/removeCommentsCSS';
import { removeCommentsJava } from './modules/removeCommentsJava';
import { removeCommentsC } from './modules/removeCommentsC';
import { removeCommentsCSharp } from './modules/removeCommentsCSharp';
import { removeCommentsHTML } from './modules/removeCommentsHTML';

export function removeComments(text: string, language: string): string {
  switch (language) {
    case 'javascript':
    case 'typescript':
      return removeCommentsJS(text);
    case 'python':
      return removeCommentsPython(text);
    case 'css':
      return removeCommentsCSS(text);
    case 'java':
      return removeCommentsJava(text);
    case 'cpp':
    case 'c':
      return removeCommentsC(text);
    case 'csharp':
      return removeCommentsCSharp(text);
    case 'html':
      return removeCommentsHTML(text);
    default:
      return text;
  }
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'remove-comments.remove',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage('Editor is not active!');
        return;
      }

      const document = editor.document;
      const selectedText = editor.selection.isEmpty
        ? ''
        : document.getText(editor.selection);
      const language = document.languageId;

      if (selectedText.trim() === '') {
        return;
      }

      const updatedText = removeComments(selectedText, language);

      editor.edit((editBuilder) => {
        editBuilder.replace(
          editor.selection.isEmpty
            ? new vscode.Range(0, 0, document.lineCount, 0)
            : editor.selection,
          updatedText
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
