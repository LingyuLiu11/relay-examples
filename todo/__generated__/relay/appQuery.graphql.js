/**
 * @generated SignedSource<<e379edfb444b765c46a53ba13edf7969>>
 * @relayHash cf27addba2ecf69d9b7c943f053d43d9
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

// @relayRequestID 8b9aab4cef65f3be232ab261bcbad62283e2a0af

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type appQuery$variables = {|
  id?: ?string,
|};
export type appQuery$data = {|
  +user: ?{|
    +id: string,
    +status: string,
  |},
|};
export type appQuery = {|
  variables: appQuery$variables,
  response: appQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "appQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": "8b9aab4cef65f3be232ab261bcbad62283e2a0af",
    "metadata": {},
    "name": "appQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node/*: any*/).hash = "63d834bd7f56f18234d10786d6afc978";

module.exports = ((node/*: any*/)/*: Query<
  appQuery$variables,
  appQuery$data,
>*/);
