export default async function handler(req, res){
    res.status(200).json({
        data: process.env.MAPS_API_KEY,
    });
}