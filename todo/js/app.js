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


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(<p>Todo test 111</p>, rootElement);
}
