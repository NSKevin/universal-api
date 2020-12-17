module.exports = {
  'name': 'evapi',
  'version': '1.0.0',
  'description': '',
  'typings': 'types/index.d.ts',
  "scripts": {
    "build": "build-scripts build",
    "start": "build-scripts start",
    "lint": "eslint --ext .js --ext .jsx ./"
  },
  'dependencies': {
    "rax": "1.1.4",
    "rax-app": "2.2.2",
    "rax-canvas": "^2.2.0",
    "rax-document": "^0.1.0",
    "rax-image": "^2.0.0",
    "rax-recyclerview": "^1.2.1",
    "rax-scrollview": "^3.2.3",
    "rax-slider": "^2.3.2",
    "rax-text": "^1.0.0",
    "rax-textinput": "^1.2.1",
    "rax-video": "^1.4.0",
    "rax-view": "^1.0.0",
    '@babel/runtime-corejs3': '^7.11.0'
  },
  "devDependencies": {
    "@ali/build-plugin-rax-app-def": "^1.0.0",
    "@alib/build-scripts": "^0.1.22",
    "babel-merge": "^3.0.0",
    "babel-plugin-import": "^1.13.0",
    "build-plugin-rax-app": "5.1.2",
    "build-plugin-rax-compat-react": "^0.1.1",
    "build-plugin-rax-fly": "^1.0.2",
    "prettier": "^2.0.5",
    "style-resources-loader": "^1.3.3",
    "typescript": "^3.9.7",
    "webpack-sources": "^1.4.3"
  },
  'license': 'BSD-3-Clause',
  'author': 'rax',
};