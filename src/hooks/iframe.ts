import { LOCALHOST_URL } from '../common';
import { containerHideStyle, containerStyle, iframeStyle, setStyle } from './styles';

export const showIframe = (container: HTMLDivElement) => {
  setStyle(container, containerStyle);

  if (container.querySelector('iframe')) return;

  const iframe = document.createElement('iframe');

  iframe.src = LOCALHOST_URL;
  iframe.sandbox.value = 'allow-scripts allow-same-origin';
  setStyle(iframe, iframeStyle);

  container.appendChild(iframe);
};

export const hideIframe = (container: HTMLDivElement) => {
  setStyle(container, containerHideStyle);
};
