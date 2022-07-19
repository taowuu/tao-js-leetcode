var levelOrder = function(root) {
  // 边界条件
  if(root === null) {
    return []
  }
  // 保存每层节点
  var q = [root]
  var res = []
  // 每层有节点
  while(q.length > 0) {
    // 遍历完每层节点
    var level = q.length
    // 保存每层节点值
    var temp = []
    while(level > 0) {
      // 处理本层节点
      var cur = q.pop()
      if(cur !== null) {
        temp.push(cur.val)
        // 加入下层节点
        if(cur.left !== null) {
          q.unshift(cur.left)
        }
        if(cur.right !== null) {
          q.unshift(cur.right)
        }
      }
      level-=1
    }
    res.push(temp)
  }
  return res
}