import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronsRight, Plus } from 'lucide-react';

export default function Hero2() {
  return (
    <section className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:pt-24 pt-16 ">
      <div className="flex flex-col justify-center items-center relative h-[264px] w-full ">
        <img
          src={'/hero2/1.jpg'}
          className="object-fill z-0 absolute bottom-0 right-0"
          width={'200'}
          alt="Most Loved Designs"
        />
        <p className="w-44 text-muted-foreground z-10">
          Best quality printed t-shirts and mugs for all your needs
        </p>
      </div>
      <div className="h-[264px] w-full relative">
        <img
          src={'/hero2/video-bg-free-img-2.jpg'}
          className="object-cover object-left h-full"
          alt="Most Loved Designs"
        />
      </div>
      <div className="h-[264px] sm:col-span-2 grid grid-cols-2 bg-[rgb(226,219,209)]">
        <img
          src={'/hero2/banner-1.jpg'}
          className="object-cover object-left-top w-[264px] h-full"
          alt="Most Loved Designs"
        />
        <div className="h-full flex flex-col justify-center items-start w-full gap-4">
          <span className="text-xl font-bold text-muted-foreground">
            Get Printed T-shirt @ $ 25!
          </span>
          <Button
            variant="outline"
            className="bg-inherit text-muted-foreground border-muted-foreground"
          >
            <ChevronsRight className="w-6 h-6 mr-2" />
            VISIT STORE
          </Button>
        </div>
      </div>
      <div className="h-[264px] w-full relative">
        <div className=" absolute top-0 flex flex-col justify-center items-center h-[264px] w-full gap-4 z-10">
          <span className="text-sm font-bold"> Get Printed Mug @ $15!</span>
          <Button
            variant="outline"
            className="bg-inherit border-muted-foreground"
          >
            <ChevronsRight className="w-6 h-6 mr-2" />
            VISIT STORE
          </Button>
        </div>
        <img
          src={'/hero2/mug-coffee-768x768.jpg'}
          className="object-cover absolute top-0 left-0 z-0 h-full w-full opacity-25"
          alt="Most Loved Designs"
        />
      </div>
      <div className="h-[264px] w-full">
        <img
          src={'/hero2/about-img.jpg'}
          className="object-cover w-full object-left-top h-full"
          alt="Most Loved Designs"
        />
      </div>
      <div className="h-[264px] w-full">
        <img
          src={'/hero2/mug-blue.jpg'}
          className="object-cover h-full w-full"
          alt="Most Loved Designs"
        />
      </div>

      <div className="h-[264px] flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex flex-col justify-center items-center">
              <Button
                variant={'outline'}
                className="rounded-full p-2 py-5 border-2 border-foreground/70"
              >
                <Plus size={25} />
              </Button>
              <span className="text-sm font-bold text-foreground/70">
                Get Your Own
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className="flex-1"></DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
