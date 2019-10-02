/*
 * walk()
 * walks the dom and implements the callback method on each element
*/
function walk(node, callback) {
  let current = node.firstChild

  while(current) {

    // Do something
    callback(current)

    walk(current, callback)

    current = current.nextSibling

  }
}
