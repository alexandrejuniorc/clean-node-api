import { type AddAccountRepository } from '../../../../data/protocols/add-account.repository'
import { type AccountModel } from '../../../../domain/models/account'
import { type AddAccountModel } from '../../../../domain/use-cases/add-account'
import { MongoHelper } from '../helpers/mongo.helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne({ _id: result.insertedId })

    const { _id, ...accountWithoutId } = account

    return Object.assign({}, accountWithoutId, {
      id: _id.toString(),
      name: accountWithoutId.name,
      email: accountWithoutId.email,
      password: accountWithoutId.password
    })
  }
}
