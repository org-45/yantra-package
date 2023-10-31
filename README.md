#### yantra-pacakge

Starter npm package for learners.

### How to test it locally ?

- mkdir yantra-package-test
- cd yantra-package-test
- npm init -y
- npm install yantra-package
- create test.js file as 

```
import yantraPackage from 'yantra-package';
console.log(yantraPackage);
```

- node test.js


### Assignment:

Make a module integrating one of the package mentioned in bootcamp discord channel. Make sure to test the module on [yantra-package-tester](https://github.com/org-45/yantra-package-tester) repo.

### How to contribute it locally ?

- Using  `npm link` as in https://docs.npmjs.com/cli/v8/commands/npm-link 

- Use `npm link` on yantra-package as well as yantra-package-tester repo respectively and you dont need to publish each time to test a feature.
