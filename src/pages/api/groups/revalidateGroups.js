export default async function handler(req, res) {
  console.log('[NEXTJS]: revalidating Groups');
  let revalidated = false;
  try {
    await res.unstable_revalidate('/takken/index');
    revalidated = true;
  } catch (err) {
    console.error(err);
  }
  res.json({
    revalidated,
  });
}
