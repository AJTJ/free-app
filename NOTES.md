
## CURRENT
- Ensure that the forms/reports in a basic sense
  - Check that "non-optional" internal fields works.
    - Then adapt the rest of them to this logical setting.
  - Then keep adding to `V1Fields`
    - Ensure you are extracting the shared components.
## LATEST TODO
- Funding
  - Check with orgs in Canada for money
- Forms/Reports
  - Get Patrick reading code and (ideally) writing code.
    - Get his docker working
    - Get him a development build of the app? Does he need his own apple developer account?
  - Things to get together to build out the app
    - Back AND Front
      - Update all fields to make sense and to have good names
      - Work on map usecases
      - Work on dive and public profile
      - Work on minimal social connectivity
        - Basics of adding friends and dive buddies
        - Basics of sharing dive sites with friends
    - Front
      - Build out all components for all the fields
      - Implement them in a way that works
      - Implement designs
    - Back
      - Learn to query the postgres jsonb fields
      - add tracing for all sorts of query types
      - Add email confirmation for account confirmation
      - Load testing

### Dev mode things
- https://expo.dev/accounts/aaronjanke/projects/free_app/builds/d56bbfd2-410c-4de7-861c-26de6173dd05

Resolutions needed?
`
 "resolutions": {
    "@types/react": "^17"
  },

  "@expo/webpack-config": "^18.0.1",

  "@react-navigation/native": "^6.0.12",
    "@react-navigation/native-stack": "^6.8.0",
`

### TODOs
- styling library?
  - Choose one
- data visualization library?
  - not immiment
- Codegen for front-end queries
  - https://the-guild.dev/graphql/codegen/docs/getting-started/installation
- debugging
  - https://reactnative.dev/docs/debugging
    - this is for apollo graphql
    - get this working iwth the `react-native-debugger` tool
    - referenced here: https://www.apollographql.com/docs/react/integrations/react-native/
- Upgrades
  - change react navigation to expo router v2

### Form stuff
- Validation
  - https://zod.dev/

### GQL Tools
- https://graphql.org/learn/queries/
- https://blog.devgenius.io/creating-custom-hooks-using-apollo-in-react-c93ca13cd0c3
- https://www.apollographql.com/docs/react/data/queries/#manual-execution-with-uselazyquery
- https://thinkster.io/tutorials/boost-your-react-apps-with-apollo-beyond-the-basics/calling-queries-manually-with-uselazyquery
- https://the-guild.dev/graphql/codegen/docs/getting-started/installation

### AUTH THINGS
- Cookies
  - Seem... challenging and not really worth it right now.
- JWT
  - https://stackoverflow.com/questions/70781323/how-to-properly-handle-login-from-a-react-native-expo-project-using-jwt-token
  - https://github.com/blake-simpson/expo-jwt
- General
  - https://jerrynsh.com/all-to-know-about-auth-and-cookies/#session-based-vs-token-based-authentication
  - https://stytch.com/blog/jwts-vs-sessions-which-is-right-for-you/#:~:text=JWTs%20versus%20sessions%20cookies&text=JWTs%20enable%20faster%20authorization%20and,to%20sensitive%20data%20or%20actions.
  - https://www.loginradius.com/blog/engineering/guest-post/jwt-vs-sessions/
  - https://docs.expo.dev/versions/latest/sdk/securestore/
  - https://github.com/ammarahm-ed/react-native-mmkv-storage
  - https://github.com/blake-simpson/expo-jwt

https://dev.to/lico/react-apollo-refresh-tokens-5h0k

### commands/processes
- start project for dev (with phone)
  - `npx expo start`
- shake your phone to bring up the developer menu
- cmd + shift + p => Restardt Typescript TS server
- eslint rules, but for typescript:
  - https://typescript-eslint.io/

### project tools
- Valtio state management
  - https://valtio.pmnd.rs/
  - https://github.com/pmndrs/valtio
- React Navigation
  - BASICS
    - https://reactnavigation.org/docs/navigating
  - TYPESCRIPT particulars
    - https://reactnavigation.org/docs/typescript/
- react-hook-form
  - https://react-hook-form.com/get-started
  - https://react-hook-form.com/get-started#ReactNative
- apollo graphql client
  - https://www.apollographql.com/docs/react/integrations/react-native/
  - https://www.apollographql.com/docs/react/development-testing/static-typing/
- formik (DEPRECATED form solution)
  - https://formik.org/docs/guides/typescript
  - https://formik.org/docs/guides/react-native 
- recoil (DEPRECATED state management)
  - https://recoiljs.org/docs/introduction/getting-started
  - https://recoiljs.org/docs/guides/asynchronous-data-queries

## Apollo
- fetch policies
  - https://medium.com/@galen.corey/understanding-apollo-fetch-policies-705b5ad71980
  - 
## Offline
- https://codeburst.io/highly-functional-offline-applications-using-apollo-client-12885bd5f335

### desktop tools
- react-native-debugger
  - this seems useful in order to make the best use of apollo graphql
  - install: https://github.com/jhen0409/react-native-debugger

###
- ejecting
  - https://docs.expo.dev/workflow/customizing/
  - https://docs.expo.dev/develop/development-builds/introduction/
  - https://docs.expo.dev/config-plugins/introduction/?redirected
### mapping
- mmapbox
  - https://github.com/rnmapbox/maps
- maplibre
  - React Native Lib
    - https://github.com/maplibre/maplibre-react-native
  - Docs
    - https://maplibre.org/maplibre-gl-js/docs/
  - GeoJSON
    - https://geojson.org/
- GENERAL
  - https://github.com/onthegomap/planetiler
  - https://mapnik.org/
  - https://github.com/mapnik/mapnik
- POSTGis implementations
  - POSTgis support for geographic data with postgres
    - https://postgis.net/
  - POSTGIS version of postgres
    - https://registry.hub.docker.com/r/postgis/postgis/
  - regular postgres
    - https://registry.hub.docker.com/_/postgres/

### Eventual deployment
- EAS
  - somewhat pricey for OTA updates
  - Builds aren't that bad
  - alternatives: https://www.reddit.com/r/reactnative/comments/13pqw48/expo_eas_build_alternative/
- Codepush
  - https://appcenter.ms/?utm_source=CodePush&utm_medium=Azure
  - 
- Fastlane for signing, building, and releasing the app
  - https://github.com/fastlane/fastlane
  - https://dev.to/gabrielsadaka/react-native-expo-automated-deployment-using-fastlane-and-circleci-1ggc
- CodePush & fastlane
  - https://echobind.com/post/automating-codepush-deploys-with-fastlane