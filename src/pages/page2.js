import "../app/globals.scss";
import Link from "next/link";
export default function Home2() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/page">Назад</Link>
    </div>
  );
}
