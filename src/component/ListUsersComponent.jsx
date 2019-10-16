import React, {Component} from 'react';
import UserDataService from '../service/UserDataService';

class ListUsersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this) 
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
        this.updateUserClicked = this.updateUserClicked.bind(this)       
    }

    componentDidMount() {
        this.refreshUsers();
    }
    
    async refreshUsers() {
        await UserDataService.retrieveAllUsers()
            .then(
                response => {
                    console.log(response)
                    this.setState({ users: response.data})
                }
            ).catch(error => {
                console.log(error)
            })
    }

    async deleteUserClicked(id){
        await UserDataService.deleteUser(id)
        .then(
            response => {
                console.log(response)
                this.setState({message: `Delete of user ${id} Successful`})
                this.refreshUsers()
            }
        ).catch(error => {
            console.log(error)
        })
    }

    async updateUserClicked(id){
        console.log('update ' + id)
        this.props.history.push(`/users/${id}`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Users</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Ativo</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>                    
                                        <td>{user.active+''}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => this.updateUserClicked(user.id)}>Update</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListUsersComponent