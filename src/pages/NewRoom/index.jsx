import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { NewRoomWrapper } from './styles/NewRoomWrapper';
import illustration from '../../assets/images/illustration.svg';
import Logo from '../../components/commons/Logo';
import Text from '../../components/commons/Text';
import TextField from '../../components/forms/TextFild';
import { Button } from '../../components/commons/Button';
import { dataBase } from '../../service/firebase';
import { useAuth } from '../../hooks/useAuth';

export default function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();
  async function handleCreateRoom(event) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }

    const roomRef = dataBase.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user.id,
    });
    history.push(`/rooms/${firebaseRoom.key}`);
  }
  return (
    <NewRoomWrapper>
      <NewRoomWrapper.AsideWrapper>
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
      </NewRoomWrapper.AsideWrapper>

      <NewRoomWrapper.MainWrapper>
        <NewRoomWrapper.MainContent>
          <Logo />

          <Text
            variant="subTitle"
            tag="h2"
            color="quaternary"
            margin="64px 0 32px 0"
          >
            Criar uma nova sala
          </Text>
          <form onSubmit={handleCreateRoom}>
            <TextField
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button
              type="submit"
              variant="secondary"
              color="primary"
              margin="32px 0 0 0"
            >
              Criar sala
            </Button>
          </form>
          <Text
            variant="paragraphy"
            tag="p"
            color="tertiary"
            margin="16px 0 0 0"
          >
            Quer entrar em uma sala já existente?
            <Link to="/">Clique aqui</Link>

            {/*     <Text
            variant="paragraphy"
            tag="p"
            color="tertiary.light"
            textAlign="center"
            padding="16px 0 0 0"
          >
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.main"
              onClick={(event) => {
                event.preventDefault();
                websitePageContext.toggleModal();
              }}
            >
              Cadastre-se
            </Link> */}

          </Text>
        </NewRoomWrapper.MainContent>
      </NewRoomWrapper.MainWrapper>
    </NewRoomWrapper>
  );
}
