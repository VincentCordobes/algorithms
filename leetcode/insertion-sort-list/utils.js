const toList = array => {
  const a = [...array]
  return a.reverse().reduce((acc, x) => {
    return {
      val: x,
      next: acc,
    }
  }, null)
}

const toArray = (list, acc = []) => {
  if (!list) {
    return acc
  }

  acc.push(list.val)
  return toArray(list.next, acc)
}

module.exports = {
  toList,
  toArray,
}
