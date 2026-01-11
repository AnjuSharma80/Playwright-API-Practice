import { monitorEventLoopDelay } from "node:perf_hooks";

export function generateRandomTitle() {
  return `Post_${Math.floor(Math.random() * 10000)}`;
}

export function generateRandomBody() {
  return `Body_${Date.now()}`;
}
