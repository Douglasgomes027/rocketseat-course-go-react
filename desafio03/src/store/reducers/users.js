const INITIAL_STATE = {
  data: [],
  returnMsg: {
    error: null,
    msg: '',
  },
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        returnMsg: { ...state.returnMsg, error: false, msg: 'Usuário adicionado com sucesso' },
        data: [...state.data, action.payload.data],
      };
    case 'REMOVE_USER':
      return {
        ...state,
        returnMsg: { ...state.returnMsg, error: false, msg: 'Usuário removido com sucesso' },
        data: state.data.filter(user => user.id !== action.payload.id),
      };
    case 'ADD_USER_ERROR':
      return {
        ...state,
        returnMsg: { ...state.returnMsg, error: true, msg: 'Uusário não encontrado!' },
      };
    default:
      return state;
  }
}
