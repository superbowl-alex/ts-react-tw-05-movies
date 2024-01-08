import { FC, FormEvent } from 'react';

interface ISearchbar {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
const Searchbar: FC<ISearchbar> = ({ onSubmit }) => {
  return (
    <div className="flex justify-center items-center mb-8">
      <form className="flex items-center gap-1 w-full max-w-[500px] overflow-hidden" onSubmit={onSubmit}>
        <input className="inline-block h-[48px] w-full text-2xl text-secondaryText rounded border-2 border-secondaryBacground outline-none px-2 transition-all duration-300 hover:border-secondaryText placeholder:text-base placeholder:text-buttonColor"
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button className="flex items-center justify-center h-[48px] px-2 bg-buttonColor text-primaryText text-2xl cursor-pointer outline-none rounded border-2 border-secondaryBacground transition-all duration-300 hover:border-secondaryText hover:bg-buttonHoverColor " type="submit">Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
