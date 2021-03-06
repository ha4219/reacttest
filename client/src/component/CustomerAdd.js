import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
        }
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }
    handleFileChange = (e) => {
        this.setState({
            file:e.target.files[0],
            fileName: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then((response) => {
                console.log(Response.data);
            })
        this.setState({
            file: null,
            userName: '',
            bir: '',
            gender: '',
            job: '',
            fileName: '',
        })
        window.location.reload();
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>customer add</h1>
                profile image: <input type="file" name="file" file={this.state.fileName} onChange={this.handleFileChange}/>
                <br/>
                name: <input type="text" name="username" value={this.state.username} onChange={this.handleValueChange}/>
                <br/>
                birthday: <input type="text" name="bir" value={this.state.bir} onChange={this.handleValueChange}/>
                <br/>
                gender: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/>
                <br/>
                job: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/>
                <br/>
                <button type="submit">add</button>
            </form>
        )
    }
}

export default CustomerAdd;