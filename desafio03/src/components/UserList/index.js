import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../../store/actions/users';

import { Container, List } from './styles';

const UserList = props => (
  <Container>
    <List>
      {props.users.data.map(user => (
        <li key={user.id}>
          <img src={user.avatar} alt="Foto" />
          <div>
            <strong>{user.name}</strong>
            <small>{user.login}</small>
          </div>
          <button
            style={{
              background: 'transparent',
              color: 'red',
              border: 0,
            }}
            type="button"
            onClick={() => {
              props.removeUser(user.id);
            }}
          >
            <i className="fa fa-times-circle" />
          </button>
          <i className="fa fa-angle-right" />
        </li>
      ))}
    </List>
  </Container>
);

UserList.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      login: PropTypes.string,
    })),
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
