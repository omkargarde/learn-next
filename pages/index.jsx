import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href={"/clients"}>client</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>portfolio</Link>
        </li>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/blog"}>blog</Link>
        </li>
      </ul>
    </div>
  );
}
