function test() {
  for (let i = 1; i < 3; i++) {
    console.log(i)
  }
  // console.log(i)  // i 脱离了块作用域, 报引用错误(因为es6强制使用use strict)
}

function last() {
  const PI = 3.1415926
  // PI=3   // const 是不能修改的
  const k = {
    a: 1
  }
  k.b = 3   // k 存储的是对象的指针, 指针不可改变, 但对象可改变
  console.log(PI, k)
}

test()
last()