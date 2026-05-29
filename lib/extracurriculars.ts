export type Activity = {
  id: number;
  title: string;
  date: string;
  location: string;
  imageDescription: string;
  images: string[];
};

export const activities: Activity[] = [
  {
    id: 1,
    title: "AfroTech Conference 2025",
    date: "November 2025",
    location: "Houston, TX",
    imageDescription:
      "At AfroTech with Cornell students from Underrepresented Minorities in Computing and Kenyans at AfroTech",
    images: ["/afrotech-1.png", "/afrotech-2.png"],
  },
  {
    id: 2,
    title: "Cornell Blockchain Conference",
    date: "April 2025",
    location: "Cornell Tech, Roosevelt Island, New York",
    imageDescription: "Cornell Blockchain conference at Cornell Tech campus",
    images: ["/blockchain-conf-1.jpg", "/blockchain-conf-2.jpg"],
  },
  {
    id: 3,
    title: "SMART Program",
    date: "January 2025",
    location: "Kenya",
    imageDescription:
      "Field visits and understanding the carbon market by talking to stakeholders and community members in Laikipia and Nairobi, Kenya with Student Multidisciplinary Applied Research Teams",
    images: ["/smart-1.jpg", "/smart-2.jpg", "/smart-3.jpg"],
  },
  {
    id: 4,
    title: "East Africans Students Together (EAST)",
    date: "Treasurer",
    location: "Cornell University",
    imageDescription:
      "Representing EAST at Black Life on the Hill (BLOTH) and AFCORNELL - field event organized by EAST",
    images: ["/east-1.jpg", "/east-2.jpg"],
  },
  {
    id: 5,
    title: "Red Bud Cooperative House",
    date: "Fall 2024",
    location: "Robert Treman State Park, Ithaca",
    imageDescription: "Mega camping trip with the Red Bud Cooperative house community",
    images: ["/redbud-1.jpg", "/redbud-2.jpg"],
  },
];
