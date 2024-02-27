import {useState, useRef, useEffect} from "react";
import {Controls, PlayerState, InitialPlayerState, Playlist} from "./PlayerLogic/Types.tsx";
import {createAudioPlayer} from "./PlayerLogic/Player.tsx";

interface AudioPlayer extends Controls {
    playerState : PlayerState;
}

function useAudioPlayer(playlist : Playlist) : AudioPlayer {
    const [playerState, setPlayerState] = useState<PlayerState>(InitialPlayerState);
    const playerRef = useRef<Controls  | null>(null);

    useEffect(() => {
        const newPlayer = createAudioPlayer(playlist, setPlayerState);
        playerRef.current = newPlayer;
        return () => {
            newPlayer.cleanup();
        };
    }, [playlist]);

    function togglePlayPause() {
        playerRef.current?.togglePlayPause();
    }

    function playNextTrack() {
        playerRef.current?.playNextTrack();
    }

    function playPrevTrack() {
        playerRef.current?.playPrevTrack();
    }

    function cleanup() {
        playerRef.current?.cleanup();
    }

    function toggleRepeat() {
        playerRef.current?.toggleRepeat();
    }

    function toggleShuffle() {
        playerRef.current?.toggleShuffle();
    }

    function setPlaybackPosition(position : number) {
        playerRef.current?.setPlaybackPosition(position);
    }

    return {
        setPlaybackPosition,
        playerState,
        togglePlayPause, 
        playNextTrack, 
        playPrevTrack,
        toggleRepeat,
        toggleShuffle,
        cleanup,
    };
}

export default useAudioPlayer;
