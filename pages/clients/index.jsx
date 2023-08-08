import { useRouter } from "next/router";

export default function ClientPage() {
  const clients = [
    {
      id: "max",
      name: "max",
    },
    { id: "omkar", name: "omkar" },
  ];
  const router = useRouter();
  function loadProjectHandler() {
    router.push({
      pathname: "/client",
      query: { id: "max", projectId: "123" },
    });
  }
  return (
    <div>
      <h1>ClientPage</h1>
      {/* <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul> */}
      <button onClick={loadProjectHandler}>nav</button>
    </div>
  );
}
