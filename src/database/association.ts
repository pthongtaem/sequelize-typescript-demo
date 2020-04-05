import { Actor } from '../models/Actor';
import { Movie } from '../models/Movie';
import { Genre } from '../models/Genre';

// export const association = () => {
Actor.belongsToMany(Movie, {
  through: 'MovieActor',
  foreignKey: 'actorId',
});

Movie.belongsToMany(Actor, {
  through: 'MovieActor',
  foreignKey: 'movieId',
});

Movie.belongsToMany(Genre, {
  through: 'MovieGenre',
  foreignKey: 'movieId',
});

Genre.belongsToMany(Movie, {
  through: 'MovieGenre',
  foreignKey: 'movieId',
});

// };
