import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="from-primary to-chart-2 bg-linear-to-r bg-clip-text text-xl font-bold tracking-tight text-transparent"
    >
      FKC.
    </Link>
  );
}
