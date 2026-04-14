import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Yellowknife Skin Solutions",
  description:
    "Explore our full menu of medical aesthetic services — Hydrafacial, Laser Hair Removal, Microneedling, Chemical Peels, Injections, and more in Yellowknife, NT.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <Services />
    </div>
  );
}
