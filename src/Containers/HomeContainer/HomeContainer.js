import { Container } from 'unstated'

 class HomeContainer extends Container {
   state = {
       counter: 0
   }

   increment = () => {
       this.setState({
           counter: this.state.counter + 1
       })
   }

   decrement = () => {
       this.setState({
           counter: this.state.counter - 1
       })
   }
}

export { HomeContainer }