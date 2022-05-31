import { HttpParams } from '@angular/common/http';
import { PageRequest } from '../types/pagination/page-request';

/**
 * Формирует объект запроса списка элементов из бэкэнд сервиса jsonplaceholder typicode
 * @param pageRequest
 */
export const buildQueryParamsForPageRequest = (pageRequest: PageRequest): Record<string, any> => {
  const queryParams: Record<string, any> = {};
  if (pageRequest.page) {
    queryParams['_page'] = pageRequest.page.number;
    queryParams['_limit'] = pageRequest.page.size;
  }
  if (pageRequest.sort) {
    queryParams['_sort'] = pageRequest.sort.field;
    queryParams['_order'] = pageRequest.sort.direction;
  }

  if (pageRequest.filter) {
    pageRequest.filter.forEach((filterItem) => {
      if (!queryParams[filterItem.field]) queryParams[filterItem.field] = [];
      queryParams[filterItem.field].push(filterItem.value);
    });
  }

  return queryParams;
};

/**
 * Формирует строку запроса списка элементов из бэкэнд сервиса jsonplaceholder typicode
 * @param pageRequest
 */
export const pageRequestToString = (pageRequest: PageRequest): string => {
  const queryParams: Record<string, any> = buildQueryParamsForPageRequest(pageRequest);

  let httpParams = new HttpParams({ fromObject: queryParams });
  return httpParams.toString();
};
