import { createError, defineEventHandler, readBody } from "h3"

export default defineEventHandler(async (event) => {
  const bindings = await readBody(event)
  await validate(bindings)

  let sql = "INSERT INTO comments (msg, post_id)"
  sql += " VALUES (:msg, :post_id) RETURNING *"

  const rows: any[] = await $fetch(import.meta.env.ORBITYPE_API_SQL_URL, {
    method: "POST",
    headers: { "X-API-KEY": import.meta.env.ORBITYPE_API_SQL_KEY },
    body: { sql, bindings },
  })
  return rows[0]
})

async function validate(bindings) {
  if (!bindings.msg || !bindings.post_id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid",
    })
  }
}
