import { Socket } from 'socket.io-client';
import { UserLocation } from './classes/Player';
import TownsServiceClient from './classes/TownsServiceClient';
import { VehicleLocation } from './classes/Vehicle';

export type CoveyEvent = 'playerMoved' | 'playerAdded' | 'playerRemoved';

export type VideoRoom = {
  twilioID: string,
  id: string
};
export type UserProfile = {
  displayName: string,
  id: string
};
export type CoveyAppState = {
  sessionToken: string,
  userName: string,
  currentTownFriendlyName: string,
  currentTownID: string,
  currentTownIsPubliclyListed: boolean,
  myPlayerID: string,
  emitMovement: (location: UserLocation) => void,
  emitVehicleMovement: (location: VehicleLocation) => void,
  emitCreateVehicle: (location: UserLocation, vehicleType: string) => void,

  socket: Socket | null,
  apiClient: TownsServiceClient
};
