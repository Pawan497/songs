//Action Creator
export const selectSong = (song) => {
    //Return an action (javascript not jsx)
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};