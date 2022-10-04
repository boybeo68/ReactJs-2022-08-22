import React from 'react';
import {useParams, useSearchParams, useLocation} from 'react-router-dom';

export const Detail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  let location = useLocation();
  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get('order');

  console.log(params, searchParams, location, term, window.location.search);
  return <div>Detail</div>;
};
