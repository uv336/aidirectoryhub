"use client";

import { ExploreSection } from "@/components/explore-section";
import { motion } from "framer-motion";

export default function ToolsPage() {
  return (
    <main className="pt-24">
      <ExploreSection showAllTools={true} />
    </main>
  );
}