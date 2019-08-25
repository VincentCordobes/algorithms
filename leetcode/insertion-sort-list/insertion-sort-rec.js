/**
 * @typedef {{ val: number; next: ListNode | null }} ListNode
 */
/**
 * @param {ListNode} head
 *
 * @return {ListNode}
 */
const insertionSortList = head => {
  let aux = (sorted, head) => {
    if (!head) {
      return sorted
    }

    if (!head.next) {
      return insert(head.val, sorted)
    }

    return aux(insert(head.val, sorted), head.next)
  }

  return aux(null, head)
}

const insert = (x, list) => {
  if (!list || x < list.val) {
    return {val: x, next: list}
  }

  return {
    val: list.val,
    next: insert(x, list.next),
  }
}

module.exports = {
  insertionSortList,
}
