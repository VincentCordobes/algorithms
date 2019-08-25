const {toList} = require("./utils")
/**
 * @typedef {{ val: number; next: ListNode | null }} ListNode
 */

/**
 * @param {ListNode} head
 *
 * @return {ListNode}
 */
const insertionSortList = head => {
  let sorted = []
  let l = head
  while (l) {
    sorted = insert(l.val, sorted)
    l = l.next
  }

  return toList(sorted)
}

/**
 * @param {x} number
 * @param {ListNode} list
 *
 * @return {ListNode}
 */
const insert = (x, list) => {
  if (!list.length) {
    return [x]
  }

  let i = 0
  while (i < list.length) {
    const val = list[i]
    if (x < val) {
      return [...list.slice(0, i), x, ...list.slice(i, list.length)]
    }
    i++
  }
  return [...list, x]
}

module.exports = {
  insertionSortList,
}
