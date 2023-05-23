import Head from "next/head";
import Header from "~/components/universal/Header";
import Image from "next/image";
import atlantis from "public/images/atlantis1.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Megalan Atlantis Quests</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full">
        {/* Background Image and Colour Fill */}
        <div className="fixed -z-50 min-h-full w-full bg-sky-800 blur-[2px]">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={atlantis}
            alt="atlantis"
            className="fixed -z-30 min-h-screen w-full bg-center object-cover opacity-60"
          />
        </div>
        <Header />
        <main className="h-screen w-full">{children}</main>
      </div>
    </>
  );
};

export default Layout;
