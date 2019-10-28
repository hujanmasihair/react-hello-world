import React, {Component, createContext} from 'react';


//Provider sbg penyedia
export const RootContext = createContext();         //createsore
const Provider = RootContext.Provider;              //bisa dibaca scra global HOC

const GlobalProvider = (Children) =>{
    return(
        class ParentComp extends Component{
            state = {
                totalOrder: 0
            }

            dispatch = (action) => {
                if(action.type === 'PLUS_ORDER'){
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if(action.type === 'MINUS_ORDER'){
                    if(this.state.totalOrder > 0){
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    }
                }
            }
            render(){
                return(
                            <Provider value={
                                {
                                    state : this.state,
                                    dispatch: this.dispatch
                                }
                            }>
                                <Children {...this.props}/>
                            </Provider>
                        )
                }
            }
    )
}

export default GlobalProvider;

//Consumer sbg penggunaan
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return(
        class ParentCOnsumer extends Component{
            render(){
                return(
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }   
    )
}