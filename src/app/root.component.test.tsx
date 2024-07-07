import { render } from '@testing-library/react';

import { describe, it, expect } from 'vitest';

import { Root } from './root.component';

describe('Root component', () => {
  it('should be in the document', () => {
    window.history.pushState({}, 'Test page', '/');
    const { getByTestId } = render(<Root />);

    expect(getByTestId(/root/i)).toBeInTheDocument();
  });
});
