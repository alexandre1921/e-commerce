interface IWithId {
  id: number;
}

export type MapTypeUsingId<Item extends IWithId> = Map<Item['id'], Item>;

type ArrayToMapByIdType = <Item extends IWithId>(map: MapTypeUsingId<Item>, item: Item) => MapTypeUsingId<Item>;

type ArrayToMapType = <Item extends IWithId>(items: Item[]) => MapTypeUsingId<Item>;

export const arrayToMapById: ArrayToMapByIdType = (map, item) => map.set(item.id, item);

export const arrayToMap: ArrayToMapType = items => items.reduce(arrayToMapById, new Map());
