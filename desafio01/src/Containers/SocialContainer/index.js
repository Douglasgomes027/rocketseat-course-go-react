import React from 'react';

import Header from '../../Components/Header';
import Post from '../../Components/Post';

import './index.scss';

class SocialContainer extends React.PureComponent {
  state = {
    posts: [
      {
        id: 1,
        avatar:
          'https://swuniverse.weebly.com/uploads/6/9/3/8/6938918/7146962.jpg',
        nome: 'Anakin Skywalker',
        tempo: 'há 5 min',
        informacao:
          'Apesar de ter sido uma das pessoas mais importantes da Galáxia, Skywalker teve uma vida sofrida. Ele passou os primeiros anos de sua vida como um escravo em Tatooine, e mais tarde foi descoberto pelo Jedi Qui-Gon Jinn, que o libertou e o ingressou na Ordem Jedi, onde ele se tornou o Padawan de Obi-Wan Kenobi. Foi acreditado que Skywalker era o Escolhido da profecia Jedi, aquele que traria equilíbrio à força e destruiria os Siths. Entretanto, após anos lutando nas Guerras Clônicas, Anakin passou para o Lado negro da força, tornando-se aprendiz de Darth Sidious e assumindo o nome Darth Vader. Após an quase todos os Jedi durante sua servidão ao Império Galáctico, Vader foi redimido por seu filho Luke Skywalker, matando Sidious e destruindo o Império. Em seus momentos finais, Darth Vader retornou para o Lado da Luz, salvando a vida de seu filho e voltando a ser Anakin Skywalker, o Escolhido.',
      },
      {
        id: 2,
        avatar: 'https://swuniverse.weebly.com/uploads/6/9/3/8/6938918/2271774.jpg',
        nome: 'Yoda',
        tempo: 'há 15 min',
        informacao:
          'Yoda foi um dos mais célebres e mais poderosos Mestres Jedi de todos os tempos, conhecido pela sua enorme sabedoria, conhecedor profundo da Força e habilidades com o sabre de luz. Também foi um dos poucos Jedi da Republica galactica a sobreviver até a Guerra civil galactica.',
      },
      {
        id: 3,
        avatar: 'https://swuniverse.weebly.com/uploads/6/9/3/8/6938918/2338568.jpg',
        nome: 'Obi-Wan Kenobi',
        tempo: 'há 35 min',
        informacao:
          'Obi-wan Kenobi foi um lendário Cavaleiro Jedi, treinado pelos Mestres Jedi Yoda e Quin-Gon Jinn na sua juventude, e, mais tarde em sua vida, treinou Anakin e Luke Skywalker nos caminhos da Força. Obi-Wan também foi um General para a República Galactica durante as Guerras clônicas, e também foi conhecido como um dos melhores lutadores na ordem, e considerado como um dos mais poderosos usuários da Força a existir. ',
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Post data={this.state.posts} />
      </React.Fragment>
    );
  }
}

export default SocialContainer;
