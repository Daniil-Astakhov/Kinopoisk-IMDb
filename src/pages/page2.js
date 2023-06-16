import "../app/globals.scss";
import Link from "next/link";
import PagesLayout from "./layout";
export default function Home2() {
  return (
    <PagesLayout>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <Link href="./page1/page">Назад</Link>
      </div>
    </PagesLayout>
  );
}
