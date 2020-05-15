import Pretender from 'pretender';

import checksPretender from '../features/checks/pretender';
import notificationsPretender from '../features/notifications/pretender';

export const init = () => {
  const server = new Pretender(
    checksPretender,
    notificationsPretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
}

export default init;
