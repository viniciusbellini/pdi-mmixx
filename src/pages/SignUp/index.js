import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import api from '../../services/api';

import { Form, Container } from "./styles";

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const {name, email, password } = this.state;
        
        if(!name || !email || !password) {
            this.setState({ error: "Necessário preencher todos os dados para cadastro"})
        } else {
            try {
                await api.post("/users", {name, email, password});
                this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta"})
            }
        }
    };

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSignUp}>
                    <img src={Logo} alt="Pdi logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                        type="name"
                        placeholder="Nome completo"
                        onChange={e => this.setState({name: e.target.value})}
                    />
                    <input 
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({email: e.target.value})}
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({password: e.target.value})}
                    />
                    <button type="submit">Cadastrar</button>
                    <hr />
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
        );
    }
}
export default withRouter(SignUp);