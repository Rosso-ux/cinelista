import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getTopMovies } from "@/Lib/API/tmdb";

export const dynamic = "force-static";

const FilmesTop = async () => {
  const filmes = await getTopMovies();
  return (
    <>
      <Title title="Top Filmes" />
      <Grid filmes={filmes} />
    </>
  );
};

export default FilmesTop;
