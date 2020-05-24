import Pretender from 'pretender';

import checksPretender from '../features/checks/pretender';
import notificationsPretender from '../features/notifications/pretender';
import healthPretender from '../features/health/pretender';

export const init = () => {
  const server = new Pretender(
    checksPretender,
    notificationsPretender,
    healthPretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
}

export default init;
