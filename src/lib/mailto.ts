import type { FocusEventHandler } from 'svelte/elements';

export const mailtoValue =
  'mailto:zevgoldberg@gmail.com?subject=Very%20impressive%20resume%21&body=Let%27s%20make%20' +
  'something%20happen.%20When%20is%20a%20good%20time%20to%20meet%3F';

export const mailto: FocusEventHandler<HTMLAnchorElement> = (event) => {
  event.currentTarget.setAttribute('href', mailtoValue);
};
