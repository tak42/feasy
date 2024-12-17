export type Styles = { property: keyof CSSStyleDeclaration; value: string }[];

export const btnStyle: Styles = [
  { property: 'width', value: '160px' },
  { property: 'height', value: '56px' },
  { property: 'color', value: 'red' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '160px' },
  { property: 'left', value: '80px' },
];

export const containerStyle: Styles = [
  { property: 'height', value: '50%' },
  { property: 'width', value: '50%' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '50%' },
  { property: 'left', value: '50%' },
  { property: 'transform', value: 'translate(-50%, -50%)' },
];

export const containerHideStyle: Styles = [
  { property: 'height', value: '0' },
  { property: 'width', value: '0' },
];

export const iframeStyle: Styles = [
  { property: 'height', value: '100%' },
  { property: 'width', value: '100%' },
  { property: 'background', value: 'white' },
];

export const setStyle = (htmlElm: HTMLElement, styles: Styles) => {
  styles.forEach((val) => {
    htmlElm.style.setProperty(String(val.property), val.value);
  });
};
