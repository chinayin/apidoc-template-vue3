export function toLowerCase(value) {
  return (value && typeof value === 'string') ? value.toLowerCase() : ''
}

export function splitFill(value, splitChar, fillChar) {
  let splits = value.split(splitChar)
  return new Array(splits.length).join(fillChar) + splits[splits.length - 1]
}

/**
 * Replace underscore with space.
 * @param text
 * @returns {*}
 */
export function underscoreToSpace(text) {
  return text.replace(/(_+)/g, ' ')
}

/**
 * Convert Newline to HTML-Break (nl2br).
 * @param text
 * @returns {string}
 */
export function nl2br(text) {
  return ('' + text).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2')
}

/**
 * Return a text as markdown.
 * Currently only a little helper to replace apidoc-inline Links (#Group:Name).
 * Should be replaced with a full markdown lib.
 * @param string text
 */
export function markdown(text) {
  if (!text) {
    return text
  }
  text = text.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg, function (match, p1, p2, p3, p4, p5, p6) {
    let link = p3 || p5 + '/' + p6
    return '<a href="#api-' + p5 + '-' + p6 + '">' + link + '</a>'
  })
  return text
}

/**
 *
 * Check if Parameter (sub) List has a type Field.
 * Example: @apiSuccess          varname1 No type.
 *          @apiSuccess {String} varname2 With type.
 * @param fields
 * @returns {boolean}
 */
export function hasTypeInFields(fields) {
  let result = false;
  fields.forEach(x => {
    console.log('aaa', x)
    result = x.hasOwnProperty('type')
  })
  return result;
}
