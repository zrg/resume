import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Mailto from './Mailto.svelte';
import { mailtoHref } from '$lib/mailtoHref';

describe('mailto', () => {
  it('changes the mailto property', async () => {
    // why oh why doesn't children work here
    const result = render(Mailto, {
      props: { children: () => '', 'data-testid': 'test' },
    });
    const element = result.getByTestId('test');

    expect(element.getAttribute('href')).toBe('#');
    await fireEvent(element, new Event('focus'));
    expect(element.getAttribute('href')).toBe(mailtoHref);
  });
});
