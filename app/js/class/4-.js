// 安装兼容库 babel-polyfill

{
  console.log('a', '\u0061')
  console.log('s', `\u20BB7`)

  console.log('s', `\u{20BB7}`)
}

{
  let s = '𠮷'
  console.log(s.length)
  console.log(s.charAt(0))
  console.log(s.charAt(1))
  console.log(s.charCodeAt(0))  // 只取2个字节
  console.log(s.charCodeAt(1))

  let s1 = '𠮷ab'
  console.log(s1.length)
  console.log(s1.codePointAt(0))
  console.log(s1.codePointAt(0).toString(16))
  console.log(s1.codePointAt(1))
  console.log(s1.codePointAt(2))
  console.log(s1.codePointAt(3))
}

{
  console.log(String.fromCharCode("0x20bb7"))
  console.log(String.fromCodePoint("0x20bb7"))
}

{
  let str = '\u{20bb7}abc'
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i])
  }
  for (let code of str) {
    console.log('es6', code)
  }
}

{
  // 判断字符串是否包含某些字符
  let str = "string"
  console.log('includes', str.includes("str"))
  console.log('start', str.startsWith("st"))
  console.log('end', str.endsWith("ing"))
}

{
  let str = "abc"
  console.log(str.repeat(2))  // 重复2次
}

{
  // 模板字符串
  let name = "plover"
  let info = "hello world"
  let m = `i am ${name}, ${info}`
  console.log(m)
}

{
  // 补白
  console.log('1'.padStart(20, '0'))  // 向前补
  console.log('1'.padEnd(20, '0'))  // 向后补
}

{
  // 标签模板 
  // 防止xss攻击
  let user = {
    name: "plover",
    info: "hello world"
  }
  console.log(abc`i am ${user.name}, ${user.info}`)
  function abc(s, v1, v2) {
    console.log(s, v1, v2)
    return s + v1 + v2
  }
}

{
  console.log(String.raw`Hi\n${1 + 2}`)  // 对所有\进行转义
  console.log(`Hi\n${1 + 2}`)
}