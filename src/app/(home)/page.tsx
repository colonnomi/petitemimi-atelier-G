export default function Home() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const basePath = isDevelopment ? "" : "/petitemimi-atelier-G";
  const frenchHome = isDevelopment ? "/fr" : `${basePath}/fr/`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${frenchHome}`} />
      <main className="grid min-h-screen place-items-center bg-ivory px-6 text-center text-ink">
        <p>
          Redirection vers le site français…{" "}
          <a className="underline" href={frenchHome}>Continuer</a>
        </p>
      </main>
    </>
  );
}
