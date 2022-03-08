export default async function handler(req, res){
    console.log("[NEXTJS]: revalidating Verhuur")
    let revalidated = false;
    try {
        await res.unstable_revalidate('/verhuur');
        revalidated = true;
    } catch (err) {
        console.error(err);
    }
    res.json({
        revalidated,
    });
}