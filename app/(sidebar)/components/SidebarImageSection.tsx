/* eslint-disable @next/next/no-img-element */
const SidebarImageSection = () => {
  return (
    <div className="grid grid-cols-[1fr_4fr_1fr] grid-rows-[1.5fr_5fr_1fr]">
      <div className=""></div>
      <div className="border-x border-edge"></div>
      <div className="z-10"></div>

      <div className=""></div>
      <div className="border-x flex justify-center relative">
        <img src="/india.svg" alt="India" className="absolute left-0" />
        <img
          src="/pic2.png"
          alt="Yuvraj"
          className="rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none object-cover sm:size-40 "
        />
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className="border-x"></div>
      <div className=""></div>
    </div>
  );
};

export default SidebarImageSection;
