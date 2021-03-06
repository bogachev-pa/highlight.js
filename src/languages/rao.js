/*
Language: rao
*/

function(hljs) {
  return {
    case_insensitive: true,
    lexemes: /[a-zA-Z_$][a-zA-Z0-9_]*/,
    keywords: {
      keyword: 'type relevantSet operation keyboard rule relevant event any ' +
        'dpt set activity checks search ' +
        'sequence enumerative legacy uniform exponential normal triangular histogram constant ' +
        'function algorithmic table list result ' +
        'frame background if else for text rectangle line circle ellipse triangle Color ' +
        'enum int double boolean ' +
        'String array break return resource or ' +
        'and mod not exist notExist forAll except empty size left center right Alignment ' +
        'BLACK BLUE CYAN DARK_BLUE DARK_CYAN DARK_GRAY DARK_GREEN DARK_MAGENTA DARK_RED ' +
        'DARK_YELLOW GRAY GREEN MAGENTA RED WHITE YELLOW',
      constant: 'true false',
      built_in:'select first withMin withMax setValueBefore setValueAfter ' +
        'setParent setCondition setPriority setTerminateCondition evaluateBy ' +
        'compareTops terminateCondition init watchParameter watchState watchQuantity ' +
        'watchValue getValue duration begin end execute stop plan ' +
        'create erase currentTime'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}
