import routes from '../../app-routes';

export default [
  {
    name: 'home',
    label: 'Home',
    route: routes.home
  },
  {
    name: 'dashboard',
    label: 'Dashboard',
    route: routes.dashboard
  },
  {
    name: 'agentRequest',
    label: 'Agent Request',
    route: routes.agentRequest
  }
];
