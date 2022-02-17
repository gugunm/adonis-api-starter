import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterUsersAddThreeColumns extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('avatar').nullable()
      table.dateTime('email_verified_at').nullable()
      table.boolean('is_activated').notNullable().defaultTo(false)
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('avatar')
      table.dropColumn('email_verified_at')
      table.dropColumn('is_activated')
    })
  }
}
