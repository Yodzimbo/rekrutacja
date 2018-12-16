import axios from 'axios';

const url = 'https://makevoid-skicams.p.mashape.com/cams.json';

export function getVideo() {
  return axios.get(url, {
    headers: { "X-RapidAPI-Key": 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw' },
  })
};