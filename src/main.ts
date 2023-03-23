import { appendZsh } from './appendZsh.js';
import meow from 'meow';
import { generateAlias } from './generateAlias.js';

export const main = () => {
  const cli = meow(`
    Usage
      $ docker-tools <input>

    Commands
      --add <name> --version <version>  Add an alias for a docker image
      --remove <name> --version <version>  Remove an alias for a docker image
  `, {
    importMeta: import.meta,
    flags: {
      add: {
        type: "string",
        isRequired: (flags) => {
          // only required if remove is not present
          return !flags.remove
        }
      },
      remove: {
        type: "string",
        isRequired: (flags) => {
          // only required if add is not present
          return !flags.add
        }
      },
      version: {
        type: "string",
        default: "latest"
      }
    }
  });

  if (cli.flags.add) {
    const alias = generateAlias(cli.flags.add, cli.flags.version)

    appendZsh(alias)

    console.log({ alias })
  }

}