let ex3 = require ('./exercise3');
let Std = ex3.Std;
let FrStdt = ex3.FrStdt;


class Promo{

  constructor(){
    this.promotion = [];
  }

  add(student){
    this.promotion.push(student);
  }

  size(){
    return this.promotion.length;
  }

  get(i){
    if(i<0 || i>this.size()){
      return undefined;
    }
    else{
      return this.promotion[i];
    }
  }

  print(){

    var allStudents = "";
    for(var i in this.promotion){
      console.log(this.promotion[i].toString())
      allStudents += this.promotion[i].toString() + "\n";
    return allStudents;
    }

  }

  write(){
    return JSON.stringify(this.promotion);
  }

  read(str){

    var promo = JSON.parse(str);
    this.promotion = [];
    for (var i in promo){
      var student = promo[i];
      if(promo[i]["nationality"] == undefined){
        student = new Std(promo[i]["lastName"],
                          promo[i]["firstName"],
                          promo[i]["id"]);
        }
      else{
          student = new FrStdt(promo[i]["lastName"],
                               promo[i]["firstName"],
                               promo[i]["id"],
                               promo[i]["nationality"]);
       }
       this.promotion.push(student);
    }
  }

  saveFile(fileName){
    let donnees = this.write();
    fileName.writeFileSync(donnees)

  }

  readFrom(fileName){
    var data = fs.readFileSync(fileName);
    var prom = this.read(data);
    return promo;
  }

}



exports.Promo = Promo;
