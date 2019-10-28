import React,{ useState, useEffect} from 'react';

//STATEFULL

// class Hooks extends Component{
//     state= {
//         count : 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     //LIFECYCLE 

//     componentDidMount(){
//         document.title = `Nilainya : ${this.state.count}` 
//     }

//     componentDidUpdate(){
//         document.title = `Nilainya : ${this.state.count}` 
//     }

//     componentWillUnmount(){
//         document.title = 'Beginner';
//     }


//     render(){
//         return(
//             <div>
//                 <p>Nilai Jebol : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

//STATE HOOKS

const Hooks = () => {
    const[count, setCount] = useState(0);

        //SIDEEFFECT
    useEffect(() => {
        document.title = `Nilainya : ${count}` ;            //DidMount & DidUpdate
            return() => {
                 document.title = 'Beginner';               //WillUnMount
            }
    })

    return(
        <div>
        <p>Nilai Jebol : {count}</p>
        <button onClick={() => setCount(count + 1)}>Update Nilai</button>
    </div>
    )
}

export default Hooks;