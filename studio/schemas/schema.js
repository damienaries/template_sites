// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import video from './video';
import author from './author';
import visuals from './visuals';
import stopMotion from './stopMotion';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',

  // Add custom shcemas here
  types: schemaTypes.concat([
    video,
    author,
    visuals,
    stopMotion
  ]),
})
