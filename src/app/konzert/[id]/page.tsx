import { notFound } from "next/navigation";
import { getAllConcerts, getConcertById } from "@/lib/concerts";
import ConcertDetail from "../../components/ConcertDetail";

export async function generateStaticParams() {
  const concerts = getAllConcerts();
  return concerts.map((c) => ({ id: c.id }));
}

export default async function ConcertPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const concert = getConcertById(id);

  if (!concert) notFound();

  return <ConcertDetail concert={concert} />;
}
