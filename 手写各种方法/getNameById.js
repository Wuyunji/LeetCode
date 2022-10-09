function getNameById(address, findId) {
  const stack = [...address];
  while (stack.length) {
    const node = stack.shift();
    if (node.id === findId) {
      return node.name;
    } else {
      if (node.children) {
        stack.push(...node.children);
      }
    }
  }
  return "";
}

const address = [
  {
    id: 1,
    name: "北京市",
    children: [
      { id: 11, name: "海淀区", children: [{ id: 111, name: "中关村" }] },
      { id: 12, name: "朝阳区" },
    ],
  },
  { id: 2, name: "河北省" },
];

let s = getNameById(address, 111);
console.log(s);
