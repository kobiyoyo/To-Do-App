const app = {
name:"chubi",
carsoptions:['BMW',"toyota"]
};

const onformSubmit = (e) =>{
  e.preventDefault();
  const carop = e.target.elements.options.value;
  if(carop){
    app.carsoptions.push(carop);
    e.target.elements.options.value ='';
  renderCounterApp();
  }

};
const removeAll = () =>{
app.carsoptions.length = 0;
  renderCounterApp();
}
const appRoot = document.getElementById('app');
const renderCounterApp = () => {
const template = (
  <div>
  <p>{app.carsoptions.length}</p>
{app.carsoptions.map((car)=>{
    return <p key={car}>{car}</p>
  }
)}
  <form onSubmit ={onformSubmit} >
  <input type='text' name='options'/>
    <button>add</button>

</form>
  <button onClick={removeAll}>reset</button>
  </div>
  );
  ReactDOM.render(template,appRoot);
};
renderCounterApp();
























class person {
constructor(name='anonymous',age = 0 ){
  this.name = name;
  this.age = age;
}
getGreeting(){
  return `${this.name} is ${this.age}year(s)`;
}

}
class travel extends person{
constructor(name,age,location){
  super(name,age);
  this.location = location;
};
haslocation(){
  return !!this.location;
}
getGreeting(){
let getGreeting = super.getGreeting();
if(this.haslocation){
getGreeting += `the location is ${this.location}`;
}
return getGreeting;

}
}
const me = new travel('dan',21,"abuja");
console.log(me.getGreeting());
