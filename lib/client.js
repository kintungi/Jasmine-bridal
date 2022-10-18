import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "cbqnmhpv",
    dataset: "production",
    apiVersion: "2022-10-18",
    useCdn: true,
    token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (src) => builder.image(src);