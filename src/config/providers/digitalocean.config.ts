import { DigitalOcean } from 'dots-wrapper';

const myApiToken = process.env.DIGITAL_OCEAN_TOKEN;
const digitalOcean = new DigitalOcean(myApiToken);

export const digitalOceanImageId = process.env.DIGITAL_OCEAN_IMAGE_ID;
export const digitalOceanDropletSize = process.env.DIGITAL_OCEAN_DROPLET_SIZE; 

export default digitalOcean
