import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayer = await playersGetByGroup(group);

    const playersAlreadyExists = storedPlayer.filter(
      (player) => player.name === newPlayer.name
    );

    if (playersAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está adicionada em um time.");
    }

    const storage = JSON.stringify([...storedPlayer, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
