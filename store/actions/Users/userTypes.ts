export const FETCH_USER_DATA_SUCCESS="FETCH_USER_DATA_SUCCESS";
export const FETCH_USER_DATA_ERROR="FETCH _USER_DATA_ERROR";
export interface User  {
    name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
    // eye_color: string,
	// birth_year: string,
	// gender: string,
	// homeworld: string,
	// films: string[],
	// species: string[],
	// vehicles: string[],
	// starships: string[],
	// created: string,
	// edited: string,
	// url: string
}
export interface UserState{
    userData:User[]|null;
    error:string|null;

}
interface FetchUserDataSuccessAction{
    type: typeof FETCH_USER_DATA_SUCCESS;
    payload:User[];
}
interface FetchUserDataErrorAction{
    type:typeof FETCH_USER_DATA_ERROR;
    payload:string
}
export type UserAction=
|FetchUserDataErrorAction
|FetchUserDataSuccessAction