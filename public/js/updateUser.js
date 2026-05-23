import axios from 'axios';
import { showAlert } from './alerts.js';

export const updateUser = async (email, name, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} update successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
