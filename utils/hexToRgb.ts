interface IHexToRGB {
  r: number;
  g: number;
  b: number;
}

export function hexToRgb(hex: string): IHexToRGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }

  return {
    r: 255,
    g: 255,
    b: 255,
  };
}
