export default async function handler(req, res){
    console.log("[NEXTJS]: revalidating register")
    let revalidated = false;
    try {
        await res.unstable_revalidate('/inschrijven');
        revalidated = true;
    } catch (err) {
        console.error(err);
    }
    res.json({
        revalidated,
    });
}