const {data} = require("./data")
const {toList, toArray} = require("./utils")
const {insertionSortList} = require("./insertion-sort")
const {
  insertionSortList: insertionSortListRec,
} = require("./insertion-sort-rec")

const list = toList(data)
const recResult = insertionSortListRec(list)
const result = insertionSortList(list)

const arr1 = toArray(recResult)
const arr2 = toArray(result)

let equals = true
for (let i = 0; i < arr1.length; i++) {
  const item1 = arr1[i]
  const item2 = arr2[i]

  if (item1 !== item2) {
    equals = false
    break
  }
}

console.log(equals)
