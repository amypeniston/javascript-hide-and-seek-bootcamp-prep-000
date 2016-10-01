function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  const parent = document.querySelectorAll('div#grand-node')
  var current = parent[0].querySelectorAll('div')
  var found = false
  var next

  while (found !== true) {
      next = current[0].querySelectorAll('div')

      if (current.length === 1) {
        found = true
        return current[0]
      } else {
        current = next
      }
  }
}
