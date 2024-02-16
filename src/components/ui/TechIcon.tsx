interface TechStack {
  name: string;
}

const TechIcon: React.FC<TechStack> = (props: TechStack) => {
  return (
    <>
      <div className="bg-zinc-100 border border-zinc-300 text-zinc-500 flex flex-col gap-4 p-4 px-6 items-center justify-center rounded-lg overflow-hidden hover:bg-zinc-200/70 transition-colors duration-200 cursor-default">
        {/* <img
        src={props.img}
        alt={props.name}
        className="inline select-none opacity-80 w-6 h-6 md:w-10 md:h-10"
      /> */}
        <p className="text-base text-center font-serif text-zinc-800">
          {props.name}
        </p>
      </div>
    </>
  );
};

export default TechIcon;
