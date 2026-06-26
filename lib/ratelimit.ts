import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const contactRatelimit = new Ratelimit({
  redis: new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  }),
  limiter: Ratelimit.slidingWindow(2, '3 m'),
  prefix: 'contact',
})
