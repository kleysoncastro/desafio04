import React, { Component } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { HeadersMain } from './styles';

class Main extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://url-da-imagem.com/imagem.jpg',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        // Restante dos dados de um novo post
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <HeadersMain>
        <p className="Pface">facebook</p>
        <span>
          <p>perfil</p>
          <FaFacebook />
        </span>
      </HeadersMain>
    );
  }
}

export default Main;
