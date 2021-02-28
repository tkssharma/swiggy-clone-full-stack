import { Repository } from 'typeorm';

import Example from '../../src/app/domain/entities/example';

const fixtureEntities: Example[] = [
  {
    name: 'test1',
    age: 1,
  },
  {
    name: 'test2',
    age: 5,
  },
  {
    name: 'test3',
    age: 20,
  },
];

export async function setupFixtures(repository: Repository<Example>): Promise<Example[]> {
  await repository.clear();
  const entities = fixtureEntities.map((ref) => repository.create({...ref}));
  await repository.save(entities);
  return entities.map((entity) => ({...entity}));
}
