/* eslint-disable @next/next/no-img-element */
import { Filme } from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {
  filme: Filme;
};

const Card = ({ filme }: Props) => {
  const { id, title, overview, poster_path } = filme;
  const resumo =
    overview?.length >= 256 ? `${overview?.substring(0, 253)}...` : overview;
  return (
    <div className={styles.card} key={id}>
      <Link href={`/filmes/${id}`}>
        <img
          className={styles.card__image}
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${poster_path}`}
          alt={`Poster do filme ${title}`}
          width={300}
          height={200}
        />
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{resumo}</p>
          <p className={styles.card__description}>Nota: {filme.vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
