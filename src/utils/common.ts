export function pad(num: any, n = 2) {
  let len = num.toString().length;
  while (len < n) {
    num = '0' + num;
    len++;
  }
  return num;
}
export function formatTime(interval: number) {
  interval = (interval / 1000) | 0;
  const minute = pad((interval / 60) | 0);
  const second = pad(interval % 60);
  return `${minute}:${second}`;
}
export function handleSongs(songList: Array<any>): Array<any> {
  const newSongList: Array<any> = [];
  songList.forEach((list) => {
    const {
      id,
      name,
      song: {
        mvid,
        artists,
        album: { blurPicUrl },
        duration,
      },
    }: any = list;
    newSongList.push({
      id,
      name,
      song: {
        mvid,
        artists,
        album: { blurPicUrl },
        duration: formatTime(duration),
      },
    });
  });
  return newSongList;
}
export function genImgUrl(url: string, w: number, h: number) {
  if (!h) {
    h = w;
  }
  url += `?param=${w}y${h}`;
  return url;
}
