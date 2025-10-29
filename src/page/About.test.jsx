import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutPage from './About';
import { MemoryRouter } from 'react-router-dom';

describe('AboutPage', () => {
  it('renders the About Us title', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/About Us/i);
    expect(titleElement).toBeInTheDocument();
  });
});
