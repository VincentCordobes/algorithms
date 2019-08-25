/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = path => {
  const arr = path
    .split("/")
    .filter(Boolean)
    .reduce((acc, dir) => {
      if (dir === ".") {
        return acc
      }
      if (dir === "..") {
        acc.pop()
      } else {
        acc.push(dir)
      }
      return acc
    }, [])

  return "/" + arr.join("/")
}
