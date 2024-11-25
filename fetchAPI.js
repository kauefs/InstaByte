// let{API}=process.env;
// // Fetch EndPoint Data Function:
// export default async function fetchImages() {
//   try {const response = await fetch(process.env.API); // Use imported URL
//        const   data   = await      response.json(      );
//        return  data}
//        catch (error) {console.error('Error Loading Data:', error)}}

import type {Config, Context} from '@netlify/edge-functions'
export default async (request : Request, context : Context) => {
  const response = await context.next()
  return new Response(response.body, {
    headers: {
       'access-control-allow-origin': '*'
    }
  })
}
export const config : Config = {
  path: '/*'
}
