import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from '../../components/commons/Menu';
import { Button } from '../../components/commons/Button';
import Text from '../../components/commons/Text';
import TextField from '../../components/forms/TextFild';
import { RoomWrapper } from './style/RoomWrapper';
import { useAuth } from '../../hooks/useAuth';
import { dataBase } from '../../service/firebase';
import RoomCode from '../../components/commons/RoomCode';

export default function Room() {
  const params = useParams();
  const roomId = params.id;

  const { user } = useAuth();
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = dataBase.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => ({
        id: key,
        content: value.content,
        author: value.author,
        isHighlighted: value.isHighlighted,
        isAnswered: value.isAnswered,
      }));

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]);

  async function handleSendQuestion(event) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await dataBase.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <div>
      <Menu>
        <RoomCode code={roomId} />
      </Menu>
      <RoomWrapper>
        <RoomWrapper.ContentWrapper>
          <Text
            variant="subTilte"
            tag="h2"
            color="quaternary"
          >
            Sala
            {' '}
            {title}
          </Text>
          <Text
            variant="paragraphy"
            tag="p"
            color="primary"
            margin=" 0 0 0 16px "
            background="#e559f9"
            borderRadius="9999px"
            padding="8px 16px"
          >
            { questions.length > 0 && (
            <span>
              {questions.length}
              {' '}
              pergunta(s)
            </span>
            ) }
          </Text>
        </RoomWrapper.ContentWrapper>
        <form onSubmit={handleSendQuestion}>
          <TextField
            as="input"
            type="textArea"
            placeholder="O que você quer perguntar?"
            border="none"
            padding="0 16px"
            height="130px"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <RoomWrapper.FooterWrapper>
            { user ? (
              <RoomWrapper.Avatar>
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                  }}
                />
                <Text
                  variant="paragraphy"
                  tag="p"
                  color="quartenary"
                  margin="0 0 0 8px"
                >
                  {user.name}
                </Text>
              </RoomWrapper.Avatar>
            ) : (
              <Text
                variant="paragraphy"
                tag="p"
                color="tertiary"
              >
                Para enviar uma pergunta,
                {' '}
                <Link to="/">Faça seu login.</Link>
              </Text>
            ) }

            <Button
              type="submit"
              variant="secondary"
              color="primary"
              margin="16px"
              padding="16px"
              disabled={!user}
            >
              Enviar pergunta
            </Button>
          </RoomWrapper.FooterWrapper>
        </form>
        {JSON.stringify(questions)}
      </RoomWrapper>
    </div>
  );
}
