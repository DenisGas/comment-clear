# CommentClear

<div align=center>

![logo](https://github.com/DenisGas/comment-clear/blob/main/assets/icon.png?raw=true)

</div>

CommentClear — is a handy tool for removing comments from your code in the Visual Studio Code editor. The extension supports comment removal for several programming languages, making it an indispensable tool for developers.

<div align=center>

![VS Code version](https://img.shields.io/badge/VS%20Code-1.94.0%2B-blue)
![Visual Studio Marketplace Version (including pre-releases)](https://img.shields.io/visual-studio-marketplace/v/DenisGasilo.comment-clear)
![Visual Studio Marketplace Rating (Stars)](https://img.shields.io/visual-studio-marketplace/stars/DenisGasilo.comment-clear)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/DenisGasilo.comment-clear)
![GitHub](https://img.shields.io/github/license/DenisGas/comment-clear)
![GitHub Repo stars](https://img.shields.io/github/stars/DenisGas/comment-clear)

</div>

## Preview

<div align=center>

![Demo Video](https://github.com/DenisGas/comment-clear/blob/main/assets/demo.gif?raw=true)

</div>

## Supported file types

comment-clear supports comment removal in the following programming languages:

### Supported Languages

| Language   | File Extension | Comment Syntax                                                                              |
| ---------- | -------------- | ------------------------------------------------------------------------------------------- |
| JavaScript | `.js`          | `// Single line comment` <br> `/* Multi-line comment */`                                    |
| TypeScript | `.ts`          | `// Single line comment` <br> `/* Multi-line comment */`                                    |
| Python     | `.py`          | `# Single line comment` <br> `''' Multi-line comment '''` <br> `""" Multi-line comment """` |
| HTML       | `.html`        | `<!-- Single line comment -->` <br> `<!-- Multi-line comment <br> continues here -->`       |
| CSS        | `.css`         | `/* Single line comment */` <br> `/* Multi-line comment <br> continues here */`             |
| C          | `.c`           | `// Single line comment` <br> `/* Multi-line comment */`                                    |
| C++        | `.cpp`         | `// Single line comment` <br> `/* Multi-line comment */`                                    |
| C#         | `.cs`          | `// Single line comment` <br> `/* Multi-line comment */`                                    |
| Java       | `.java`        | `// Single line comment` <br> `/* Multi-line comment */`                                    |

## Support

- **Visual Studio Code Support**: Compatible with Visual Studio Code version **1.94.0** and higher
- **Cross-platform Support**: This extension works on various operating systems, including Windows, macOS, and Linux.

Ось покращений опис функцій вашого розширення:

## Features

1. **Removing One-Line Comments**: Easily remove single-line comments that start with `//` (JavaScript, TypeScript) or `#` (Python). This streamlines your code by eliminating unnecessary annotations.

2. **Removing Multi-Line Comments**: Effortlessly remove multi-line comments that span several lines, such as `/* ... */` (JavaScript, CSS) and `""" ... """` (Python). This helps in cleaning up the code without manually searching for and deleting each comment.

3. **Context Menu Integration**: Access the comment removal functionality directly from the context menu in the editor. This allows for a seamless user experience when cleaning up code comments.

4. **Keyboard Shortcuts**: Quickly invoke the comment deletion command using the keyboard shortcut **Ctrl + Alt + D**. This feature enhances productivity by providing a fast and convenient way to remove comments without navigating through menus.

## How to Use

1. **Select Code**: Highlight the portion of code that contains comments you want to remove.
2. **Use Shortcut**: Press `Ctrl + Alt + D` to remove comments from the selected code.
3. **Context Menu**: Alternatively, right-click on the selected code and choose **Remove Comments** from the context menu.

## Known Issues

Sometimes regular expressions can be removed from the code.
