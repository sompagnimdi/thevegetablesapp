const React = require('react')

class Edit extends React.Component {
    render(){
        const {name, _id, color, readyToEat} = this.props.vegetable
        return (
            <>
                <h1>Edit This Vegetable</h1>
                <nav>
                    <a href="/vegetables"> Go Back To Vegetables Home</a>
                </nav>
                <form method="POST" action={`/vegetables/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Color: <input type="text" name="color" defaultValue={color}></input><br />
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={readyToEat}/> <br />
                    <input type="submit" value="Edit Vegetable" />
                </form>
            </>
        )
    }
}

module.exports = Edit
