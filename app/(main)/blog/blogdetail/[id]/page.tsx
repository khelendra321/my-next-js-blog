import BlogDetail from "@/components/BlogDetail";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  return <BlogDetail id={id} />;
}
