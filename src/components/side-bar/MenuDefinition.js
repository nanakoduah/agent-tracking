import routes from '../../app-routes';

import DashboardIcon from '../../icons/DashboardIcon';
import HomeIcon from '../../icons/HomeIcon';
import UserIcon from '../../icons/UserIcon';

export default [
  {
    name: 'home',
    label: 'Home',
    route: routes.home,
    icon: HomeIcon
  },
  {
    name: 'dashboard',
    label: 'Dashboard',
    route: routes.dashboard,
    icon: DashboardIcon
  },
  {
    name: 'agentRequest',
    label: 'Agent Request',
    route: routes.agentRequest,
    icon: UserIcon
  }
];
