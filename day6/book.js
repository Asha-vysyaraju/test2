class book{
    constructor(name,author,type){
        this.name=name
        this.author=author
        this.type=type
        // this.read=function(){
        //     console.log("you are reading this book")
        // }
    }
     read(){
       console.log(`you have read ${this.name}`)
     }
}

let book1=new book("abckis","sgas","ficytion")
book1.read()
console.log(book1)

class Hero{
    constructor(name,power,weapon,health=100){
        this.name=name
        this.power=power
        this.weapon=weapon
        this.health=health

    }
    showInfo(){
        console.log(`Hero details: Name:${this.name},Power:${this.power},Wealth:${this.weapon},Health:${this.health}`)
    }
    getHealth(){
        console.log(`Health:${this.health}`)
    }
    attack(){
        if(this.health<10){
        console.log("Health is less than 10. Cannot attack");
        return
        }else{
            console.log(`${this.name} is attacking with weapon ${this.weapon}`);
            this.health -= 10;
        }
    }
    sleep(){
        console.log(`${this.name} is sleeping`);

        this.health += 20;
    }
    changeWeapon(newWeapon){

        this.weapon = newWeapon;

    }
}
const hero1=new Hero("Superman","flying","Laser",30);
console.log(hero1)
hero1.showInfo();
hero1.getHealth()
hero1.attack()
hero1.attack()
hero1.attack()
hero1.getHealth()
hero1.sleep()
hero1.getHealth()
hero1.changeWeapon("fire")
hero1.attack()