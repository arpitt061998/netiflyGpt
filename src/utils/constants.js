
export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-1965627-1657225.png?f=webp&w=256";

export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_KEY}`
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGE = [
  {identifier:"en",name:"English"},
  {identifier:"hi",name:"Hindi"},
  {identifier:"es",name:"Spanish"}
];

export const OPENAI_KEY = import.meta.env.VITE_APP_OPENAI_KEY;