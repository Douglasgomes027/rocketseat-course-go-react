import React, { Component, Fragment } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import 'mapbox-gl/dist/mapbox-gl.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../../store/actions/users';

import { ModalWrapper, FormModal } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class Map extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    returnMsg: PropTypes.shape({
      error: PropTypes.bool,
      msg: PropTypes.string,
    }).isRequired,
    users: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      })),
    }).isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -3.71839,
      longitude: -38.5434,
      zoom: 12,
    },
    modalIsOpen: false,
    userInput: '',
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.returnMsg.error) {
      toast.success(nextProps.returnMsg.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(nextProps.returnMsg.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  latitude = 0;
  longitude = 0;

  openModal = this.openModal.bind(this);
  closeModal = this.closeModal.bind(this);

  openModal(e) {
    [this.longitude, this.latitude] = e.lngLat;
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleAddUser = (event) => {
    event.preventDefault();
    this.props.addUserRequest(this.state.userInput, this.latitude, this.longitude);
    this.setState({ userInput: '' });
    this.closeModal();
  };

  render() {
    return (
      <Fragment>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          onClick={this.openModal}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZG91Z2xhc2dvbWVzMDI3IiwiYSI6ImNqbjZoczdkbzAxbWEza2xoc2x6eWRwbHQifQ.0V0O3ThRqUpyEuml6DOQXw"
        >
          {this.props.users.data.map(user => (
            <Marker
              key={user.id}
              latitude={user.coords.latitude}
              longitude={user.coords.longitude}
              captureClick
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                  border: '5px solid #7159C1',
                }}
                src={user.avatar}
                alt="user marker"
              />
            </Marker>
          ))}
          <ToastContainer />
        </ReactMapGL>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <ModalWrapper>
            <h2>Adicionar novo usuário</h2>
            <FormModal onSubmit={this.handleAddUser}>
              <input
                placeholder="Usuário no Github"
                value={this.state.userInput}
                onChange={e => this.setState({ userInput: e.target.value })}
              />
              <button
                style={{
                  margin: 3,
                  padding: '5px 0',
                  background: 'lightgray',
                  width: '45%',
                  color: '#fff',
                  fontSize: '18px',
                  fontwWeight: 'bold',
                  textAlign: 'center',
                  border: 0,
                }}
                onClick={this.closeModal}
              >
                Cancelar
              </button>
              <button
                style={{
                  margin: 3,
                  padding: '5px 0',
                  background: '#59ea9a',
                  width: '45%',
                  color: '#fff',
                  fontSize: '18px',
                  fontwWeight: 'bold',
                  textAlign: 'center',
                  border: 0,
                }}
                type="submit"
              >
                Salvar
              </button>
            </FormModal>
          </ModalWrapper>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  returnMsg: state.users.returnMsg,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
