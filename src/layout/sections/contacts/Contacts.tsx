import React from 'react';
import { SectionTitle } from '../../../components/title/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { Description } from '../../../components/Description';
import { S } from './Contacts_Styles';

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"} direction={"column"}>
          <Description>Want to know more or just chat? You are welcome!</Description>
          <S.Form>
            <S.Field placeholder={"name"} />
            <S.Field type={"email"} placeholder={"e-mail"} />
            <S.Field as={"textarea"} placeholder={"Message"} />
            <Button type={"submit"}>Send message</Button>
          </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};

