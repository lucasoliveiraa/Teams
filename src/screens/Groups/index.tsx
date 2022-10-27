import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { Container } from "./styles";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera rocket"]);

  const navigation = useNavigation();

  function handleNewGroups() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroups} />
    </Container>
  );
}
