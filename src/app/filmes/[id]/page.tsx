/* eslint-disable @next/next/no-img-element */
import { filmes } from "@/Lib/filmes";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetelheFilme.module.css";

type Props = {
  params: Promise<{
    id: number;
  }>;
};

const DetalheFilme = async ({ params }: Props) => {
  const { id } = await params;

  const details = filmes.find((filme) => filme.id == id);

  if (!details) {
    return notFound();
  }

  const { title, imagem, description } = details;

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
                src={imagem}
                alt={`Poster do filme ${title}`}
              />
            </figure>
            <article className={styles.detalhes__info}>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetalheFilme;
