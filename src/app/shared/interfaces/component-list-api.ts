import { Observable } from 'rxjs';
import { ResponseList } from './response-list';

export interface ComponentListApi<T, G = {}> {
    getData(dto?: G): Observable<ResponseList<T>>;
}
