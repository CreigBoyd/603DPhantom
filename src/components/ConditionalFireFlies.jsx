// Create a new file: components/ConditionalFireFlies.jsx
"use client";

import { usePathname } from "next/navigation";
import FireFliesBackground from "@/components/FireFliesBackground";

export default function ConditionalFireFlies() {
  const pathname = usePathname();
  
  // Check if current page is carousel
  const isCarouselPage = pathname.includes('carousel');

  return !isCarouselPage ? <FireFliesBackground /> : null;
}