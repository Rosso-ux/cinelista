import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getNowPlaying } from "@/Lib/API/tmdb";

export const revalidate = 60; // atualiza a cada 60 segundos

const FilmesEmAlta = async () => {
  const filmes = await getNowPlaying();

  return (
    <>
      <Title title="Filmes em Alta" />
      <Grid filmes={filmes} />
    </>
  );
};

export default FilmesEmAlta;
