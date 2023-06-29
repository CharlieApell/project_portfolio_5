import { rest } from "msw"

const baseURL = 'https://drf-api-charlie.herokuapp.com/'

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.json({
      "pk": 1,
      "username": "Charlie",
      "email": "",
      "first_name": "",
      "last_name": "",
      "profile_id": 1,
      "profile_image": "https://res.cloudinary.com/dyoegno0n/image/upload/v1/media/images/Profil_pv09rn"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];