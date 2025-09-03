import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/signup"); // redireciona para signup
  }, [router]);

  return null; // não mostra nada, só redireciona
}
