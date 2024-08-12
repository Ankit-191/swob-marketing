import { defineEventHandler, readBody } from "h3"

export default defineEventHandler(async (event) => {
  try {
    // SQL statements
    const createTableSQL = `
    CREATE TABLE IF NOT EXISTS Registration (
      id SERIAL PRIMARY KEY,
      firstName TEXT DEFAULT 'text',
      lastName TEXT DEFAULT 'text'
      email TEXT DEFAULT 'text'
    );`

    const insertSQL = `
    INSERT INTO Registration (firstName, lastName,email) 
    VALUES (:firstName, :lastName, :email, :phoneNumber) 
    RETURNING *;`

    // Read the body from the event
    const { firstName, lastName, email, phoneNumber } = await readBody(event)

    // Create the table if it doesn't exist
    const createTableResponse: any = await $fetch(
      import.meta.env.ORBITYPE_API_URL,
      {
        method: "POST",
        headers: {
          "X-API-KEY": import.meta.env.ORBITYPE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sql: createTableSQL }),
      },
    )
    if (createTableResponse.error) {
      console.error("Create table error:", createTableResponse.error)
      return {
        error: "Failed to create table",
        details: createTableResponse.error,
      }
    }

    // Insert data into the table
    const insertResponse: any = await $fetch(import.meta.env.ORBITYPE_API_URL, {
      method: "POST",
      headers: {
        "X-API-KEY": import.meta.env.ORBITYPE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql: insertSQL,
        bindings: { firstName, lastName, email, phoneNumber },
      }),
    })

    console.log("Insert response:", insertResponse)

    if (insertResponse.error) {
      console.error("Insert error:", insertResponse.error)
      return { error: "Failed to insert data", details: insertResponse.error }
    }

    return insertResponse
  } catch (error: any) {
    console.error("Error handling event:", error)
    return { error: "Failed to handle event", details: error.message }
  }
})
