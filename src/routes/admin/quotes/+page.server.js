import {models} from "$lib/server/db/index.js"

export const load= async ({fetch}) =>{
    const quote = await models.Quote.findAll()

    return {
        quote
    }
 }