export enum PlayerType {
  Human,
  Car,
  SkateBoard,
  Dinasour,
}

export default class Player {
  public location?: UserLocation;

  private readonly _id: string;

  private readonly _userName: string;

  public sprite?: Phaser.GameObjects.Sprite;

  public label?: Phaser.GameObjects.Text;

  public playerType: PlayerType;

  constructor(id: string, userName: string, location: UserLocation, playerType: PlayerType = PlayerType.Human) {
    this._id = id;
    this._userName = userName;
    this.location = location;
    this.playerType = playerType;
  }

  get userName(): string {
    return this._userName;
  }

  get id(): string {
    return this._id;
  }

  static fromServerPlayer(playerFromServer: ServerPlayer): Player {
    return new Player(playerFromServer._id, playerFromServer._userName, playerFromServer.location, playerFromServer.playerType);
  }
}
export type ServerPlayer = { _id: string, _userName: string, location: UserLocation, playerType: PlayerType };

export type Direction = 'front'|'back'|'left'|'right';

export type UserLocation = {
  x: number,
  y: number,
  rotation: Direction,
  moving: boolean,
  conversationLabel?: string 
};
