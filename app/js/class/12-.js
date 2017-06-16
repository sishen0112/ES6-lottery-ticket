// 类和对象

// 基本语法
{
  // 基本定义和生成实例
  class Parent {
    constructor(name = "plover") { // 构造函数
      this.name = name
    }
  }
  let v_parent = new Parent('v')
  console.log(v_parent)
}

// 继承
{
  class Parent {
    constructor(name = "plover") { // 构造函数
      this.name = name
    }
  }

  class Child extends Parent {
  }

  console.log('继承', new Child("hhh"))
}

{
  // 继承传参数
  class Parent {
    constructor(name = "plover") { // 构造函数
      this.name = name
    }
  }

  class Child extends Parent {
    constructor(name = 'child', age = 18) {
      super(name)   // 调用父类构造方法, supper一定放在构造函数第一行
      this.age = age  // this 一定要放supper之后
    }
  }

  console.log('继承', new Child('热气腾腾'))
}

{
  // getter, setter
  class Parent {
    constructor(name = "plover") { // 构造函数
      this.name = name
    }

    get longName() {
      return 'longName ' + this.name
    }

    set longName(value) {
      this.name = value
    }
  }

  let v = new Parent()
  console.log(v.longName)
  v.longName = "hello"
  console.log(v)
}

//静态方法
{
  class Parent {
    constructor(name = "plover") { // 构造函数
      this.name = name
    }
    static tell() { // 静态方法, 通过类去调用
      console.log('tell', 12345678)
    }
  }

  Parent.tell()
}

// 静态属性
{
  class Parent {
    constructor(name = "plover") { // 构造函数
      this.name = name
    }
    static tell() { // 静态方法, 通过类去调用
      console.log('tell', 12345678)
    }
  }

  Parent.type = 'test'    // 静态属性, 直接在类上定义
  Parent.tell()
  console.log('static property', Parent.type)
}

//getter

//setter