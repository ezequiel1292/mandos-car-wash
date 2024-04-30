export class Quote {
    constructor(db) {
        this.db = db
        this.init()
    }

    init() {
        const creation_string=`
        CREATE TABLE IF NOT EXISTS quotes(
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT,
            phone_number TEXT,
            wash_type TEXT,
            car_type TEXT,
            request_box TEXT)`
            this .db.exec(creation_string)
    }
    
findAll() {
    const statement = `SELECT * FROM quotes`
    return this.db.prepare(statement).all()
  }
  
  findByPK(id) {
     const statement = `SELECT * FROM quotes WHERE id = @id`
     return this.db.prepare(statement).get({id})
  }
  
  remove(id) {
    const statement = `DELETE FROM quotes WHERE id = @id`
    this.db.prepare(statement).run({id})
  }
  
  add(name, phone_number, wash_type,car_type, request_box) {
    const statement = `INSERT INTO quotes(name, phone_number, wash_type,car_type,request_box) VALUES (@name, @phone_number, @wash_type,@car_type,@request_box)`
    this.db.prepare(statement).run({name, phone_number, wash_type,car_type,request_box})
  
  }
}