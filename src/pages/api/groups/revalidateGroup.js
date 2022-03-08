export default async function handler(req, res){
    let tak = ""
    req.rawHeaders.forEach(header => {
        if(header.includes("/takken/")){
            const index = header.indexOf("/takken/") + "/takken/".length;
            tak = header.substring(index);
            return;
        }
    });
    if(tak == "") return;
    console.log(`[NEXTJS]: revalidating ${tak}`);
    let revalidated = false;
    try {
        await res.unstable_revalidate(`/takken/${tak}`);
        revalidated = true;
    } catch (err) {
        console.error(err);
    }
    res.json({
        revalidated,
    });
}