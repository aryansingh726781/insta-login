import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links with non-placeholder HTTPS destinations', () => {
  render(<App />);

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(14);
  links.forEach((link) => {
    const destination = new URL(link.getAttribute('href'));
    expect(destination.protocol).toBe('https:');
    expect(destination.hostname).not.toBe('');
  });
});

test('provides alternative text for every image, including decorative images', () => {
  render(<App />);

  const images = [
    ...screen.getAllByRole('img'),
    ...screen.getAllByRole('presentation'),
  ];
  expect(images).toHaveLength(4);
  images.forEach((image) => {
    expect(image).toHaveAttribute('alt');
  });
});
