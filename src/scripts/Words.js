import list from "./WordList.json"

function generateList() {
  var array = [] 
  for (var i = 0; i < 200; i++) {
    array.push(list.Fr[Math.floor(Math.random() * list.Fr.length)])
  }
  return array
}

export {generateList}