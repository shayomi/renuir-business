import type { Metadata } from "next";
import PostDeepLinkLanding from "@/components/shared/PostDeepLinkLanding";

type Props = { params: Promise<{ locale: string; postId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;
  const canonical = `https://www.renuir.com/post/${encodeURIComponent(postId)}`;
  return {
    title: `Open Renuir post #${postId}`,
    description: "Open this shared lost-and-found post in the Renuir app.",
    alternates: { canonical },
    openGraph: { title: `Renuir post #${postId}`, description: "Open this shared lost-and-found post in the Renuir app.", url: canonical, type: "website" },
    other: { "apple-itunes-app": `app-id=6758735828, app-argument=${canonical}` },
  };
}

export default async function PostPage({ params }: Props) {
  const { postId } = await params;
  return <PostDeepLinkLanding postId={postId} />;
}
