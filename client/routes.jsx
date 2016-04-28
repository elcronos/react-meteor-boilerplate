import React from 'react';
import {mount} from 'react-mounter';

import AppLayout from '/imports/client/ui/layout.jsx';
import ToDos from '/imports/client/ui/components/to_dos.jsx';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    mount(AppLayout, {
      content: () => (<ToDos />)
    });
  }
});
