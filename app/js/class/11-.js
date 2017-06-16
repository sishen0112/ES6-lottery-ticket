// Proxy 代理 Reflect 
// Proxy 链接用户和最真实的对象
// Reflect 反射 Object
{
  // 供应商, 原始对象, 存储真实数据
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  // 代理商
  let monitor = new Proxy(obj, {
    // 实现代理的方法
    // 拦截(代理)对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 设置时代理
    set(target, key, value) {
      if (key === "name") { // 只能修改name
        return target[key] = value
      }
      else {
        return target[key]
      }
    },
    // 拦截 key in object 操作
    has(target, key) {
      if (key.startsWith('_')) {  // 如果以_开头, 返回false
        return false
      } else {
        return target[key]
      }
    },
    // 拦截delete
    deleteProperty(target, key) {
      if (key === "name") {  // 只能删除name
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },
    // 拦截object.keys, object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  })

  // 用户访问monitor
  // 用户读取/设置monitor属性, 最终通过Proxy传递给obj
  console.log('get', monitor.time)
  monitor.time = '2019'
  console.log('set', monitor.time)
  monitor.name = 'plover'
  console.log('set', monitor)
  console.log('name' in monitor)

  // delete monitor.time
  // console.log('delete', monitor)
  // delete monitor.name
  // console.log('delete', monitor)
  console.log('ownKeys', Object.keys(monitor))

}

{
  // Reflect
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }
  // 直接使用Reflect.get
  console.log('reflect get', Reflect.get(obj, 'name'))
}


{
  // 解耦校验模块
  function validator(target, validator) { // 对象, 校验规则
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) { // 拥有相关可枚举属性
          let va = this._validator[key]
          if (!!va(value)) {  // 如果校验规则通过
            return Reflect.set(target, key, value, proxy) // 反射到真实对象
          } else {
            throw Error(`不能设置${key}到${value}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val >= 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
      return validator(this, personValidators)  // 实例后得到proxy对象
    }
  }

  const person = new Person('李雷', 30)
  console.log(person)
  person.name = 48
  console.log(person)
}