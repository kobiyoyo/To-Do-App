class VisibilityToggle extends React.Component{
constructor(props){
super(props);
this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
this.state = {
visibility:false
}

}
handleToggleVisibility(){
this.setState((prevstate)=>{
return{
  visibility:!this.state.visibility
}

});

}
render(){

  return(
<div>
<button onClick={this.handleToggleVisibility}>{this.state.visibility ? "hide me baby":"show me baby"}</button>
<h2>{this.state.visibility && (<div>Hello girl am all yours</div>)}</h2>
</div>
  );

}
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));

// const onformSubmit = (e) =>{
//   e.preventDefault();
//   const carop = e.target.elements.options.value;
//   if(carop){
//     app.carsoptions.push(carop);
//     e.target.elements.options.value ='';
//   renderCounterApp();
//   }
//
// };
// let visible = false;
// const showAll = () =>{
//  visible = !visible;
// renderCounterApp();
// }
// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
// const template = (
//   <div>
//   <button onClick={showAll}>{visible ? 'hide me baby':'show me baby'}</button>
//   <h1>{visible &&(<div>hello am here baby gal ...am all urs</div>)}</h1>
//   </div>
//   );
//   ReactDOM.render(template,appRoot);
// };
// renderCounterApp();
