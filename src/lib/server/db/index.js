import Database from 'better-sqlite3'
import {Quote} from './quote'

const database= new Database('mandosWash.db', {verbose: console.log})

export const models = {
   Quote: new Quote(database)
}
