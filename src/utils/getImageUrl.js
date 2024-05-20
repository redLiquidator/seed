export const ImagePath = {
  LANDING: 'landing',
  USERS: 'users',
  ECOMMERCE: 'e-commerce',
  PROFILE: 'profile'
};

// ==============================|| NEW URL - GET IMAGE URL ||============================== //

export function getImageUrl(name, path) {
  return new URL(`/src/assets/images/${path}/${name}`, import.meta.url).href;
}
