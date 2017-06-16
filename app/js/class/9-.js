// Symbol
// 概念
// symbol a 永远不等于 symbol b

// 作用
{
  //声明
  let a1 = Symbol()  // 永远独一无二
  let a2 = Symbol()
  console.log(a1 === a2)
  let a3 = Symbol.for('a3')   // for里面是key值, 声明时候检测是否有这个值
  let a4 = Symbol.for('a3')   // 如果已经有相关的symbol变量, 则取出, 否则创建
  console.log(a3 === a4)
}


{
  // 作用
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]: '123',      // 继承重写时不会被覆盖
    'abc': 345,
    'c': 456
  }
  console.log(obj)
  for (let [key, value] of Object.entries(obj)) {
    console.log([key, value])  // let of 遍历时候, 取不到symbo变量
  }

  console.log(Object.getOwnPropertySymbols(obj))  // 取symbol的属性

  console.log(Reflect.ownKeys(obj)) // 取所有属性, 返回数组
}
