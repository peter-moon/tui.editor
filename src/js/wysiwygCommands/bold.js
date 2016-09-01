/**
 * @fileoverview Implements WysiwygCommand
 * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.
 */


var CommandManager = require('../commandManager');

/**
 * Bold
 * Add bold to selected wysiwyg editor content
 * @exports Bold
 * @augments Command
 * @augments WysiwygCommand
 */
var Bold = CommandManager.command('wysiwyg', /** @lends Bold */{
    name: 'Bold',
    keyMap: ['CTRL+B', 'META+B'],
    /**
     *  커맨드 핸들러
     *  @param {WysiwygEditor} wwe WYsiwygEditor instance
     */
    exec: function(wwe) {
        var sq = wwe.getEditor();

        sq.focus();

        if (sq.hasFormat('b') || sq.hasFormat('strong')) {
            sq.changeFormat(null, {tag: 'b'});
        } else if (!sq.hasFormat('a') && !sq.hasFormat('PRE')) {
            if (sq.hasFormat('code')) {
                sq.changeFormat(null, {tag: 'code'});
            }
            sq.bold();
        }
    }
});

module.exports = Bold;