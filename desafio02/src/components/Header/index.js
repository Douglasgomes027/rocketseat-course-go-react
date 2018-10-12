import React from 'react';
import { Container, Repository } from './styles';

const Header = ({ repository, onChangeIssue }) => (
    <Container>
        <Repository>
            <img src={repository.avatar_url} alt={repository.name} />

            <div className="detail">
                <strong>{repository.name}</strong>
                <small>{repository.login}</small>
            </div>
        </Repository>

        <select onChange={(e) => {
            onChangeIssue.changeRepository(repository, e.target.value);
        }}>
            <option value="all">Todas</option>
            <option value="open">Abertas</option>
            <option value="closed">Fechadas</option>
        </select>
    </Container>
);

export default Header;