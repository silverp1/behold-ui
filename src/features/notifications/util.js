import axios from 'axios';
import config from '../../config/app';

export const doCreateNotificationRequest = async (
  checkId, type, target
) => axios({
  method: 'POST',
  baseURL: config.BASE_PATH,
  url: 'api/v1/alert',
  data: {
    check_id: checkId,
    type,
    target
  }
});