export type SongType = {
  artist: string;
  title: string;
  album: string;
  releaseYear: string;
  genre: string;
  length: string;
  albumCover: string;
};

export type StateSongType = {
  songs: SongType[];
};
