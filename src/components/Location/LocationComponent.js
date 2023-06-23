import axios from 'axios';

const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          return resolve(position.coords);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};

export const getLocation = async () => {
  const coordinates = await getCoordinates();

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&key=${apiKey}`;

  await axios
    .get(geocodingUrl)
    .then((response) => {
      const addressComponents = response.data.results[0].address_components;
      const cityComponent = addressComponents.find((component) =>
        component.types.includes('postal_town')
      );

      if (cityComponent) {
        console.log(cityComponent.long_name);
        return cityComponent.long_name;
      }
    })
    .catch((error) => {
      console.error('Error fetching city: ', error);
    });
};


//
// export const getLocation = async () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         // Retrieve latitude and longitude from position object
//         const { latitude, longitude } = position.coords;
//
//         // Reverse geocoding API request
//         const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
//         const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
//
//         await axios
//           .get(geocodingUrl)
//           .then((response) => {
//             const addressComponents = response.data.results[0].address_components;
//             const cityComponent = addressComponents.find((component) =>
//               component.types.includes('postal_town')
//             );
//
//             if (cityComponent) {
//               return cityComponent.long_name;
//             }
//           })
//           .catch((error) => {
//             console.error('Error fetching city:', error);
//           });
//       },
//       (error) => {
//         console.error('Error getting location:', error);
//       }
//     );
//   } else {
//     console.error('Geolocation is not supported by this browser.');
//   }
// };