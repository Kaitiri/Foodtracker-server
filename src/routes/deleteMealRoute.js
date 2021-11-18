import { deleteMeal, getPopulatedMeals } from "../db";

export const deleteMealRoute = {
    path: '/meals/:id',
    method: 'delete', 
    handler: async(req, res) => {
        const { id } = req.params;
        await deleteMeal(id);
        const updateMeals = await getPopulatedMeals();
        res.satus(200).json(updateMeals);
    }
}