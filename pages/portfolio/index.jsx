import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div>
      <h1>PortfolioPage</h1>
      <ul>
        <li>
          <Link href="/clients/max">max</Link>
        </li>
      </ul>
    </div>
  );
}
