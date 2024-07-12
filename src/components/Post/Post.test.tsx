import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from '.';

// Mocking do PostComments
jest.mock('../PostComments', () => () => <div data-testid="post-comments">Mocked PostComments</div>);

describe('Post Component', () => {
    test('renders Post component with image and text', () => {
        const childrenText = 'This is a sample post';
        const imageUrl = 'https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg';
        const altText = 'Sample Image';

        render(
            <Post imageUrl={imageUrl} altText={altText}>
                {childrenText}
            </Post>
        );

        const imageElement = screen.getByRole('img');
        const textElement = screen.getByText(childrenText);
        const commentsElement = screen.getByTestId('post-comments');

        //Comfirmando o elemento de imagem
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', imageUrl);
        expect(imageElement).toHaveAttribute('alt', altText);

        // Comfirmando o elemento de imagem
        expect(textElement).toBeInTheDocument();

        // Comfirmando o mocked PostComments component
        expect(commentsElement).toBeInTheDocument();
        expect(commentsElement).toHaveTextContent('Mocked PostComments');
    });
});
