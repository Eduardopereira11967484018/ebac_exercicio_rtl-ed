import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Post from '.'; 

test('deve adicionar os comentários', () => {
  render(<Post />);
  
  fireEvent.change(screen.getByTestId('post-comment-input'), {
    target: { value: 'primeiro comentário' },
  });
  fireEvent.click(screen.getByTestId('btn-post-comment'));

  expect(screen.getByText('primeiro comentário')).toBeInTheDocument();
});
