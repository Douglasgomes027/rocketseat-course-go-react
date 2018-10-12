import React, {Component} from 'react';

import Header from '../../components/Header';
import Grid from '../../components/Grid';
import { Container, Content, Sidebar, Form, Repositories } from './styles';
import api from '../../services/api';

export default class Main extends Component {

    constructor(){
        super();

        this.state = {
            currentRepository : [],
            repositoryInput : 'facebook/react',
            repositories : [],
            errorInput: false,
            loader: false,
            loaderIssues: false,
            issues: []
        }
    }

    addRepository = async (e) => {
        e.preventDefault();

        if (!this.state.repositoryInput){
            this.setState({
                errorInput: true
            });
            return;
        }

        this.setState({
            loader: true
        });

        try{
            const { data } = await api.get(`/repos/${this.state.repositoryInput}`);

            const repository = {
                id: data.id,
                name: data.name,
                avatar_url : data.owner.avatar_url,
                login: data.owner.login
            };

            this.setState({
                repositories : [...this.state.repositories, repository],
                repositoryInput : '',
                errorInput : false,
                loader: false
            });
        }
        catch(e){
            console.log(e);
            this.setState({
                errorInput : true,
                loader: false
            });
        }
    }

    changeRepository = async (repository, state) => {
        const {login, name} = repository;

        this.setState({
            currentRepository: [],
            loaderIssues : true
        });

        try{
            const { data: issues } = await api.get(`https://api.github.com/repos/${login}/${name}/issues?state=${state}`);

            this.setState({
                currentRepository : repository,
                issues,
                loaderIssues : false
            });
        }
        catch(e){
            this.setState({
                currentRepository : [],
                issues: [],
                loaderIssues : false
            });
        }
    }

    render(){
        return(
            <Container>
                <Sidebar>
                    <Form onSubmit={this.addRepository}>
                        <input
                            type="text"
                            value={this.state.repositoryInput}
                            placeholder="Novo repositório"
                            onChange={e => this.setState({repositoryInput : e.target.value, errorInput : false})}
                            className={this.state.errorInput ? 'error' : ''}
                        />
                        <button type="submit">
                            {
                                this.state.loader 
                                ? <i className="fa fa-spinner fa-pulse"></i> 
                                : <i className="fa fa-plus-circle"></i> 
                            }
                        </button>
                    </Form>

                    <Repositories>
                        <ul>
                            { this.state.repositories.map(repository => (
                                    <li key={repository.id} onClick={this.changeRepository.bind(this,repository, 'all')}>
                                        <img src={repository.avatar_url} alt={repository.name} />

                                        <div className="detail">
                                            <strong>{repository.name}</strong>
                                            <small>{repository.login}</small>
                                        </div>

                                        <i className="fa fa-angle-right"></i>
                                    </li>
                            ))}
                        </ul>
                    </Repositories>
                </Sidebar>
                <Content>
                    <i className={`fa fa-spinner fa-pulse ${!this.state.loaderIssues ? 'hide' : ''}`}></i>
                    <div className={this.state.currentRepository.length <= 0 ? 'hide' : ''}>
                        <Header repository={this.state.currentRepository} onChangeIssue={this} />
                        <Grid issues={this.state.issues} />
                    </div>
                </Content>
            </Container>
        );
    }
}