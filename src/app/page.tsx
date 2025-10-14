import Title from "./components/Title";
import { filmes } from "@/Lib/filmes";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <>
      <Title title="Filmes em Destaque" />
      <Grid filmes={filmes} />
    </>
  );
}
