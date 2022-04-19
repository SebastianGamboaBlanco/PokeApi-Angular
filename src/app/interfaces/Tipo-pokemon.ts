export interface ReqResponse {
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: PokemonInformacion;
  id: number;
  move_damage_class: PokemonInformacion;
  moves: PokemonInformacion[];
  name: string;
  names: Name[];
  past_damage_relations: any[];
  pokemon: PokemonInformacion[];
}

interface DamageRelations {
  double_damage_from: PokemonInformacion[];
  double_damage_to: PokemonInformacion[];
  half_damage_from: PokemonInformacion[];
  half_damage_to: PokemonInformacion[];
  no_damage_from: any[];
  no_damage_to: any[];
}

interface PokemonInformacion {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  generation: PokemonInformacion;
}

interface Name {
  language: PokemonInformacion;
  name: string;
}

interface PokemonInformacion {
  pokemon: PokemonInformacion;
  slot: number;
}
