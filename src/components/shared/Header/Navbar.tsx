import { cn } from '@/lib/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../../ui/hover-card';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../../ui/navigation-menu';
import { Route } from './Header';
import HeaderCart from './HeaderCart';

interface Props {
  routes: Route[];
  subRoutes: Route[];
}
const Navbar = ({ routes, subRoutes }: Readonly<Props>) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {routes.map((val) => (
          <NavigationMenuItem key={val.id}>
            <Link to={val.path}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {val.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <HoverCard>
            <HoverCardTrigger asChild>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                ACCOUNT
              </NavigationMenuTrigger>
            </HoverCardTrigger>
            <HoverCardContent>
              <ul className="flex flex-col space-y-2">
                {subRoutes.map((component) => (
                  <ListItem
                    {...component}
                    key={component.id}
                    label={component.label}
                    path={component.path}
                  />
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <HeaderCart />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
const ListItem = React.forwardRef<React.ElementRef<'a'>, Route>(
  ({ label, path, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={path}
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{label}</div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
