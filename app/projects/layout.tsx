import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Alec D'Alelio",
  description: "My work across AI, Web3 & Creative Systems - projects where I've contributed as an engineer, product manager, and creative technologist.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 