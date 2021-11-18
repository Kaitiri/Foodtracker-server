import {deleteIngredient, getIngredients } from '../db';

export const deleteIngredientRoute = {
    path: '/ingredients/:name',
    method: 'delete',
    handler: async(req, res) => {
        const { name } = req.params;
        await deleteIngredient(name);
        const updateIngedients = await getIngredients();
        res.status(200).json(updateIngedients);

    }
}