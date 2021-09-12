const Redis = require("ioredis")
const redis = new Redis()

async function main() {
  let status = await redis.set("testkey", "testdata")
  console.log("SET testkey testdata ==>", status)
  let result = await redis.get("testkey")
  console.log("GET testkey ==>", result)
  redis.end()
}

main()
