import React from 'react';
import PropTypes from 'prop-types';

import './PostHeader.scss';

const PostHeader = props => (
  <div className="container">
    <img src={props.avatar} alt="Avatar do Usuario" />
    <div className="info-usuario">
      <span className="nome-usuario">{props.nome}</span>
      <span className="tempo">{props.tempo}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string,
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
};

PostHeader.defaultProps = {
  avatar:
    'https://t4.ftcdn.net/jpg/01/16/06/45/240_F_116064582_KlXENacGmdt4xl8H6fQRYfSZLntLNKSX.jpg',
};

export default PostHeader;
