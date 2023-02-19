export class CurrentUser {
  public roles: string[];
  public email: string;

  constructor(roles: string[], email: string) {
    this.roles = roles;
    this.email = email;
  }
}

export interface UserDto {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  roles: string
}

export interface UpdateUserDto {
  firstName: string,
  lastName: string,
  roles: string
}

export interface CreateUserDto {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  roles: string
}

export interface CreateMachineDto {
  name: string
}

export enum Status{
  STOPPED = "STOPPED",
  RUNNING = "RUNNING"
}

export interface MachineDto {
  id: number,
  name: string,
  status: Status,
  active: boolean
}

export interface TokenDto {
  access_token: string,
  refresh_token: string
}

export enum Action{
  STOP="STOP",
  START="START",
  DESTROY="DESTROY",
  RESTART="RESTART"
}

export interface ErrorMessageDto{
  id:number,
  action: Action,
  machineId: number,
  date:string
  message:string,
  userId:number

}

