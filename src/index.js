import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApproveCard from './ApproveCard';

const App = () => {

    // const pessoaIcon = "https://icon-icons.com/icons2/806/PNG/48/chat-53_icon-icons.com_65955.png";

	return (
		<div className="ui container comments">
            <ApproveCard>
                <CommentDetail 
                    author={getFakeName()}
                    avatar={getFakeAvatar()}
                    date={getFakeDateAsString()}
                    phrase={getFakePhrase()}
                    />
            </ApproveCard>
            <ApproveCard>
                <CommentDetail 
                    author={getFakeName()}
                    avatar={getFakeAvatar()}
                    date={getFakeDateAsString()}
                    phrase={getFakePhrase()}
                    />
            </ApproveCard>
            <ApproveCard>
                O segredo do universo é: <b>{15 + 27}</b>
            </ApproveCard>
            <ApproveCard>
                <h4 style={{color: 'tomato'}}>Warning!</h4>
                <p>Attempted SQL Injection:</p>
                <tt>Drop table Usuarios;</tt>
            </ApproveCard>
        </div>
	);
};

function getFakeName() {
    return faker.name.firstName() + ' ' + faker.name.lastName();
}

function getFakeAvatar() {
    return faker.image.avatar();
}

function getFakeDateAsString() {
    return faker.date.recent().toLocaleString();
}

function getFakePhrase() {
    return faker.hacker.phrase();
}

ReactDOM.render( <App />, document.querySelector('#root'));
