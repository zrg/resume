import { describe, it, expect } from 'vitest';
import { formatDate } from '$lib/formatDate';

describe('formatDate', () => {
  it("has a year and month'", () => {
    const testValue = '2001-11';
    expect(formatDate(testValue)).toBe('Nov 2001');
  });
});
