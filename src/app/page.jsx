import { Typography } from "@/components/ui";
import Panel from "@/app/components/Panel";

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-10">
      <Typography variant="h1" color="amber" className="font-bold text-center">
        Bienvenido a Control de Misión
      </Typography>
      <Panel />
    </main>
  );
}
