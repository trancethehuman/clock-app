export const getTime = (req, res) => {
  res.json({ time: new Date().getTime()});
}
