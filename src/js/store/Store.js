import { action, observable } from "mobx";
import axios from 'axios';

class TreeStore {
    @observable searches = [];

    // guidGenerator = () => {
    //     var S4 = function() {
    //        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    //     };
    //     return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    // }

    @action searchUser = async (userName) => {
        return axios.get('/:userName')
    }


    // async componentDidMount() {
    //     const response = await this.getClients()
    //     console.log(response)
    //     this.setState({
    //         loading: false,
    //         clients: response.data})
    // }
    
}

const store = new TreeStore();
export default store;