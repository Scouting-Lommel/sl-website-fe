import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-none px-2">
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
