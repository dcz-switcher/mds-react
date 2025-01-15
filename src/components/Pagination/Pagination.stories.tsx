import React from 'react';
import type { Meta} from '@storybook/react';

import Pagination from './Pagination';
import { Alert } from '../Alert';
import { Box } from '../Box';

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

  return (
    <div className='mds-container'>
        <div className='mds-row'>
          <div className="mds-col-12">
            <Box className='mds-stack-b--24'>
              <Alert severity='warning'>WORK IN PROGRESS - don't ready yet</Alert>
            </Box>
            <Pagination count={count} page={currentPage} onChange={handleChange}/>
            </div>
        </div>
      </div>
  )
};