{
  let a, b, rest
  [a, b] = [1, 2]
  console.log(a, b)
}


{
  let a, b, rest
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest)
}

{
  // 对象解构赋值
  let a, b
  ({ a, b } = { a: "aaa", b: "bbb" })
  console.log(a, b)
}

{
  let a, b, c, rest
  [a, b, c = 3] = [1, 2]
  console.log(a, b, c)
}

{
  // 应用, 变量交换
  let a = 1, b = 2;
  [a, b] = [b, a]
  console.log(a, b)
}

{
  function f() {
    return [1, 2]
  }
  let a, b
  [a, b] = f()
  console.log(a, b)
}

{
  // 选择性的接收某一个变量
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c
  [a, , , b] = f()
  console.log(a, b)
}

{
  // 不确定返回的数组个数
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c
  [a, ...b] = f()
  console.log(a, b)
}