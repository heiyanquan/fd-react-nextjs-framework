export function tranNumber(num: number, point: number) {
  // 将数字转换为字符串,然后通过split⽅法⽤.分隔,取到第0个
  const numStr = num.toString().split('.')[0]
  if (numStr.length < 6) {
    // 判断数字有多⻓,如果⼩于6,,表⽰10万以内的数字,让其直接显⽰
    return numStr
  } else if (numStr.length >= 6 && numStr.length <= 8) {
    // 如果数字⼤于6位,⼩于8位,让其数字后⾯加单位万
    const decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
    // 由千位,百位组成的⼀个数字
    return parseFloat(parseInt(String(num / 10000)) + '.' + decimal) + '万'
  } else if (numStr.length > 8) {
    // 如果数字⼤于8位,让其数字后⾯加单位亿
    const decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point)
    return parseFloat(parseInt(String(num / 100000000)) + '.' + decimal) + '亿'
  }
}
