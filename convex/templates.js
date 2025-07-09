import {query} from "@/convex/_generated/server";

export const GetAllTemplates = query({
    args: {},
    handler: async (ctx, args) => {
        const result= await ctx.db.query('templates').collect()
        return result
    }
})