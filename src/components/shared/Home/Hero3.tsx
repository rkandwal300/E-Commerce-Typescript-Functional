export default function Hero3() {
  return (
    <section className="w-full bg-primary/10 md:mt-24 mt-16">
      <div className="mx-auto max-w-6xl grid sm:grid-cols-2 gap-4 h-fit">
        <div className="h-[400px] sm:h-[450px] w-full items-end flex">
          <img
            src={'/hero2/cotm-img-1-1.png'}
            className="object-cover"
            alt="Most Loved Designs"
            loading="lazy"
          />
        </div>
        <div className="h-full w-full gap-4 flex flex-col justify-center p-4 text-foreground/70 text-2xl font-bold">
          <h2>#Color Of The Month</h2>
          <span className="text-xs font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            vitae rerum corrupti modi fugit adipisci ratione necessitatibus.
            Corrupti, eum. Explicabo?
          </span>
          <h2>JUST $35!!!</h2>
        </div>
      </div>
    </section>
  );
}
