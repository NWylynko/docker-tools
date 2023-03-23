

export const x = {
  "python": () => `alias python="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged python:latest python"`,
  "python3": () => `alias python3="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged python:3 python"`,
  "python3.11": () => `alias python3.11="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged python:3.11 python"`,
  "python3.10": () => `alias python3.10="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged python:3.10 python"`,
  "python3.9": () => `alias python3.9="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged python:3.9 python"`,
  "python3.8": () => `alias python3.8="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged python:3.8 python"`,

  "node": () => `alias node="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged node:latest node"`,
  "node19": () => `alias node19="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged node:19 node"`,
  "node18": () => `alias node18="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged node:18 node"`,
  "node17": () => `alias node17="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged node:17 node"`,
  "node16": () => `alias node16="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged node:16 node"`,
  "node15": () => `alias node15="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged node:15 node"`,

  "bun": () => `alias bun="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged bun:latest bun"`,
  "bun0.5": () => `alias bun0.5="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged bun:0.5 bun"`,
  "bun0.5.8": () => `alias bun0.5.8="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged bun:0.5.8 bun"`,
  "bun": () => `alias bun="docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network="host" --privileged bun:latest bun"`,
}