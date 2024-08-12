import { defineEventHandler, readBody } from "h3"

export default defineEventHandler(async (event) => {
  try {
    // SQL statements
    const createTableSQL = `
    CREATE TABLE IF NOT EXISTS Registration (
      id SERIAL PRIMARY KEY,
      FirstName TEXT DEFAULT 'text',
      LastName TEXT DEFAULT 'text'
      Email TEXT DEFAULT 'text'
      PhoneNumber TEXT DEFAULT 'text'
    );`

    const insertSQL = `
    INSERT INTO Registration (FirstName, LastName, Email, PhoneNumber) 
    VALUES (:FirstName, :LastName, :Email, :PhoneNumber) 
    RETURNING *;`

    // Read the body from the event
    const { FirstName, LastName, Email, PhoneNumber } = await readBody(event)

    // Create the table if it doesn't exist
    const createTableResponse: any = await $fetch(
      import.meta.env.ORBITYPE_API_SQL_URL,
      {
        method: "POST",
        headers: {
          "X-API-KEY": import.meta.env.ORBITYPE_API_SQL_KEY,
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
    const insertResponse: any = await $fetch(import.meta.env.ORBITYPE_API_SQL_URL, {
      method: "POST",
      headers: {
        "X-API-KEY": import.meta.env.ORBITYPE_API_SQL_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sql: insertSQL,
        bindings: { FirstName, LastName, Email, PhoneNumber },
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
