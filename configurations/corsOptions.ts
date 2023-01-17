import cors from "cors";

const allowedOrigins = ["http://localhost:5173"];

export const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};
