import api from '../../utils/api';

const ActionType = {};

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error);
    }
  };
}

export {
  ActionType,
  asyncRegisterUser,
};
