import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ProductHero from '@/e-com/ProdDetail/ProductHero';
import { calculateDiscountAmount } from '@/lib/calculatePercentage';
import { formatCurrency } from '@/lib/formatCurrency';
import { TProduct } from '@/lib/types/product';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { RiStarSLine } from 'react-icons/ri';
const Product: FC<TProduct> = (props) => {
  const totalAmount = calculateDiscountAmount({
    totalAmount: props.price,
    percentage: props.discountPercentage,
  });
  return (
    <Card className="flex flex-col w-60 shadow-none border-none hover:cursor-pointer group gap-2">
      <CardContent className="aspect-square w-60 relative shadow-md p-0">
        <img
          className="w-full object-center object-cover"
          src={props.thumbnail}
          width="100%"
          alt={props.title}
          loading="lazy"
        />
        <Dialog>
          <DialogTrigger asChild>
            <CardDescription
              className={cn(
                'h-10 p-2 bg-foreground/90 text-center w-full font-bold text-background absolute bottom-0 hidden',
                'group-hover:block'
              )}
            >
              Quick View
            </CardDescription>
          </DialogTrigger>
          <DialogContent className="p-0 max-h-[90%] md:max-h-[420px] overflow-hidden max-w-[340px] md:max-w-[840px]">
            <ProductHero {...props} />
          </DialogContent>
        </Dialog>
      </CardContent>
      <CardFooter className="flex flex-col px-0 items-start gap-2">
        <Badge>{props.category}</Badge>

        <CardTitle> {props.title} </CardTitle>

        <div className="flex">
          {Array(5)
            .fill(0)
            .map((_, index) =>
              index <= Math.floor(props.rating) ? (
                <AiFillStar key={'Star' + index} className="text-primary" />
              ) : (
                <RiStarSLine key={'Star' + index} />
              )
            )}
        </div>

        <div className="flex gap-1.5 items-center text-sm font-medium">
          <span className="text-muted-foreground line-through">
            {formatCurrency(props.price + totalAmount)}
          </span>
          <span>{formatCurrency(props.price)}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Product;
