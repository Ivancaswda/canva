import {v} from 'convex/values'
import {mutation} from "@/convex/_generated/server";
import {query} from "@/convex/_generated/server";

export const CreateNewDesign = mutation({
    args: {
        name: v.string(),
        width: v.number(),
        height: v.number(),
        uid: v.id('users')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.insert('designs', {
            name: args.name,
            height: args.height,
            width: args.width,
            uid: args.uid
        });
        // we`re getting id of new design which also in our tab link
        return result
    }
})

// function for getting designs from ddb
export const GetDesign = query({
    args: {
        id: v.id('designs')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.get(args.id)
        return result
    }
})
// creating function to save canva design into database
export const SaveDesign =mutation({
    args: {
        id: v.id('designs'),
        jsonDesign: v.any(),
        imagePreview: v.optional(v.string()),
        name: v.optional(v.string())
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.patch(args.id, {
            jsonTemplate: args.jsonDesign,
            imagePreview: args?.imagePreview,
            ...(args?.name && { name: args.name }),
        })

        return result;
    }
})

export const GetUserDesigns = query({
    args: {
        uid: v.id('users')
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query('designs').filter(q => q.eq(q.field('uid'), args.uid)).collect()

        return result
    }
})

export const CreateDesignFromTemplate = mutation({
    args: {
        name: v.string(),
        imagePreview: v.string(),
        jsonTemplate: v.any(),
        uid: v.id('users'),
        width: v.number(),
        height:v.number()
    },
    handler: async (ctx, args) => {
        const res = await ctx.db.insert('designs', {
            name: args.name,
            uid: args.uid,
            height: args.height,
            width:args.width,
            imagePreview: args?.imagePreview,
            jsonTemplate: args?.jsonTemplate
        })
        return res // getting id of inserted template
    }
})