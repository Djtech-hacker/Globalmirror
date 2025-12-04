import { Hono } from "hono";

// Define the Env type
type Env = {
  DB?: any;
  R2_BUCKET?: any;
};

const app = new Hono<{ Bindings: Env }>();

export default app;