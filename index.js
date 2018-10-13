import { createFilter } from 'rollup-pluginutils';
import transform from 'linaria/lib/transform';
import slugify from 'linaria/lib/slugify';

export default function linaria({ include, exclude, sourceMap, ...rest } = {}) {
  const filter = createFilter(include, exclude);
  const cssLookup = {};

  return {
    name: 'linaria',
    load(id) {
      return cssLookup[id];
    },
    resolveId(importee, importer) {
      if (importee in cssLookup) return importee;
    },
    transform(code, id) {
      if (!filter(id)) return;

      const result = transform(id, code, rest);

      if (result.cssText) {
        let { cssText } = result;

        const slug = slugify(id);
        const filename = `${id.replace(/\.js$/, '')}_${slug}.css`;

        if (sourceMap) {
          const map = Buffer.from(result.sourceMap).toString('base64');
          cssText += `/*# sourceMappingURL=data:application/json;base64,${map}*/`;
        }

        cssLookup[filename] = cssText;

        result.code += `\nimport ${JSON.stringify(filename)};\n`;

        return result.code;
      }
    }
  };
}
