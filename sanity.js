import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient (
{
    dataset: 'production',
    projectId: '1dcmoa8n',
    apiVersion: '2021-10-21',
    useCdn: true, 
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  }
);
 
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source) 