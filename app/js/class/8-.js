// 对象扩展
//简洁表示法
{
  let o = 1
  let k = 2
  let es5 = {
    o: o,
    k: k,
    f: function () {
      console.log("hello")
    }
  }
  let es6 = {
    o,
    k,
    f() {
      console.log("hello")
    }
  }
  console.log(es5, es6)
}

//属性表达式
{
  let a = 'b'
  let es5_obj = {
    a: 'c'
  }
  let es6_obj = {
    [a]: 'c'   // [a] 为变量的值
  }
  console.log(es5_obj, es6_obj)
}

//扩展运算符
{
  // babel不支持
  // let { a, b, ...c } = { a: "test", b: "kill", c: "ddd", d: "efg" }
  // console.log(c)
}

//Object新方法
{
  //新增api
  console.log(Object.is('abc', 'abc'))  // 和 'abc'==='abc' 一样
  console.log(Object.assign({ a: 'a' }, { b: 'b' }))  // 将后面的对象浅拷贝到前面, 只拷贝引用地址, 不拷贝继承属性

  let test = { k: 123, o: 456 }
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value])
  }
}