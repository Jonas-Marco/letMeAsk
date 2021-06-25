import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HomeWrapper, Separetor } from './styles/HomeWrapper';
import illustration from '../../assets/images/illustration.svg';
import googleIcon from '../../assets/images/google-icon.svg';
import Logo from '../../components/commons/Logo';
import Text from '../../components/commons/Text';
import TextField from '../../components/forms/TextFild';
import { Button } from '../../components/commons/Button';
import { useAuth } from '../../hooks/useAuth';
import { dataBase } from '../../service/firebase';

export default function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event) {
    event.preventDefault();
    if (roomCode.trim() === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }

    const roomRef = await dataBase.ref(`rooms/${roomCode}`).get();
    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }
    history.push(`/rooms/${roomCode}`);
  }

  return (
    <HomeWrapper>
      <HomeWrapper.AsideWrapper>
        <img src={illustration} alt="background" />
        <Text
          variant="title"
          tag="h2"
          color="primary"
          margin="16px 0 0 0"
        >
          Toda pergunta tem uma resposta.
        </Text>

        <Text
          variant="paragraphy"
          tag="p"
          color="secondary"
          margin="32px 0 0 0"
        >
          Aprenda e compartilhe conhecimento com outras pessoas
        </Text>
      </HomeWrapper.AsideWrapper>

      <HomeWrapper.MainWrapper>
        <HomeWrapper.MainContent>
          <Logo />

          <Button
            type="submit"
            variant="quaternary"
            color="primary"
            margin="64px 0 0 0"
            onClick={handleCreateRoom}
            fullWidth
          >
            <img
              src={googleIcon}
              alt="Google icon"
              style={{ margin: '0 8px 0 0' }}
            />
            Crie sua sala com o Google
          </Button>

          <Separetor>
            <Text
              variant="paragraphy"
              tag="p"
              color="tertiary"
            >
              ou entre em uma sala
            </Text>
          </Separetor>

          <form onSubmit={handleJoinRoom}>
            <TextField
              type="text"
              placeholder="Digita o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              vaue={roomCode}
            />

            <Button
              type="submit"
              variant="secondary"
              color="primary"
              margin="16px 0 0 0"
              fullWidth
            >
              Entrar na sala
            </Button>
          </form>
        </HomeWrapper.MainContent>
      </HomeWrapper.MainWrapper>
    </HomeWrapper>
  );
}
