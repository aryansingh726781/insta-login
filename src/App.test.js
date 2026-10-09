import { render, screen } from '@testing-library/react';
import App from './App';

test.each([
  ['Log in with Facebook', 'https://www.facebook.com/'],
  ['Forgot password?', 'https://www.instagram.com/accounts/password/reset/'],
  ['Sign up', 'https://www.instagram.com/accounts/emailsignup/'],
])('renders %s with a valid destination', (name, href) => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name });
  expect(linkElement).toHaveAttribute('href', href);
});
