import type { Metadata } from "next";

import { StudentLifeView } from "@/sections/student-life/student-life-view";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Sports, clubs, arts, assemblies, and gallery highlights from learner life at SLS G-12 Campus, Islamabad.",
};

export default function StudentLifePage() {
  return <StudentLifeView />;
}
