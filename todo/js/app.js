// @flow
import 'todomvc-common';

import * as React from 'react';
import ReactDOM from 'react-dom';

import {
  EntryPointContainer,
  RelayEnvironmentProvider,
  loadEntryPoint,
} from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestParameters,
  type Variables,
  type GraphQLResponse,
} from 'relay-runtime';

import {ErrorBoundary} from 'react-error-boundary';
import { useEffect, useState } from 'react/cjs/react.production.min';


const rootElement = document.getElementById('root');

//first need to define a query:
const appQuery = graphql`
  query appQuery($id: String) {
    user(id: $id) {
      id
      status
    }
  }
`

function App () {
  // const [user, setUser] = useState(null);
  // useEffect(() => {

  // }, [])

  return <div>
    todo
  </div>
}

if (rootElement) {
  ReactDOM.render(<p>Todo test 111</p>, rootElement);
}
