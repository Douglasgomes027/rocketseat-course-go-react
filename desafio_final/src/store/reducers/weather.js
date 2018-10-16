const INITIAL_STATE = {
  data: [],
  returnMsg: {
    error: null,
    msg: '',
  },
};

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_WEATHER_SUCCESS':
      return {
        ...state,
        returnMsg: { ...state.returnMsg, error: false, msg: 'Weather pesquisado com sucesso' },
        data: [action.payload.data],
      };
    case 'GET_WEATHER_ERROR':
      return {
        ...state,
        returnMsg: { ...state.returnMsg, error: true, msg: 'Weather não encontrado!' },
      };
    default:
      return state;
  }
}
