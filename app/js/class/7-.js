// 函数扩展
// 参数默认值
{
  function test(x, y = 'y') {
    console.log(x, y)
  }
  test(1, 2)
  test(1)
}

{
  let x = 'test'
  function test2(c, y = x) {
    console.log(c, y)
  }
  test2("kill")
}

// rest参数
{
  // 把输入参数转换成数组
  // rest 参数后,不能有其他参数
  function test3(...arg) {
    for (let v of arg) {
      console.log(v)
    }
  }
  test3(1, 2, 3, 4, 5)
}

// 扩展运算符
{
  // 把数组拆成离散的值
  console.log(...[1, 2, 4])   // 1 2 4
  console.log('a', ...[1, 2, 4])    // a 1 2 4
}

// 箭头函数
{
  let arrow = (v) => { v * 2 }
  // 等价于
  let arrow2 = function (v) {
    return v * 2
  }
  console.log(arrow(3) === arrow2(3))
}

// this绑定

// 尾调用
{
  // 函数的最后一句话是不是一个函数
  // 提升递归性能
  function tail(x) {
    console.log('tail', x)
  }
  function fx(x) {
    return tail(x)
  }
  fx(123)
}