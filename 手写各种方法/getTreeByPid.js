// toTreeByPid 根据pid id生成树
function getTree(node) {
  let map = new Map();
  node.forEach((item) => {
    map.set(item.id, item);
  });
  let ans = [];
  node.forEach((item) => {
    let parent = map.get(item.pid);
    if (parent) {
      // 有数据说明不是顶级节点，将数据放到该 children 子节点下
      (parent.children || (parent.children = [])).push(item);
    } else {
      // 没有数据说明是顶级节点放到val中
      ans.push(item);
    }
  });
  return JSON.stringify(ans);
}

let node = [
  { id: 1, pid: 0, name: "吉林省" },
  { id: 2, pid: 1, name: "长春市" },
  { id: 3, pid: 1, name: "松原市" },
  { id: 4, pid: 0, name: "辽宁省" },
  { id: 5, pid: 4, name: "沈阳市" },
  { id: 6, pid: 3, name: "扶余县" },
];

let s = getTree(node);
console.log(s);
