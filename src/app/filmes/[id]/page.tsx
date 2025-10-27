/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetelheFilme.module.css";
import { getMoviesDetails } from "@/Lib/API/tmdb";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;

  const details = await getMoviesDetails(id);

  if (!details) {
    return {
      title: "Filme não encontrado",
    };
  }

  return {
    title: `${details.title} | Cinelista`,
    description: details.overview,
    openGraph: {
      title: `${details.title} | Cinelista`,
      description: details.overview,
      image: [
        `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${details.poster_path}`,
      ],
    },
  };
};

const DetalheFilme = async ({ params }: Props) => {
  const { id } = await params;
  // fazer chamada da API
  const details = await getMoviesDetails(id);

  if (!details) {
    return notFound();
  }

  const { title, poster_path, overview } = details;

  return (
    <>
      <div className={styles.detalhe}>
        <div className={styles.detalhes__container}>
          <Link className={styles.detalhes__voltar} href="/">
            Voltar
          </Link>
          <section>
            <figure>
              <img
                className={styles.detalhes__image}
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${poster_path}`}
                alt={`Poster do filme ${title}`}
              />
            </figure>
            <article className={styles.detalhes__info}>
              <h2>{title}</h2>
              <p>{overview}</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetalheFilme;
