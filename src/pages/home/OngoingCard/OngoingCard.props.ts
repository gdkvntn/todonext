import { Dispatch, SetStateAction } from "react";

export interface OngoingCardProps {
    title:string,
    date:string,
    id:number,
    completed?:number,
}