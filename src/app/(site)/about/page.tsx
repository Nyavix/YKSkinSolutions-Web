import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us | Yellowknife Skin Solutions",
  description:
    "Meet the team behind Yellowknife Skin Solutions — certified Master Aesthetician Edith and RN Laser Technician Joannie, serving Yellowknife, NT.",
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      <About />
    </div>
  );
}
