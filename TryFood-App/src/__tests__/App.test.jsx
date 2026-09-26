import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('App Component', () => {
   test('renders App component', () => {
      render(
         <BrowserRouter>
            <App />
         </BrowserRouter>
      );
      expect(document.body).toBeInTheDocument();
   });
});
