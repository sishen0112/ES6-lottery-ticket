// set
// set 集合中的元素不能重复
{
  let list = new Set()
  list.add(5) // Set 中用 add 增加元素
  list.add(7)
  console.log(list)
  console.log(list.size)  // 获取元素个数
}

{
  let arr = [1, 2, 3, 4, 5]
  let list = new Set(arr)
  list.add(5) // 添加重复元素, 不报错, 只是不生效
  console.log(list)
}

{
  // 利用set特性, 可以去重
  let arr = [1, 2, 3, 2, 1, 5]
  let arr2 = new Set(arr)
  console.log(arr2)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  console.log('has', list.has('add'))
  console.log('delete', list.delete('add'))
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  for (let key of list.keys()) {
    console.log(key)
  }
  for (let v of list.values()) {
    console.log(v)      // key 和 value 的值是一样的
  }
  for (let v of list) {
    console.log(v)      // key 和 value 的值是一样的
  }
  list.forEach((item) => {
    console.log(item)
  })
}

// WeakSet
// 
{
  let weakList = new WeakSet()
  // 和set的区别
  // 数据类型不同
  // weakSet 值必须是对象, 而且都是弱引用, 不会和垃圾回收机制挂钩
  let arg = {}
  weakList.add(arg)
  console.log(weakList)
  // 没有clear方法, 没有size属性, 不能遍历
}

// map
// object中, 任何值都可以作为key
//
{
  let map = new Map()
  let arr = ['123']
  map.set(arr, 456)
  console.log(map, map.get(arr))
}

{
  let map = new Map([['a', 123], ["b", 456]])
  console.log(map)
  console.log('size', map.size)
  console.log(map, map.get('a'))
  map.delete('b')
  console.log(map)
}

// WeakMap
//



// map 对比 array
{
  let map = new Map()
  let array = []
  // 增
  map.set('t', 1)
  array.push({ t: 1 })
  console.info(map, array)
  // console.log(map, array)

  // 查
  let map_exist = map.has('t')  // true
  let array_exist = array.find(item => item.t)  // 返回查到的对象

  // 改
  map.set('t', 2)
  array.forEach(item => item.t ? item.t = 2 : '')

  // 删
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)  // 删除数组中的元素
}


// set 对比 array
{
  let set = new Set()
  let array = []

  // 增
  set.add({ t: 1 })
  array.push({ t: 1 })
  console.log(set, array)
  // 查
  let set_exist = set.has({ t: 1 }) // 对象一定要保存过
  let array_exist = array.find(item => item.t)
  console.log(set_exist, array_exist)
  // 改
  set.forEach(item => item.t ? item.t = 2 : '')
  array.forEach(item => item.t ? item.t = 2 : '')
  // 删
  set.forEach(item => item.t ? set.delete(item) : '')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
}


// map set object
{
  let item = { t: 1 }
  let map = new Map()
  let set = new Set()
  let obj = {}

  // 增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1
  console.info(map, set, obj)

  // 查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  // 改
  map.set('t', 2)
  item.t = 2
  obj['t'] = 2
  obj.t = 3
  console.info(map, set, obj)

  // 删
  map.delete('t')
  set.delete(item)
  delete obj.t
  console.info(map, set, obj)
}