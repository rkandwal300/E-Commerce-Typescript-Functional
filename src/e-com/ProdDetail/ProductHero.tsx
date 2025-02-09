import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { calculateDiscountAmount } from '@/lib/calculatePercentage';
import { formatCurrency } from '@/lib/formatCurrency';
import { TProduct } from '@/lib/types/product';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function ProductHero(props: Readonly<TProduct>) {
  const [item, setItem] = useState<number>(1);
  const totalAmount = calculateDiscountAmount({
    totalAmount: props.price,
    percentage: props.discountPercentage,
  });
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-2 overflow-scroll">
      <div className="w-[320px] sm:w-[420px] aspect-square">
        <img
          className="w-full object-center object-cover"
          src={props.thumbnail}
          width="100%"
          alt={props.title}
          loading="lazy"
        />
      </div>
      <div className="w-[320px] sm:w-[420px] flex flex-col aspect-square pb-4">
        <div className="flex flex-col gap-4 flex-1 p-4 overflow-y-scroll">
          <span className="text-3xl font-bold text-foreground/80">
            {props.title}
          </span>
          <div className="flex gap-2 text-2xl font-semibold text-foreground/80">
            <span className="text-muted-foreground/60 line-through ">
              {formatCurrency(props.price + totalAmount)}
            </span>
            <span>{formatCurrency(props.price)}</span>
          </div>

          <div className="text-sm font-semibold text-muted-foreground">
            {props.description}
          </div>
          <Separator />
          <div className="flex gap-1.5 text-muted-foreground">
            <span>Category:</span>
            <span className="text-primary capitalize">{props.category}</span>
          </div>
          <span className="font-semibold text-xl text-foreground/70">
            {`Free shipping on orders over ${formatCurrency(
              item * props.price
            )}!`}
          </span>

          <ul className="list-disc pl-6 text-sm font-semibold text-muted-foreground">
            <li>{props.returnPolicy}</li>
            <li>{props.warrantyInformation}</li>
            <li>{props.shippingInformation}</li>
          </ul>
        </div>
        <div className="h-20 flex gap-4 items-center">
          <div className="flex border h-fit w-fit">
            <Button
              disabled={item === 1}
              variant={'outline'}
              onClick={() => setItem(item - 1)}
              className="w-[37px] h-[42px] rounded-none"
            >
              <Minus size={20} />
            </Button>
            <input
              className="p-1.5 w-[44px] h-[42px] border"
              value={item}
              onChange={(e) => setItem(Number(e.target.value))}
            />
            <Button
              variant={'outline'}
              onClick={() => item <= props.stock && setItem(item + 1)}
              className="w-[37px] h-[42px] rounded-none"
            >
              <Plus size={20} />
            </Button>
          </div>
          <Button className="h-[42px]">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
}
