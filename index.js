
exports.noescape = function escapeHtml(intext) {
    let map = {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      "'":"&apos;",
      '"':"&quot;"
    };
    if(typeof intext !== "undefined") 
        return intext.toString().replace(
            /[&<>"']/g, 
            function(m){
                return map[m]; 
            }
        );
    return undefined;
}


