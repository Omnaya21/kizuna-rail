import { getAllRoutes, getListOfRegions, getListOfSeasons, getRoutesBySeason, getRoutesByRegion } from '../../models/model.js';

export default async (req, res) => {
    const { region, season } = req.query; 
    let routes = await getAllRoutes();
    if (region && season) {
        routes = await getRoutesByRegion(region);
        routes = routes.filter(route => route.bestSeason.toLowerCase() == season.toLowerCase());
    } else
    if (region) {
        routes = await getRoutesByRegion(region);
    } else
    if (season) {
        routes = await getRoutesBySeason(season);
    }
    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};