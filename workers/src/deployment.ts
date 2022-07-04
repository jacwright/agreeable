/*
A deployment is under one subdomain (e.g. myapp.agreeable.cloud)
Each deployment contains a separate configuration, set of rules
and buckets of data. Users connected to a deployment will only be
able to access data within that deployment.

A deployment will contain settings for user authentication and
for each bucket provisioned within that deployment.

To create buckets and manage their settings, and to manage the
other settings in a deployment, you must use the API secret key
provided in your account where you manage deployments.

/buckets
/settings
/analytics

Rename Object to Room, or Space? Each room can have one or more objects associated
with it. They can be of varying types (LWW or OT).

A project "room" will have the project meta which is a LWW object, and the project
itself which is an OT object.

A user "room" will have multiple LWW objects in it. One for profile and preferences,
one for a list of projects owned, one for stats, etc.

Presence isn't required for a room/space. When presence is sent, the connection
pool will connect with that room via websocket and revsions/changed may be sent
over very frequently. When no presences is sent, we will update the connection
of changes, but we assume they will not be frequent and realtime, so we will
not connect via a socket.
*/



async function durableObject(state: DurableObjectState, env: any) {
  let api;

  state.blockConcurrencyWhile(async () => {
    api = await deployment(state);
  });

  function fetch(req: Request) {

  }

  return { fetch };
}



async function deployment(state: DurableObjectState) {
  await state.storage.get('settings');

}


