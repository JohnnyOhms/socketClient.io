export interface IemitObject {
  type: string;
  name: string;
  content: any;
  time: String;
  data: any;
}
export interface IonEventObj {
  type: string;
  name: string;
  content: any;
  time: any;
}

export type emitEvents = IemitObject[];
type onEvents = IonEventObj[];
type Ievents = emitEvents | onEvents;
type IeventItems = string[] | null;

export interface Istate {
  socket: any;
  Events: Ievents;
  emitEvent: emitEvents;
  // onEvent: onEvents;
  onEvent: any;
  isConnected: boolean;
  onEventItems: IeventItems;
}
