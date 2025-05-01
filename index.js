// create an arr to carry itemnames
// filter the completed tasks
// add

class taskList{

}
addTask(task);{
    this.task.push(task);
}
completeTask(task)
    this.task.filter(t=>t!==task);
    {
        listTasks()
          this.task.array.forEach((task,index)=>{
            console.log(`${index*1}.${task}`);
          });
        }
    
    const taskList=new taskList();
    task.addTask("Buy groceries");
    taskList.addTask("Finish project");
    taskList.listTasks();
    task.completeTask("Buy groceries");
    taskList.listTasks();


const student={
    names:'John',
    score:59,
}
getAverage(){
    return this.score.reduce(a,b=>a+b,0)/this.score.length();
}

const scoreList={
    students:[{name:"carol",score:50},{name:"Magret",score:63},{name:"Evetor",score:30},{name:"Sanjie",score:60}]
}
function getAverage(){
    return scoreList.filter(student=>student.scores)/students.length;
}
const scoreLists=[{name:"carol",score:50},{name:"Magret",score:63},{name:"Evetor",score:30},{name:"Sanjie",score:60}]
console.log(getAverage(scoreList));




const shopCart={
    price:[{item:"slasher",price:3000},{item:"pangaknife",price:3500},{item:"laptop",price:35000}]
}
console.log(shopCart.item);
console.log(shopCart.price);
shopCart.item='bagger'
shopCart.price=500
console.log(shopCart.item)
console.log(shopCart.price);
shopCart.item='buscuits'
shopCart.price=400
console.log(shopCart.item);
console.log(shopCart.price);
shopCart.item='yoghut'
shopCart.price=600
console.log(shopCart.item);
console.log(shopCart.price);

// shopCart.getSum=price.reduce((a,b)=>a+b)
// console.log({shopCart});






function Movie(year,title, rating){
this.year = year
this.title = title
this.rating = rating
this.isClassic = function(){
    return this.year<2000

};
this.recommend = function(){
    return this.rating>8 ?"Highly recommend":"HighlyRecommend"
}    
}

let move1 = new Movie("Walking in light",1997,8);
let move2 = new Movie("Sun way",1965,7);
let move3 = new Movie("Walking died",2004,10);
console.log(`${move1.title} ${move1.isClassic} ,${move1.HighlyRecommend}`)
console.log(`${move2.title} ${move2.isClassic} ,${move2.HighlyRecommend}`)
console.log(Movie(`${move3.title} ${move3.isClassic} ,${move3.HighlyRecommend}`))