export function css3(el, property, value) {
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  if (value) {
    property = capitalize(property.toLowerCase())
    el.style['webkit' + property] = value
    el.style['Moz' + property] = value
    el.style['ms' + property] = value
    el.style['O' + property] = value
    el.style[property.toLowerCase()] = value
  } else {
    return window.getComputedStyle(el).getPropertyValue(
      ('webkit' + property) || ('Moz' + property) || ('ms' + property) || ('O' + property) || property
    )
  }
}

export function css(el, property, value) {
  if (value) {
    // CSS中像background-color这样的属性，‘-’在JavaScript中不兼容，需要设置成驼峰格式
    const index = property.indexOf('-')
    if (index !== -1) {
      const char = property.charAt(index + 1).toUpperCase()
      property.replace(/(-*){1}/, char)
    }
    el.style[property] = value
  } else {
    // getPropertyValue()方法参数类似background-color写法，所以不要转驼峰格式
    return window.getComputedStyle(el).getPropertyValue(property)
  }
}
