import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderCart() {
  return (
    <Sheet>
      <SheetTrigger className="relative" asChild>
        <Button variant={'ghost'}>
          <ShoppingCart size={24} className="text-primary" />
          <Badge
            variant={'secondary'}
            className="top-0 left-11 absolute text-xs text-primary"
          >
            {55}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0 gap-0 flex flex-col">
        <SheetHeader className="border-b p-4">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 flex justify-center items-center p-4">
          <p className="text-center text-sm text-muted-foreground">
            Your cart is empty
          </p>
        </div>
        <SheetFooter className="p-4">
          <Link
            to="/products"
            className={buttonVariants({
              variant: 'outline',
              className: 'w-full p-4',
            })}
          >
            Continue Shopping
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
