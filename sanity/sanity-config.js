import sanityClient from "@sanity/client";

export default sanityClient({
   // Find your project ID and dataset in `sanity.json` in your studio project
   projectId: "mk0zwosv",
   dataset: "production",
   useCdn: true,
   apiVersion: "2021-10-21"
   // useCdn == true gives fast, cheap responses using a globally distributed cache.
   // Set this to false if your application requires the freshest possible
   // data always (potentially slightly slower and a bit more expensive).
});