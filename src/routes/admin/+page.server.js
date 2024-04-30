import { redirect } from '@sveltejs/kit';

export const actions={
    default: async ({request}) =>{
        const data=await request.formData()
        const username=data.get("userName")
        const password=data.get("password")
        if ( username=="ArmandoBP" && password=="2024" ) {
            throw redirect ( 303, "/admin/welcome")
        } 
    }
}