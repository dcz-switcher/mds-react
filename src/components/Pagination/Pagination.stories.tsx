import React from 'react';
import type { Meta} from '@storybook/react';

import Pagination from './Pagination';

const meta = {
  component: Pagination
} satisfies Meta<typeof Pagination>;

export default meta;


export const Default = ({
  count = 10,
  page = 1,
}) => {

  const [currentPage, setCurrentPage] = React.useState(page);
  
  const handleChange = (newPage:number) => {
    setCurrentPage(newPage);
  }

  React.useEffect(() => {
    setCurrentPage(page)
  }, [page]);

  return (
    <Pagination count={count} page={currentPage} onChange={handleChange}/>
  )
};