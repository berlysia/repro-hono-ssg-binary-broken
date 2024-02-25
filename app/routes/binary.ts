import { createRoute } from "honox/factory";

export default createRoute(c => {
  c.header('Content-Type', 'image/png')
  return c.body(Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVR4nGP4z8AAAAMBAQDJ/pLvAAAAAElFTkSuQmCCAAAALw',
    'base64'
  ))
})