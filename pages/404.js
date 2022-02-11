import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const Custom404 = () => {
  return (
    <div>
      <Head>
        <title>404: Page Not Found | Airbnb Clone</title>
        <meta name="description" content="Airbnb Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex items-center justify-center flex-col pt-20">
        <h4 className="text-2xl text-black font-bold align-middle">
          404: Page Not Found
        </h4>
        <Link href="/">
          <a className="underline mt-2 hover:text-red-400">Back to Home Page</a>
        </Link>
      </main>
    </div>
  );
};

export default Custom404;
