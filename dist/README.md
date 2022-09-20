This is fix for the [next-export-i18n](https://github.com/martinkr/next-export-i18n) to make it work with monorepo. Since original module hardcoded the location of userI18n file, it throws 'Cannot resolve module' in monorepo projects. To make it work call:

```
import { setupUserI18N } from 'next-export-i18n';

setupUserI18N(i18n);
```