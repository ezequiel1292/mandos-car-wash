import {models} from "$lib/server/db/index.js"

export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const name =data.get("name");
        const phone_number = data.get("phone_number");
        const wash_type = data.get("wash_type");
        const car_type = data.get("car_type");
        const request_box = data.get("request_box")
        
        await models.Quote.add(name, phone_number,wash_type,car_type,request_box)

        return {
            message: `name: ${name}, phone number: ${phone_number}, wash type: ${wash_type}, car type: ${car_type}, request box: ${request_box}`
        }
    }
}

 export const load= async ({fetch}) =>{
    const quote = await models.Quote.findAll()

    return {
        quote
    }
 }