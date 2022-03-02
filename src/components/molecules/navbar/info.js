import Link from "next/link";

export default function Info() {
  return (
    <div className="flex-none px-2">
      <Link href="/info">
        <a>Info</a>
      </Link>
    </div>
  );
}
