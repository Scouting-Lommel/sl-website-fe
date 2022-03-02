import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex-none px-2">
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
}
