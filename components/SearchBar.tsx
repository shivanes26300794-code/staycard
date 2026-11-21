"use client";

import { useRouter , useSearchParams } from "next/navigation";
import { useState} from "react";


// TODO (Task 1 — Server vs Client Components): this ENTIRE page is a Client Component
// ("use client" at the top) only because of the search box's useState. That ships the
// whole grid as client JS.
//
// Refactor so that:
//   - this page becomes a SERVER Component (remove "use client"),
//   - only the interactive search moves into its own Client Component
//     (e.g. components/SearchBar.tsx with "use client"),
//   - the server page renders the heading + grid.
//
// Decide where the filtering lives and what stays on the server vs the client.
export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const[value, setValue] = useState(searchParams.get("q") ?? "");


  
  return (
    <input
      className="search"
      type="search"
      value={value}
      onChange={(e) => {
        const q = e.target.value;
        setValue(q);
        const params = new URLSearchParams(searchParams.toString());
        if (q) params.set("q", q);
        else params.delete("q");
        router.replace('/?${params.toString()})' , { scroll: false });
      }}
      placeholder="Search by name or location..."
    />
    );
  }
      