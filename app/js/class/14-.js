// Iterator接口

// 基本用法
{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  console.log(map.next()) // 显示2个key, value是里面的值, next为false, 表示还有下一步, 为true表示结束
  console.log(map.next())
  console.log(map.next())
}

{
   
}

// for...of