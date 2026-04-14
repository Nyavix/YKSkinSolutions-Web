import type { Metadata } from "next";
import SocialProof from "@/components/SocialProof";

export const metadata: Metadata = {
  title: "Client Reviews | Yellowknife Skin Solutions",
  description:
    "Read what our clients say about Yellowknife Skin Solutions. Rated 5.0 stars with over 452 reviews on Fresha.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-28">
      <SocialProof />
    </div>
  );
}
