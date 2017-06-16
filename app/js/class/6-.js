{
  let arr = Array.of(3, 4, 7, 9, 11)  // 把数据变量转换为数据类型
  console.log(arr)

}

{
  // 类数组, 集合转换为数组
  let p = document.querySelectorAll('p')  //找到所有p元素, 这是一个类数组 
  let pArr = Array.from(p)  // 类数组转换为数组
  console.log(pArr)
  pArr.forEach((item) => {
    console.log(item.textContent)
  })

  // 可以当map使用
  console.log(Array.from([1, 3, 5], (item) => {
    return item * 2
  }))
}

{
  console.log('fill-7', [1, 'a', undefined].fill(7))  // 填充
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 2))   // 填充内容, 起始位置, 结束位置
}

{
  // 返回下标
  for (let index of ['1', 'c', 'b'].keys()) {
    console.log(index)
  }

  // 需要开启兼容模式
  // for (let value of ['1', 'c', 'b'].values()) {
  //   console.log(value)
  // }

  for (let [key, value] of ['1', 'c', 'b'].entries()) {
    console.log(key, value)
  }
}

{
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)) // 替换位置, 读取数据, 截止
}

{
  // 查找
  console.log([1, 2, 3, 4, 5, 6].find((item) => {
    return item > 3
  }))

  // 查找返回下标
  console.log([1, 2, 3, 4, 5, 6].findIndex((item) => {
    return item > 3
  }))
}

{
  console.log([1, 2, NaN].includes(NaN))
}