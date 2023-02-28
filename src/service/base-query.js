import { useQuery } from 'vue-query';
import axios from 'axios';

export function BaseQuery() {
  return function ({
    endpoint,
    method = 'get',
    query = '',
    queryFn,
    data: body,
  }) {
    const axiosOptions = {
      url: `http://localhost:5000/general-body`,
      method,
      data: body,
    };

    return useQuery([endpoint, method, query], async () => {
      const { data } = queryFn
        ? await queryFn(axiosOptions)
        : await axios(axiosOptions);

      return data;
    });
  };
}

// Examples

/************* POST REQUEST *************/

// const { isLoading, data } = BaseQuery()({ endpoint: "frame", method: "post", data: { name: "new frame" } });

/************* GET REQUEST *************/

// const { isLoading, data } = BaseQuery()({ endpoint: "frame" });
