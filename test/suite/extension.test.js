const assert = require('assert');
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

describe('Extension Basics', function() {
  it('Extension should activate', async function() {
    const ext = vscode.extensions.getExtension('stevemoser.xcode-keybindings');
    assert.ok(ext, 'Extension not found');
    await ext.activate();
    assert.ok(ext.isActive, 'Extension did not activate');
  });

  it('package.json keybindings are valid', function() {
    const pkgPath = path.resolve(__dirname, '../../package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const keybindings = pkg.contributes && pkg.contributes.keybindings;
    assert.ok(Array.isArray(keybindings), 'keybindings is not an array');
    for (const kb of keybindings) {
      assert.ok(kb.command, 'command missing');
      assert.ok(kb.key || kb.mac || kb.win || kb.linux, 'keyboard shortcut missing');
    }
  });
});
