import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Route } from './Header';
import HeaderCart from './HeaderCart';
interface Props {
  routes: Route[];
  subRoutes: Route[];
}
export default function ResponsiveNavbar({
  routes,
  subRoutes,
}: Readonly<Props>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0 pt-14">
        <ul className="flex flex-col ">
          {[...routes, ...subRoutes].map((val) => (
            <li
              key={val.id}
              className={buttonVariants({
                variant: 'ghost',
                className:
                  'hover:text-primary text-muted-foreground underline-offset-4 hover:underline border-b h-16',
              })}
            >
              <Link to={val.path}>{val.label}</Link>
            </li>
          ))}
        </ul>
        <div
          className={buttonVariants({
            variant: 'ghost',
            className: 'w-full border-b h-16',
          })}
        >
          <HeaderCart />
        </div>
      </SheetContent>
    </Sheet>
  );
}
