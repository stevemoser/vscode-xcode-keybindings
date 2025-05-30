# Xcode Keymap for Visual Studio Code

This extension ports popular Xcode keyboard shortcuts to Visual Studio Code. After installing the extension and restarting VS Code your favorite keyboard shortcuts from Xcode are now available. 

## What keyboard shortcuts are included?

You can see all the keyboard shortcuts in the extension's contribution list. 


## Why don't all the keyboard shortcuts work? 

VS Code does not implement all of the commands available in Xcode. If you would like to see a feature in VS Code that is in Xcode, please open an issue on GitHub.

## How do I contribute a keyboard shortcut?

We may have missed a keyboard shortcut. If we did please help us out! It is very easy to make a PR. 

1. Head over to our [GitHub repository](https://github.com/stevemoser/vscode-xcode-keybindings). 
2. Open [`package.json`](https://github.com/stevemoser/vscode-xcode-keybindings/blob/master/package.json). 
3. Add a JSON object to [`contributes.keybindings`](https://github.com/stevemoser/vscode-xcode-keybindings/blob/master/package.json#L26) as seen below. 
4. Open a pull request. 

```json
{
    "mac": "<keyboard shortcut for mac>",
    "linux": "<keyboard shortcut for linux>",
    "win": "<keyboard shortcut for windows>",
    "key": "<default keyboard shortcut>",
    "command": "<name of the command in VS Code>"
}
```

You can read more about how to contribute keybindings in extensions in the [official documentation](http://code.visualstudio.com/docs/extensionAPI/extension-points#_contributeskeybindings). 

This extension was based off of [Microsoft's VS keybindings extension](https://github.com/Microsoft/vscode-vs-keybindings)

Also it was inspired by [brennanMKE's gist](https://gist.github.com/brennanMKE/8b0d9e5cb72cbd6380b5).
