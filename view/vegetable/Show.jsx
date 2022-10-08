const React = require('react');

class Show extends React.Component {
   
    render(){
        const {name, color, readyToEat, _id} = this.props.vegetable
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
        <>
            <h1> {capName} Show Page </h1>
            <nav>
                <a href="/vegetables">Back To Vegetables Home</a>
                <a href={`/vegetables/${_id}/edit`}>{`Edit the ${capName}`}</a>
            </nav>
            <p>{capName} is {color} and {readyToEat? 'it\'s ready to eat': 'it\'s not ready to eat'}</p>
        </>
        )
   } 
}

module.exports = Show

