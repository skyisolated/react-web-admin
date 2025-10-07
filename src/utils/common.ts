import * as Icon from '@ant-design/icons';
import React from "react";

export const icon2Element = (iconName: string) =>{
  const IconComponent = Icon[iconName as keyof typeof Icon];
  // 检查是否是有效的图标组件
  if (IconComponent) {
    return React.createElement(IconComponent as any);
  }
  return null;
}