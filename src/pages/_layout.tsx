import Head from "next/head";
import Image from "next/image";
import atlantis from "public/images/atlantis.jpg";
import Header from "~/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout for consistent styling across all pages
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Megalan Atlantis Quests</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full">
        {/* Background Image and Colour Fill */}
        <div className="fixed -z-50 min-h-screen w-full bg-sky-800 blur-[2px]">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={atlantis}
            alt="atlantis"
            className="fixed -z-30 min-h-screen w-full bg-center object-cover opacity-60"
          />
        </div>
        <Header />
        <main className="h-full w-full">{children}</main>
      </div>
    </>
  );
};

export default Layout;
