/*
 *  @Soldy\noescaperc\2021.02.07\GPL3
 */
'use strict';

const noEscapeBase = function () {
    this.getHtml = function(in_text){
        return _getHtml (in_text);
    };
    const _map_html = {
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '\'':'&apos;',
        '"':'&quot;'
    };
    const _getHtml = function(in_text){
        if(typeof in_text === 'undefined')
            return undefined;
        return in_text.toString().replace(
            /[&<>"']/g, 
            function(in_char){
                return _map_html[in_char]; 
            }
        );
    };
};
exports.base = noEscapeBase;

