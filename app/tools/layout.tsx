import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All AI Tools - AIToolbox',
  description: 'Explore our complete collection of AI tools and resources.',
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}