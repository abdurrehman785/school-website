export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  subject: string;
  photo: string;
};

export const facultyMembers: FacultyMember[] = [
  {
    id: "1",
    name: "Dr. Amna Farooqui",
    role: "Head of Secondary",
    subject: "Mathematics & Academic Strategy",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "2",
    name: "Kamran Abbasi",
    role: "Lead Science Instructor",
    subject: "Physics & STEM Integration",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "3",
    name: "Sara Hussain",
    role: "English Department Chair",
    subject: "Literature & Rhetoric",
    photo:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "4",
    name: "Omar Sheikh",
    role: "Computer Science Lead",
    subject: "Computing & Digital Ethics",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "5",
    name: "Nadia Tariq",
    role: "Montessori Coordinator",
    subject: "Early Childhood Development",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "6",
    name: "Bilal Haider",
    role: "Athletics Director",
    subject: "Physical Education & Wellness",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "7",
    name: "Rabia Zaman",
    role: "Urdu & Pakistan Studies",
    subject: "Humanities & Civic Literacy",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "8",
    name: "Zain Malik",
    role: "Student Affairs",
    subject: "Counselling & Pastoral Care",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80",
  },
];

export type AcademicDetail = {
  slug: string;
  title: string;
  lead: string;
  description: string;
  subjects: string[];
  approach: string[];
  image: string;
};

export const academicDetails: AcademicDetail[] = [
  {
    slug: "montessori",
    title: "Montessori",
    lead: "Respectful environments where independence, concentration, and confidence take root.",
    description:
      "Our Montessori programme blends authentic materials with observant guidance. Learners follow developmentally sequenced work cycles that honour curiosity while building executive function and early literacy.",
    subjects: [
      "Practical Life",
      "Sensorial Exploration",
      "Language Foundations",
      "Early Mathematics",
      "Cultural Studies",
      "Creative Expression",
    ],
    approach: [
      "Mixed-age cohorts that model mentorship",
      "Uninterrupted work periods for deep focus",
      "Individualised pacing with documented growth maps",
      "Outdoor learning integrated weekly",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "primary",
    title: "Primary",
    lead: "Core literacy and numeracy fortified through enquiry-led projects.",
    description:
      "Primary years strengthen fundamentals while inviting learners into collaborative projects that connect classrooms to neighbourhoods. Assessment balances formative feedback with benchmarks that inform families transparently.",
    subjects: [
      "English Language & Literature",
      "Urdu",
      "Mathematics",
      "Science",
      "Social Studies",
      "Islamiyat / Ethics Track",
      "Arts & Crafts",
      "Physical Education",
    ],
    approach: [
      "Guided reading workshops with differentiated texts",
      "Investigations that cycle hypothesise-test-reflect",
      "Digital portfolios celebrating growth over grades alone",
      "Buddy reading with Montessori learners",
    ],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "middle",
    title: "Middle",
    lead: "Rigour rises—learners practise ownership, scholarly habits, and ethical reasoning.",
    description:
      "Middle school bridges concrete mastery with abstract reasoning. Departments coordinate vertically so skills compound intentionally from lesson to lesson, term to term.",
    subjects: [
      "English Language & Literature",
      "Urdu Language & Grammar",
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Integrated Science Labs",
      "History & Geography",
      "Computer Science",
      "Art & Design",
      "Islamiyat / Ethics",
      "Physical Education",
    ],
    approach: [
      "Scholarly habits: citation, seminar dialogue, reflective journals",
      "STEM challenges embedded in civic contexts",
      "Advisory groups for goal-setting and wellbeing check-ins",
      "Cross-disciplinary capstone modules each semester",
    ],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "matric",
    title: "Matric",
    lead: "Board-aligned mastery with mentorship that centres purpose beyond examinations.",
    description:
      "Matric learners receive disciplined preparation aligned with examination standards while cultivating leadership, research fluency, and university-ready study habits.",
    subjects: [
      "English",
      "Urdu",
      "Islamiyat",
      "Pakistan Studies",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology / Computer Science Elective",
    ],
    approach: [
      "Data-informed tutoring blocks targeting misconceptions",
      "Pastoral conferencing alongside academic conferencing",
      "Ethics seminars connecting curriculum to civic responsibility",
      "University counselling introduced in Grade 10",
    ],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
  },
];

export function getAcademicBySlug(slug: string) {
  return academicDetails.find((a) => a.slug === slug);
}
