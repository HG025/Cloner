import { Component } from '@angular/core';
import { SidebarModule } from '@coreui/angular';



@Component({
  selector: 'app-main',
  imports: [SidebarModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  

  navItems = [
     {
      name: 'Dashboard',
      url: '/dashboard',
      iconComponent: { name: 'cil-speedometer' },
    },
    {
      name: 'Users',
      url: '/users',
      iconComponent: { name: 'cil-user' },
    },
  ]

  
}

interface INavAttributes {
  [propName: string]: any;
}

interface INavWrapper {
  attributes: INavAttributes;
  element: string;
}

interface INavBadge {
  text: string;
  color: string;
  size?: string;
  class?: string;
}

interface INavLabel {
  class?: string;
  variant: string;
}

interface INavLinkProps {
  queryParams?: {[k: string]: any};
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '';
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: {[k: string]: any};
  routerLinkActiveOptions?: {exact: boolean};
  routerLinkActive?: string | string[];
}

interface INavData {
  name?: string;
  url?: string | any[];
  href?: string;
  icon?: string;
  iconComponent?: any;
  badge?: INavBadge;
  title?: boolean;
  children?: INavData[];
  variant?: string;
  attributes?: INavAttributes;
  divider?: boolean;
  class?: string;
  label?: INavLabel;
  wrapper?: INavWrapper;
  linkProps?: INavLinkProps;
}
