const TitleSection = ({ title }) => {
  return (
    <div className="mx-auto mt-10 flex w-fit items-center justify-center gap-2 rounded-full border border-primary1/25 px-3 py-[5px]">
      <span aria-hidden="true" className="text-[11px] leading-none text-primary1">
        &#10040;
      </span>
      <p className="text-center text-[11px] font-medium uppercase tracking-label text-primary1">
        {title}
      </p>
    </div>
  );
};

export default TitleSection;
