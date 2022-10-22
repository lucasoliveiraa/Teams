import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nome da turma"
          subtitle="adicione a galera e separe os times"
        />
      </Content>
    </Container>
  );
}
