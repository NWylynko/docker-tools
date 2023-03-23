

export const generateAlias = (name: string, version: string) => {
  return `alias ${name}${version}='docker run --interactive --tty --rm --workdir /app --volume $PWD:/app --publish-all --network='host' --privileged ${name}:${version} ${name}'`
}