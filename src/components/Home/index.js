import React from 'react';

# leanpub-start-insert
import { withAuthorization } from '../Session';
# leanpub-end-insert

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
# leanpub-start-insert
    <p>The Home Page is accessible by every signed in user.</p>
# leanpub-end-insert
  </div>
);

# leanpub-start-insert
const condition = authUser => !!authUser;
# leanpub-end-insert

# leanpub-start-insert
export default withAuthorization(condition)(HomePage);
# leanpub-end-insert
