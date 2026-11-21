import Link from "next/link";
import Image from "next/image";
import{notFound} from "next/navigation";
import { getStay } from "../../../lib/stays";

// TODO (Task 2 — dynamic routes & not-found): this page is broken in two ways.
//   1. In Next.js 15, `params` is a PROMISE. Make this component `async` and
//      `await params` before reading `id` (fix the type too: Promise<{ id: string }>).
//   2. `getStay` returns `undefined` for a bad id (typo / deleted stay). Instead of the
//      non-null `!` hacks below that crash the page, call `notFound()` from "next/navigation"
//      so Next.js shows its 404 page.
//
// TODO (Task 3 — images): swap the <img> for next/image. This is the hero image, so give
// it `priority` (it's above the fold) plus width/height.

export default async function StayPage({
   params,
}: { 
  params: Promise<{ id: string } >;
}) {
  const {id} =await params;
  const stay = getStay(id);

  if (!stay) {
    notFound();
  }

  return (
    <article className="detail">
      <Link href="/" className="back">
        ← Back to stays
      </Link>

      <Image 
       src={stay.image} 
       alt={stay.name} 
       width={900}
       height={500}
       className="detail-image" 
      />

      <h1>
        {stay.emoji} {stay.name}
      </h1>
      <p className="muted">{stay.location}</p>
      <p className="price">
        ${stay.pricePerNight}
        <span>/night</span> 
      </p>
      <p>{stay.blurb}</p>
    </article>
  );
}
