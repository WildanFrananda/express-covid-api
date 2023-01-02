/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("patients", (table) => {
        table.increments("id");
        table.string("name");
        table.string("phone");
        table.text("address");
        table.string("status");
        table.date("in_date_at");
        table.date("out_date_at");
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("patients");
};
