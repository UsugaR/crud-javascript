export class CRUD {
#tableName = null;
#data = null;
constructor(tableName = undefined){
     this.#setTableName(tableName);
      this.#setData();
}

#setTableName(tableName){
    this.#tableNameValidate(tableName);
    this.#tableName = tableName;
}

#setData(){
    let datarespository = this.#get(this.#tableName);
    this.#data = dataRepository === null ?[] : dataRepository;
}

#tableNameValidate(tableName){
    if(tableName == undefined) throw new Error("Table name required");
}

#save() {
    let datatosave = JSON.stringify(this.#data);
    sessionStorage.setItem(this.#tableName, dataToSave);
}

#get(key) {
    let data = sessionStorage.getItem(key);
    return JSON.parse(data);
}

#existelementwithid(id) {
    return this.data[id] === undefined ? false : true;
}

#checkThatElementExistWithId(id) {
    if(this.#existelementwithid(id))
    throw new Error('The element not exist');
}

create(data){
this.data.push(data);
this.#save();
return this.#data.length;
}

read (id){
    this.#checkThatElementExistWithId(id);
    return this.data[id];
}

readAll(){
    return this.#data;
}

update(id,data){
    this.#checkThatElementExistWithId(id);
    this.#data[id] = data;
    this.#save();
    return true;
}

delete(id){
    this.checkThatElementExistWithId(id);
    this.#data[id] = data;
    this.#save();
    return true;
}
}





