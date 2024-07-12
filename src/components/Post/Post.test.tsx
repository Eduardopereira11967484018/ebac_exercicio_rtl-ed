/* eslint-disable @typescript-eslint/no-unused-vars */

import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import '@testing-library/jest-dom/extend-expect';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200" >
                Teste
            </Post>
        );
        expect(screen.getAllByText('Teste')).toBeInTheDoc();
    });
});

it('Should zoom in and out when image is clicked', () => {
    render(
        <Post imageUrl="https://via.placeholder.com/200x200" >
            Teste
            </Post>
    );
    const image = screen.getByAltText('Conteudo visual do post');

    //Clicando na imagem para ampliar
    fireEvent.click(image);

    //Verificando se a classe "zoomed" foi removida da imagem
    expect(image).not.toHaveClass('zoomed');

    //Clicando se a imagem para normalizar 
    fireEvent.click(image);

    //Verificando se a classe "zoomed" foi removida da imagem
    expect(image).toHaveClass('zoomed');
});
it('Should render comments section', () => {
    render(
        <Post imageUrl="https://via.placeholder.com/200x200" >
            Teste
            </Post>
    );

    // Verificando se a seção de comentarios foi renderizanda
    expect(screen.getByText('Comentarios')).toBeInTheDoc();  //Supondo que 'comentar' é um texto padrão na seção de comentario
});