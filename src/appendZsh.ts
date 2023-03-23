

export const appendZsh = async (text: string) => {
  // const zshrc = `${process.env.HOME}/.zshrc`
  const zshrc = `zshrc.test`
  console.log({ zshrc })

  const zsh = await Bun.file(zshrc).text()
  const newZsh = `${zsh}\n${text}`
  await Bun.write(zshrc, newZsh)
}