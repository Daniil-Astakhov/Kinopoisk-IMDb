import Link from "next/link";
import "../app/globals.scss";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 loading-page">
      Привет
      <h1 className="title">
        вот <Link href="/page2">this page!</Link>
      </h1>
    </main>
  );
}
