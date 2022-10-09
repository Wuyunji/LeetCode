// getPathsByList 根据list找出包含根节点的所有完整路径
function getPath(list) {
  let map = new Map();
  list.forEach((item) => {
    map.set(item.id, item.children);
  });
  return dfs(map, getId(map));
}

function getId(map) {
  let id = 0;
  map.forEach((value, key) => {
    id ^= key;
    value?.forEach((cid) => {
      id ^= cid;
    });
  });
  return id;
}

function dfs(map, id) {
  let children = map.get(id);
  let ans = [];
  if (!children) {
    ans.push([id]);
  } else {
    children.forEach((childId) => {
      let arr = dfs(map, childId);
      arr.forEach((cid) => {
        ans.push([id, ...cid]);
      });
    });
  }
  return ans;
}

const list = [
  { id: 6 },
  { id: 2, children: [5] },
  { id: 13 },
  { id: 5, children: [10, 11] },
  { id: 1, children: [2, 3, 4] },
  { id: 10 },
  { id: 8, children: [13] },
  { id: 4, children: [8, 9] },
  { id: 9 },
  { id: 3, children: [6, 7] },
  { id: 11, children: [14] },
  { id: 14 },
  { id: 7, children: [12] },
  { id: 12 },
];

let ans = getPath(list);
console.log(ans);
