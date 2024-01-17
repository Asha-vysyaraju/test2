// const car={
//     name:"BMW",
//     model:"XS",
//     year:"2020",
//     drive:function(){
//         console.log("Driving");
//     }
// }

// class car {
//     constructor(n,m,c,p){
//         this.name=n
//         this.model=m
//         this.color=c
//         this.price=p

//     }
// }

// const car1=new car("BMW","XS","white",100000)
// const car2=new car("Audi","Ab","black",200000)
// console.log(car1)
// console.log(car2)

// class hero{
//     constructor(name,age,country,hobbies,movies){
//         this.name=name
//         this.age=age
//         this.country-country
//         this.hobbies=hobbies
//         this.movies=movies

//     }
//     introduce(){
//         console.log(`hi!! Iam  ${this.name}`)
//     }
// }
// const hero1=new hero("Prabas",25,"India",["cricket","football"],[{
//     name:"Bahubali",
//     rating:5
// },{
// name:"saalar",
// rating:4.5
// }])
// hero1.introduce()
// console.log(hero1)

class movie{
    constructor(name,rating,year){
        this.name=name
        this.rating=rating
        this.year=year
    }
}

class hero{
    constructor(name,age,country,hobbies,moviedetails){
        this.name=name
        this.age=age
        this.country=country
        this.hobbies=hobbies
        this.latestmovie=new movie(moviedetails[0],moviedetails[1],moviedetails[1])

    }
    introduce(){
        console.log(`hi!! Iam  ${this.name}`)
    }
    getCountry(){
        return this.country;
    }
    setCountry(country){
        this.country=country;
    }
}

const hero1=new hero("Prabas",25,"India",["cricket","football"],["saalar",4.5,2023])
// console.log(hero1)
console.log(hero1.getCountry())
hero1.setCountry("USA")
console.log(hero1.getCountry())
