import {IEntity} from "./interfaces/IEntity";
import {AxiosError} from "axios";
import {IOrdsResponse} from "./IOrdsResponse";

/**
 * The interface defining what we should expect back from any call to an ORDS
 * endpoint
 */
export interface IResponse<T extends IEntity> {
  ordsResponse: IOrdsResponse<T>;
  error?: AxiosError;
}