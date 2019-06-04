# GithubRepoBrowserRN
sample app to browse a Github repo, in react Native

| iOS        | Android |
| ------------- |-------- |
| ![Browser App on iOS](https://raw.githubusercontent.com/pcarion/GithubRepoBrowserRN/master/docs/ios-demo.gif) | ![Browser App on Android](https://raw.githubusercontent.com/pcarion/GithubRepoBrowserRN/master/docs/android-demo.gif) |

## Main steps

### Create app

Create app with:

```
react-native init GithubRepoBrowserRN
```

### Add eslint

ref:
* https://github.com/jerolimov/react-native-with-eslint
* https://codeburst.io/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6

```
yarn add --dev eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import
```


add `.eslintrc.json`


### Add router

```
yarn add react-router-native
```

define routes is `App.js`

