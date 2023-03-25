export interface IemitObject {
  type: string;
  name: string;
  content: any;
  time: Date;
  data: string;
}
export interface IonEventObj {
  type: string;
  name: string;
  content: any;
  time: Date;
}

type emitEvents = [IemitObject];
type onEvents = [IonEventObj];

type IemitEvents<T> = emitEvents | [];
type IonEvents<T> = onEvents | [];

type Ievents = emitEvents | onEvents | [];

export interface Istate {
  Events: Ievents;
  emitEvent: IemitEvents<[]>;
  onEvent: IonEvents<[]>;
  isConnected: boolean;
}
