import Link from "next/link";
import "../../app/globals.scss";
import PagesLayout from "../layout";

export default function Home() {
  return (
    <PagesLayout>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
        Привет
        <h1 className="title">
          вот <Link href="/page2">this page!</Link>
        </h1>
      </main>
    </PagesLayout>
  );
}
