import Title from "./components/Title";
import Grid from "./components/Grid";
import { getTrendingMovies } from "@/Lib/API/tmdb";

export default async function Home() {
  const filmes = await getTrendingMovies();

  return (
    <>
      <Title title="Filmes em Destaque" />
      <Grid filmes={filmes} />
    </>
  );
}
