import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    ConfigModule,
    // * Import the PokemonSchema and Pokemon model
    MongooseModule.forFeature([
    {
      name: Pokemon.name,
      schema: PokemonSchema
    }
  ])],
  exports: [MongooseModule]
})
export class PokemonModule {}
