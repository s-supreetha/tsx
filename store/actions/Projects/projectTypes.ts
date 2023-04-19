export const FETCH_PROJECT_DATA_SUCCESS="FETCH_PROJECT_DATA_SUCCESS";
export const FETCH_PROJECT_DATA_ERROR="FETCH _PROJECT_DATA_ERROR";
export interface Project  {
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
export interface ProjectState{
    projectData:Project[]|null;
    error:string|null;

}
interface FetchProjectDataSuccessAction{
    type: typeof FETCH_PROJECT_DATA_SUCCESS;
    payload:Project;
}
interface FetchProjectDataErrorAction{
    type:typeof FETCH_PROJECT_DATA_ERROR;
    payload:string
}
export type ProjectAction=
|FetchProjectDataErrorAction
|FetchProjectDataSuccessAction