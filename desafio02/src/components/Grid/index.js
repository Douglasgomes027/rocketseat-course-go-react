import React from 'react';
import { Container } from './styles';

const Grid = ({ issues }) => (
    <Container>
        { issues.map(issue => (
            <li key={issue.id}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />

                <div className="detail">
                    <strong>
                        {
                            issue.title.length > 30 
                            ? issue.title.substring(0, 30) + '...'
                            : issue.title
                        }
                    </strong>
                    <small>{issue.user.login}</small>
                    <a href={issue.html_url} target="_blank"><i className="fa fa-external-link"></i>ABRIR ISSUE</a>
                </div>
            </li>
        ))}
    </Container>
);

export default Grid;