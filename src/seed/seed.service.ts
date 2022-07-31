import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  //* Inject Model
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); // delete * from pokemons;

    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    // const inserPromisesArray = [];
    const pokemonToInsert: { name: string, no: number; }[] = [];

    data.results.forEach(({ name, url }) => {

      const segments: string[] = url.split('/');
      const no: number = +segments[segments.length - 2];

      // const pokemon = await this.pokemonModel.create({ name, no });
      // inserPromisesArray.push(
      //   this.pokemonModel.create({ name, no })
      // );
      pokemonToInsert.push({ name, no }); //[{name: bulbasaur, no: 1}]
    });

    await this.pokemonModel.insertMany(pokemonToInsert);
    
    // await Promise.all(inserPromisesArray);

    return 'Seed Executed';
  }
}
