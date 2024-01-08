import { useState, useEffect, FormEvent  } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../../components/Searchbar';
import SearchMoviesList from '../../components/SearchMoviesList';
import { fetchSearchMovies, GeneralMovieInfo, GeneralData } from '../../services/fetchMovies';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState<GeneralMovieInfo[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchParams, setSearchParams]: [URLSearchParams, (params: URLSearchParams) => void] = useSearchParams();
  const querySearch: string = searchParams.get('query') ?? '';

  useEffect(() => {
    if (querySearch === '') {
      return;
    }
    setIsLoading(true);
    async function fetch(): Promise<void> {
      try {
        const response: AxiosResponse<GeneralData> = await fetchSearchMovies(querySearch);
        const movies: GeneralMovieInfo[] = response.data.results;
        if (movies.length === 0) {
          toast.warn('There are no films matching your search.', {
            theme: 'colored',
          });
        }
        setSearchMovies(movies);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetch();
  }, [querySearch]);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputElement = form.elements.namedItem('query') as HTMLInputElement | null;
    if (inputElement) {
      const searchedQuery: string = inputElement.value.trim();
      if (searchedQuery === '') {
        toast.warn("Enter the movie's name you want to search.", {
          theme: 'colored',
        });
      }
      setSearchParams({ query: searchedQuery });
    }
  };

  return (
    <main>
      <Searchbar onSubmit={formSubmitHandler} />
      {searchMovies && <SearchMoviesList movies={searchMovies} />}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      <ToastContainer />
    </main>
  );
};

export default Movies;
