import Hero from "@/components/Hero";
import BookingBanner from "@/components/BookingBanner";

export const metadata = {
  title: "Yellowknife Skin Solutions | Premier Medical Aesthetics Clinic",
  description:
    "Yellowknife's premier medical aesthetics clinic. Hydrafacial, Laser Hair Removal, Microneedling, Injections and more. Rated 5.0★ with 452 reviews. Book online.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BookingBanner />
    </>
  );
}
