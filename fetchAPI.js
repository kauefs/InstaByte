let{API}=process.env;
// Fetch EndPoint Data Function:
export default async function fetchImages() {
  try {const response = await fetch(process.env.API); // Use imported URL
       const   data   = await      response.json(      );
       return  data}
       catch (error) {console.error('Error Loading Data:', error)}}
