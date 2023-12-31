export const sortByName = (arr: Category[]) => {
  return arr.sort(function (a, b) {
    return a.name.localeCompare(b.name, 'no', { sensitivity: 'accent' })
  })
}
export const sortByTitle = (arr: Video[]) => {
  return arr.sort(function (a, b) {
    return a.title.localeCompare(b.title, 'no', { sensitivity: 'accent' })
  })
}
export  const sortByStartTime = (arr: Chapter[]) => {
  return arr.sort(function (a, b) {
    return a.start - b.start
  })
}