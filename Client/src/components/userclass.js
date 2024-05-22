import React from "react"
class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userinfo : {
                name:"dummy"
            }
        }
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/krishnabu");
        const json= await data.json();
        this.setState({
            userinfo : json,
        })
    }
    render(){
        const {name ,avatar_url} =this.state.userinfo;
        return(
            <div className="text-center justify-center">
                <h1 className="font-bold text-lg">About Us</h1>
                <img className="mx-auto" src={avatar_url}/>
                <p>Name : {name}</p>  
                <p>This is my <a href="https://github.com/krishnabu" target="_blank">GitHub Profile</a>.</p>
                <p>Email : batthulashivakrishnagoud@gmail.com</p>
            </div>
        )
    }
}
export default Userclass;