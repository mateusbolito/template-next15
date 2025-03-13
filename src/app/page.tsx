export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await fetch("http://api.open-notify.org/iss-now.json");
  const data = await res.json();
  console.log(data);
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-2xl ">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
