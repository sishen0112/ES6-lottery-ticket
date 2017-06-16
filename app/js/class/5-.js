{
  console.log(0b11111111)
  console.log(0o767)
}

{
  Number.isFinite(15)   // 是否有穷 true
  Number.isFinite(NaN)  // false
  Number.isFinite(1 / 0) // false
  Number.isNaN(NaN) // ture
  Number.isNaN(0) // false
}

{
  // 判断是否为整数
  Number.isInteger(1)  // true
  Number.isInteger(1.0)  // true
  Number.isInteger(1.5)  // false
  Number.isInteger('1')  // false
}

{
  // 判断一个数是否有效-2^53~2^53
  console.log(Number.MAX_SAFE_INTEGER)
  console.log(Number.MIN_SAFE_INTEGER)
  Number.isSafeInteger(10)  // t
  Number.isSafeInteger('a')  // f
  Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // f
}

{
  console.log(Math.trunc(4.9))  // 只取整数部分
}

{
  // 判断正数还是负数
  console.log(Math.sign(-5))  // -1
  console.log(Math.sign(0))   // 0
  console.log(Math.sign(5))   // 1
  console.log(Math.sign('a'))   // NaN
}

{
  console.log(Math.cbrt(-8))   // 求立方根
}