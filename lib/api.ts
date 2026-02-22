const BASE_URL = "https://your-api.com";

export async function fetchBlogs() {
  const res = await fetch(`${BASE_URL}/blogs`, {
    next: { revalidate: 60 }, // ISR (optional)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export async function fetchBlogDetails(slug: string) {
  const res = await fetch(`${BASE_URL}/blogs/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}
