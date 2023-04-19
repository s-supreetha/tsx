export const FETCH_TEAM_DATA_SUCCESS="FETCH_TEAM_DATA_SUCCESS";
export const FETCH_TEAM_DATA_ERROR="FETCH _TEAM_DATA_ERROR";
export interface Team  {
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
export interface TeamState{
    teamData:Team[]|null;
    error:string|null;

}
interface FetchTeamDataSuccessAction{
    type: typeof FETCH_TEAM_DATA_SUCCESS;
    payload:Team;
}
interface FetchTeamDataErrorAction{
    type:typeof FETCH_TEAM_DATA_ERROR;
    payload:string
}
export type TeamAction=
|FetchTeamDataErrorAction
|FetchTeamDataSuccessAction