import React from 'react';
import './home-page.css';

import BookList from '../../book-list/book-list';
import ShoppingCartTable from '../../shopping-cart-table/shopping-cart-table';
import Spinner from '../../spinner/spinner';

const HomePage = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={ <Spinner /> }>
        <BookList />
      </React.Suspense>
      <ShoppingCartTable />
    </React.Fragment>
  );
};

export default HomePage;
