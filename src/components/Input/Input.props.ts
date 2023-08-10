import { InputHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {  
  label: string,
  icon:IconEnum,
  placeholder?:string,
}


export enum IconEnum {
  User,
  Password,
  createUser
}