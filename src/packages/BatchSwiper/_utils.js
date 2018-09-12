import _ from 'lodash';

// 转换transform
export function formatTrans(option = {}) {
  const { scaleX = 1, scaleY = 1, rotate = 0, translateX = 0, translateY = 0 } = option;
  return `translate(${translateX},${translateY}) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`;
}

// 抚平数据
export function flattenMyTree(tree) {
  function recurse(nodes, display = '') {
    return _.map(nodes, node => {
      const newDisplay = _.union(display, [(node.style && node.style.display) || '']);
      // node.display = newDisplay;
      return [node, recurse(node.children, newDisplay)];
    });
  }
  return _.flattenDeep(recurse(tree));
}

// 父图层style
export function parentStyle(style = {}) {
  return {
    ...style,
    maskSize: undefined,
    maskRepeat: undefined,
    maskPosition: undefined,
    maskImage: undefined,
    borderColor: undefined,
    borderStyle: undefined,
    borderWidth: undefined,
    borderRadius: undefined,
    transform: undefined,
    backgroundImage: undefined,
    backgroundColor: undefined,
    backgroundSize: undefined,
    backgroundRepeat: undefined,
    boxShadow: undefined,
  };
}

// 子图层style
export function childStyle(style = {}) {
  const {
    maskSize,
    maskRepeat,
    maskPosition,
    maskImage,
    borderColor,
    borderStyle,
    borderWidth,
    borderRadius,
    // transform,
    backgroundImage,
    backgroundColor,
    backgroundSize,
    backgroundRepeat,
    boxShadow,
  } = style;
  return {
    maskSize,
    maskRepeat,
    maskPosition,
    maskImage,
    borderColor,
    borderStyle,
    borderWidth: `${borderWidth}px`,
    borderRadius,
    transform: formatTrans(style),
    backgroundImage,
    backgroundColor,
    backgroundSize,
    backgroundRepeat,
    boxShadow,
  };
}
