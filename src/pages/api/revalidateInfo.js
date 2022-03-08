export default async function handler(req, res){
    console.log("[NEXTJS]: revalidating Info")
    let revalidated = false;
    try {
        await res.unstable_revalidate('/info');
        revalidated = true;
    } catch (err) {
        console.error(err);
    }
    res.json({
        revalidated,
    });
}